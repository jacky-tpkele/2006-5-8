"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ComponentDef } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { Stepper } from "./Stepper";
import s from "./configurator.module.css";

type Props = {
  def: ComponentDef;
  initialSpecs: Record<string, string>;
  initialQty: number;
  lang: "en" | "ru";
  t: Copy;
  isEdit: boolean;
  onSave: (specs: Record<string, string>, qty: number) => void;
  onCancel: () => void;
};

function Tier({ n }: { n: number }) {
  return (
    <span className={s.tier} aria-hidden="true">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={i <= n ? s.on : ""} />
      ))}
    </span>
  );
}

export function ComponentConfigModal({ def, initialSpecs, initialQty, lang, t, isEdit, onSave, onCancel }: Props) {
  const [specs, setSpecs] = React.useState(initialSpecs);
  const [qty, setQty] = React.useState(initialQty);

  const handleSave = () => {
    onSave(specs, qty);
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div className={s.modalOverlay} onClick={onCancel}>
      <div className={s.modalContent} role="dialog" aria-modal="true" aria-label={def.name[lang]} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <div className={s.modalHeadFlex}>
            <div className={s.modalImg}>
              <Image src={def.image} alt={def.name[lang]} width={80} height={80} />
            </div>
            <div>
              <h3>{def.name[lang]}</h3>
              <p>{def.desc[lang]}</p>
              {def.href ? (
                <Link href={def.href} target="_blank" className={s.textLink}>
                  {t.view} ↗
                </Link>
              ) : null}
            </div>
          </div>
          <button type="button" className={s.modalClose} onClick={onCancel} aria-label="Close">
            ×
          </button>
        </div>

        <div className={s.modalBody}>
          {def.specs.map((g) => (
            <fieldset className={s.specGroup} key={g.key}>
              <legend>{g.label[lang]}</legend>
              {g.hint ? <p className={s.hint}>{g.hint[lang]}</p> : null}
              <div className={g.wide ? s.chips : g.options.some((o) => o.note) ? s.optCards : s.segment}>
                {g.options.map((o) => {
                  const active = specs[g.key] === o.v;
                  return (
                    <button
                      type="button"
                      key={o.v}
                      className={active ? s.active : ""}
                      aria-pressed={active}
                      onClick={() => setSpecs({ ...specs, [g.key]: o.v })}
                    >
                      <span className={s.optV}>
                        {o.v}
                        {o.tier ? <Tier n={o.tier} /> : null}
                      </span>
                      {o.note ? <span className={s.optNote}>{o.note[lang]}</span> : null}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {def.modules(specs) === 0 ? <p className={s.notice}>{t.offRailNotice}</p> : null}

          <div className={s.qtyRow}>
            <span className={s.label}>
              {t.qty} <small>({t.perBox})</small>
            </span>
            <Stepper value={qty} min={1} max={99} onChange={setQty} />
          </div>
        </div>

        <div className={s.modalFooter}>
          <button type="button" className={s.ghostBtn} onClick={onCancel}>
            {t.cancel}
          </button>
          <button type="button" className={s.primaryBtn} onClick={handleSave}>
            {isEdit ? t.update : t.add}
          </button>
        </div>
      </div>
    </div>
  );
}
