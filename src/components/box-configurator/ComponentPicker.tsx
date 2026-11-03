"use client";

import Image from "next/image";
import { useState } from "react";
import { componentById, components, defaultSpecs, type ComponentDef } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { specText, uid, type Item, type Line } from "./model";
import { Stepper } from "./Stepper";
import { ComponentConfigModal } from "./ComponentConfigModal";
import s from "./configurator.module.css";

type Props = { line: Line; set: (patch: Partial<Line>) => void; t: Copy; lang: "en" | "ru" };
type Draft = { id: string; specs: Record<string, string>; qty: number; editing?: string };

export function ComponentPicker({ line, set, t, lang }: Props) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const list = components.filter((c) => c.flow === line.flow);
  const open = (def: ComponentDef) => setDraft({ id: def.id, specs: defaultSpecs(def), qty: 1 });

  function commit(specs: Record<string, string>, qty: number) {
    if (!draft) return;
    const items: Item[] = draft.editing
      ? line.items.map((i) => (i.uid === draft.editing ? { ...i, specs, qty } : i))
      : [...line.items, { uid: uid(), id: draft.id, specs, qty }];
    set({ items, engineerPicks: false });
    setDraft(null);
  }

  const counts = (id: string) => line.items.filter((i) => i.id === id).reduce((n, i) => n + i.qty, 0);
  const draftDef = draft ? componentById(draft.id) : undefined;

  return (
    <div>
      <p className={s.hint}>{t.componentsHint}</p>
      <div className={s.compGrid}>
        {list.map((def) => {
          const n = counts(def.id);
          const active = draft?.id === def.id && !draft.editing;
          return (
            <button type="button" key={def.id} className={`${s.compCard} ${active ? s.active : ""}`} onClick={() => open(def)}>
              {n ? <span className={s.countBadge}>{n}</span> : null}
              <span className={s.compImg}><Image src={def.image} alt="" width={72} height={72} /></span>
              <span className={s.compName}>{def.name[lang]}</span>
              <span className={s.compDesc}>{def.desc[lang]}</span>
              <span className={s.compCta}>+ {t.configure}</span>
            </button>
          );
        })}
      </div>

      {draft && draftDef ? (
        <ComponentConfigModal
          key={draft.editing ?? draft.id}
          def={draftDef}
          initialSpecs={draft.specs}
          initialQty={draft.qty}
          lang={lang}
          t={t}
          isEdit={Boolean(draft.editing)}
          onSave={commit}
          onCancel={() => setDraft(null)}
        />
      ) : null}

      <div className={s.inBox}>
        <h4>{t.inBox}</h4>
        {line.items.length === 0 ? (
          <div className={s.inBoxEmpty}>
            <p>{t.noComponents}</p>
            <label className={s.check}>
              <input type="checkbox" checked={line.engineerPicks} onChange={(e) => set({ engineerPicks: e.target.checked })} />
              <span>{t.letEngineer}</span>
            </label>
          </div>
        ) : (
          <ul className={s.itemList}>
            {line.items.map((i) => {
              const def = componentById(i.id);
              if (!def) return null;
              return (
                <li key={i.uid} className={s.itemRow}>
                  <span className={s.dot} data-kind={def.kind} />
                  <span className={s.itemMain}>
                    <strong>{def.name[lang]}</strong>
                    <small>{specText(i)}</small>
                  </span>
                  <Stepper
                    value={i.qty}
                    min={1}
                    max={99}
                    compact
                    onChange={(qty) => set({ items: line.items.map((x) => (x.uid === i.uid ? { ...x, qty } : x)) })}
                  />
                  <button type="button" className={s.iconBtn} aria-label={t.edit} onClick={() => setDraft({ id: i.id, specs: i.specs, qty: i.qty, editing: i.uid })}>✎</button>
                  <button type="button" className={s.iconBtn} aria-label={t.remove} onClick={() => set({ items: line.items.filter((x) => x.uid !== i.uid) })}>×</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
