"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { componentById, components, defaultSpecs, type ComponentDef } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { specText, uid, type Item, type Line } from "./model";
import { Stepper } from "./Stepper";
import s from "./configurator.module.css";

type Props = { line: Line; set: (patch: Partial<Line>) => void; t: Copy; lang: "en" | "ru" };
type Draft = { id: string; specs: Record<string, string>; qty: number; editing?: string };

function Tier({ n }: { n: number }) {
  return (
    <span className={s.tier} aria-hidden="true">
      {[1, 2, 3, 4].map((i) => <span key={i} className={i <= n ? s.on : ""} />)}
    </span>
  );
}

function SpecEditor({ def, draft, setDraft, t, lang, onDone, onCancel }: {
  def: ComponentDef;
  draft: Draft;
  setDraft: (d: Draft) => void;
  t: Copy;
  lang: "en" | "ru";
  onDone: () => void;
  onCancel: () => void;
}) {
  return (
    <div className={s.editor}>
      <div className={s.editorHead}>
        <div className={s.editorImg}><Image src={def.image} alt={def.name[lang]} width={88} height={88} /></div>
        <div>
          <h4>{def.name[lang]}</h4>
          <p>{def.desc[lang]}</p>
          {def.href ? <Link href={def.href} target="_blank" className={s.textLink}>{t.view} ↗</Link> : null}
        </div>
      </div>
      {def.specs.map((g) => (
        <fieldset className={s.specGroup} key={g.key}>
          <legend>{g.label[lang]}</legend>
          {g.hint ? <p className={s.hint}>{g.hint[lang]}</p> : null}
          <div className={g.wide ? s.chips : g.options.some((o) => o.note) ? s.optCards : s.segment}>
            {g.options.map((o) => {
              const active = draft.specs[g.key] === o.v;
              return (
                <button
                  type="button"
                  key={o.v}
                  className={active ? s.active : ""}
                  aria-pressed={active}
                  onClick={() => setDraft({ ...draft, specs: { ...draft.specs, [g.key]: o.v } })}
                >
                  <span className={s.optV}>{o.v}{o.tier ? <Tier n={o.tier} /> : null}</span>
                  {o.note ? <span className={s.optNote}>{o.note[lang]}</span> : null}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div className={s.editorFoot}>
        <div>
          <span className={s.label}>{t.qty} <small>({t.perBox})</small></span>
          <Stepper value={draft.qty} min={1} max={99} onChange={(qty) => setDraft({ ...draft, qty })} />
        </div>
        <div className={s.editorActions}>
          <button type="button" className={s.ghostBtn} onClick={onCancel}>{t.cancel}</button>
          <button type="button" className={s.primaryBtn} onClick={onDone}>{draft.editing ? t.update : t.add}</button>
        </div>
      </div>
    </div>
  );
}

export function ComponentPicker({ line, set, t, lang }: Props) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const list = components.filter((c) => c.flow === line.flow);
  const open = (def: ComponentDef) => setDraft({ id: def.id, specs: defaultSpecs(def), qty: 1 });

  function commit() {
    if (!draft) return;
    const items: Item[] = draft.editing
      ? line.items.map((i) => (i.uid === draft.editing ? { ...i, specs: draft.specs, qty: draft.qty } : i))
      : [...line.items, { uid: uid(), id: draft.id, specs: draft.specs, qty: draft.qty }];
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
        <SpecEditor def={draftDef} draft={draft} setDraft={setDraft} t={t} lang={lang} onDone={commit} onCancel={() => setDraft(null)} />
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
