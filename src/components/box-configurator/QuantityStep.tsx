"use client";

import { EMPTY_BOX_MOQ, extras } from "@/data/box-configurator";
import type { Copy } from "./copy";
import type { Line } from "./model";
import { Stepper } from "./Stepper";
import s from "./configurator.module.css";

export function QuantityStep({ line, set, t, lang }: { line: Line; set: (p: Partial<Line>) => void; t: Copy; lang: "en" | "ru" }) {
  const empty = line.flow === "empty";
  const presets = empty ? [500, 1000, 2000, 5000] : [1, 10, 50, 100];
  const opts = extras.filter((e) => e.flows.includes(line.flow));
  const toggle = (id: string) => set({ extras: line.extras.includes(id) ? line.extras.filter((x) => x !== id) : [...line.extras, id] });

  return (
    <div className={s.stack}>
      <section>
        <span className={s.label}>{empty ? t.qty : t.boxQty}</span>
        <div className={s.qtyRow}>
          <Stepper large value={line.qty} min={1} max={99999} step={empty ? 100 : 1} onChange={(qty) => set({ qty })} />
          <span className={s.unit}>{t.sets}</span>
          <div className={s.presets}>
            {presets.map((p) => (
              <button type="button" key={p} className={line.qty === p ? s.active : ""} onClick={() => set({ qty: p })}>{p.toLocaleString()}</button>
            ))}
          </div>
        </div>
        {empty && line.qty < EMPTY_BOX_MOQ ? <p className={s.warn} role="status">{t.moq(EMPTY_BOX_MOQ)}</p> : null}
      </section>

      <section>
        <span className={s.label}>{t.extras}</span>
        <div className={s.toggleGrid}>
          {opts.map((o) => {
            const on = line.extras.includes(o.id);
            return (
              <button type="button" key={o.id} className={`${s.toggle} ${on ? s.active : ""}`} aria-pressed={on} onClick={() => toggle(o.id)}>
                <span className={s.box}>{on ? "✓" : ""}</span>
                {o.label[lang]}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <label className={s.field}>
          <span className={s.label}>{t.notes}</span>
          <textarea rows={3} value={line.notes} maxLength={600} placeholder={t.notesPh} onChange={(e) => set({ notes: e.target.value })} />
        </label>
      </section>
    </div>
  );
}
