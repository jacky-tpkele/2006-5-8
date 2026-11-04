"use client";

import type { CSSProperties } from "react";
import { componentById } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { boxFit, circuitColor, sortedItems, type Item, type Line } from "./model";
import s from "./configurator.module.css";

type Unit = { key: string; w: number; kind: string; badge: string; title: string; poles: string };

function rowWidth(capacity: number) {
  if (capacity <= 18) return capacity;
  if (capacity % 18 === 0) return 18;
  if (capacity % 12 === 0) return 12;
  return Math.ceil(capacity / 2);
}

function buildUnits(items: Item[], lang: "en" | "ru"): Unit[] {
  const units: Unit[] = [];
  for (const item of sortedItems(items)) {
    const def = componentById(item.id);
    if (!def) continue;
    const w = def.modules(item.specs);
    const poles = item.specs.poles || "";
    for (let n = 0; n < item.qty; n++) {
      units.push({ key: `${item.uid}-${n}`, w, kind: def.kind, badge: def.badge(item.specs), title: def.name[lang], poles });
    }
  }
  return units;
}

/** One rail segment (a group of devices) laid out into rows of `perRow` modules. */
function RailSegment({ units, perRow, cols, accent }: { units: Unit[]; perRow: number; cols: number; accent?: string }) {
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

  return (
    <div className={s.rails} style={accent ? ({ "--accent": accent } as CSSProperties) : undefined}>
      {rows.map((row, r) => (
        <div className={s.rail} style={{ gridTemplateColumns: `repeat(${cols * 2}, minmax(0, 1fr))` }} key={r}>
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
            <div className={s.device} data-kind={u.kind} style={{ gridColumn: `span ${u.w * 2}`, gridRow: 1 }} key={u.key} title={u.title}>
              <i />
              <b>{u.badge}</b>
            </div>
          ))}
          {cols > perRow ? <span className={s.railLimit} style={{ gridColumn: `${perRow * 2 + 1} / -1`, gridRow: 1 }} /> : null}
        </div>
      ))}
      {units.length === 0 ? <p className={s.railSegEmpty}>—</p> : null}
    </div>
  );
}

export function RailPreview({ line, t, lang }: { line: Line; t: Copy; lang: "en" | "ru" }) {
  const { used, capacity, rec } = boxFit(line);
  const circuits = line.circuits ?? [];
  const hasCircuits = circuits.length > 0;

  const perRow = capacity ? rowWidth(capacity) : 12;
  // Small boxes are drawn at true scale on a 12-module rail; the unused part is hatched.
  const cols = Math.max(perRow, 12);

  const over = capacity !== null && used > capacity;
  const pct = capacity ? Math.min(100, (used / capacity) * 100) : 0;

  // Build one group per circuit, plus a "main busbar" group for unassigned items.
  // Without any circuits defined, everything is one group (previous behaviour).
  const assignedUids = new Set(circuits.flatMap((c) => c.itemUids));
  const byUid = new Map(line.items.map((i) => [i.uid, i]));
  const groups: { key: string; label: string; color?: string; items: typeof line.items }[] = hasCircuits
    ? [
        ...circuits.map((c, i) => ({
          key: c.uid,
          label: c.label.trim() || t.circuitDefaultLabel(i + 1),
          color: circuitColor(i),
          items: c.itemUids.map((id) => byUid.get(id)).filter((x): x is Item => Boolean(x)),
        })),
        {
          key: "__unassigned",
          label: t.mainBusbar,
          color: undefined,
          items: line.items.filter((i) => !assignedUids.has(i.uid)),
        },
      ]
    : [{ key: "__all", label: "", color: undefined, items: line.items }];

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

      {groups.map((g) => {
        const units = buildUnits(g.items, lang);
        if (!hasCircuits) return <RailSegment key={g.key} units={units} perRow={perRow} cols={cols} />;
        return (
          <div className={s.railSeg} key={g.key}>
            <div className={s.railSegHead}>
              <span className={s.railSegDot} style={{ background: g.color ?? "#5f6d68" }} />
              <span className={s.railSegLabel}>{g.label}</span>
              <span className={s.railSegCount}>{t.circuitItemCount(g.items.length)}</span>
            </div>
            <RailSegment units={units} perRow={perRow} cols={cols} accent={g.color} />
          </div>
        );
      })}

      {over ? <p className={s.railWarn}>{t.overflow}</p> : null}
      {!capacity && used > 0 && line.material === "abs" && line.sizeMode === "auto" ? <p className={s.railWarn}>{t.noFit}</p> : null}
      {line.items.length > 0 ? <p className={s.railDisclaimer}>⚠️ {t.wiringDisclaimer}</p> : null}
    </div>
  );
}
