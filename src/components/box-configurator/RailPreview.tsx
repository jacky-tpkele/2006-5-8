"use client";

import { componentById } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { boxFit, type Line } from "./model";
import s from "./configurator.module.css";

type Unit = { key: string; w: number; kind: string; badge: string; title: string };

function rowWidth(capacity: number) {
  if (capacity <= 18) return capacity;
  if (capacity % 18 === 0) return 18;
  if (capacity % 12 === 0) return 12;
  return Math.ceil(capacity / 2);
}

export function RailPreview({ line, t, lang }: { line: Line; t: Copy; lang: "en" | "ru" }) {
  const { used, capacity, rec } = boxFit(line);
  const units: Unit[] = [];
  for (const item of line.items) {
    const def = componentById(item.id);
    if (!def) continue;
    const w = def.modules(item.specs);
    for (let n = 0; n < item.qty; n++) {
      units.push({ key: `${item.uid}-${n}`, w, kind: def.kind, badge: def.badge(item.specs), title: def.name[lang] });
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
    </div>
  );
}
