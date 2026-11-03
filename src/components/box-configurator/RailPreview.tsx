"use client";

import { componentById } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { boxFit, sortedItems, type Line } from "./model";
import s from "./configurator.module.css";

type Unit = { key: string; w: number; kind: string; badge: string; title: string; poles: string };

function rowWidth(capacity: number) {
  if (capacity <= 18) return capacity;
  if (capacity % 18 === 0) return 18;
  if (capacity % 12 === 0) return 12;
  return Math.ceil(capacity / 2);
}

export function RailPreview({ line, t, lang }: { line: Line; t: Copy; lang: "en" | "ru" }) {
  const { used, capacity, rec } = boxFit(line);
  const units: Unit[] = [];
  const sorted = sortedItems(line.items);
  for (const item of sorted) {
    const def = componentById(item.id);
    if (!def) continue;
    const w = def.modules(item.specs);
    const poles = item.specs.poles || "";
    for (let n = 0; n < item.qty; n++) {
      units.push({ key: `${item.uid}-${n}`, w, kind: def.kind, badge: def.badge(item.specs), title: def.name[lang], poles });
    }
  }

  const perRow = capacity ? rowWidth(capacity) : 12;
  // Small boxes are drawn at true scale on a 12-module rail; the unused part is hatched.
  const cols = Math.max(perRow, 12);
  const boxRows = capacity ? Math.ceil(capacity / perRow) : 0;
  const rows: Unit[][] = [[]];
  let free = perRow;
  for (const u of units) {
    if (u.w > free && rows[rows.length - 1].length) {
      rows.push([]);
      free = perRow;
    }
    rows[rows.length - 1].push(u);
    free -= u.w;
  }
  while (rows.length < Math.max(boxRows, 1)) rows.push([]);

  const over = capacity !== null && used > capacity;
  const pct = capacity ? Math.min(100, (used / capacity) * 100) : 0;

  return (
    <div className={s.railPanel}>
      <div className={s.railHead}>
        <span className={s.railTitle}>{t.rail}</span>
        <span className={`${s.railCount} ${over ? s.isOver : ""}`}>
          <span><strong>{used}</strong>{capacity ? ` / ${capacity}` : ""} {t.modules}</span>
          {rec ? <em>{t.recommended}: {rec.size.model} · {rec.series.ip}</em> : null}
        </span>
      </div>
      <div className={s.meter} aria-hidden="true">
        <span className={over ? s.isOver : ""} style={{ width: `${over ? 100 : pct}%` }} />
      </div>
      <div className={s.rails}>
        {rows.map((row, r) => (
          <div
            className={`${s.rail} ${boxRows && r >= boxRows ? s.railOver : ""}`}
            style={{ gridTemplateColumns: `repeat(${cols * 2}, minmax(0, 1fr))` }}
            key={r}
          >
            {/* Wiring layer: color-coded lines above devices */}
            <svg className={s.wiring} viewBox={`0 0 ${cols * 2 * 10} 40`} preserveAspectRatio="none">
              <defs>
                <pattern id="pe-stripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <rect width="3" height="6" fill="#10b981" />
                  <rect x="3" width="3" height="6" fill="#fbbf24" />
                </pattern>
              </defs>
              {row.map((u, i) => {
                const x = row.slice(0, i).reduce((sum, prev) => sum + prev.w * 2, 0) * 10;
                const w = u.w * 2 * 10;
                const poleNum = u.poles === "1P+N" ? 2 : Number(u.poles[0] || 0) + (u.poles.includes("+N") ? 1 : 0);
                const wires: { y: number; color: string; label: string }[] = [];
                if (poleNum >= 1) wires.push({ y: 8, color: "#ef4444", label: "L1" });
                if (poleNum >= 2 && !u.poles.includes("1P+N")) wires.push({ y: 14, color: "#f59e0b", label: "L2" });
                if (poleNum >= 3) wires.push({ y: 20, color: "#10b981", label: "L3" });
                if (u.poles.includes("+N") || u.poles === "2P" || u.poles === "4P") wires.push({ y: 26, color: "#3b82f6", label: "N" });
                if (poleNum > 0) wires.push({ y: 32, color: "url(#pe-stripe)", label: "PE" });
                return wires.map((wire) => (
                  <rect key={`${u.key}-${wire.label}`} x={x} y={wire.y} width={w} height="3" fill={wire.color} rx="1.5" />
                ));
              })}
            </svg>

            {row.map((u) => (
              <div
                className={s.device}
                data-kind={u.kind}
                style={{ gridColumn: `span ${u.w * 2}`, gridRow: 1 }}
                key={u.key}
                title={u.title}
              >
                <i />
                <b>{u.badge}</b>
              </div>
            ))}
            {cols > perRow ? <span className={s.railLimit} style={{ gridColumn: `${perRow * 2 + 1} / -1`, gridRow: 1 }} /> : null}
          </div>
        ))}
      </div>
      {over ? <p className={s.railWarn}>{t.overflow}</p> : null}
      {!capacity && used > 0 && line.material === "abs" && line.sizeMode === "auto" ? <p className={s.railWarn}>{t.noFit}</p> : null}
      {units.length > 0 ? (
        <p className={s.railDisclaimer}>
          ⚠️ {lang === "ru" ? "Схема проводки приведена для справки. Инженер TPKELE проверит логику подключения и соответствие перед составлением коммерческого предложения." : "Wiring preview for reference only. A TPKELE engineer will verify circuit logic and compliance before quotation."}
        </p>
      ) : null}
    </div>
  );
}
