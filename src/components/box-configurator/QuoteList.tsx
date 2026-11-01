"use client";

import { componentById } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { chosenSize, lineTitle, usedModules, type Line } from "./model";
import s from "./configurator.module.css";

type Props = {
  lines: Line[];
  lang: "en" | "ru";
  t: Copy;
  onEdit: (l: Line) => void;
  onRemove: (uid: string) => void;
  onRequest: () => void;
  showRequest: boolean;
};

export function QuoteList({ lines, lang, t, onEdit, onRemove, onRequest, showRequest }: Props) {
  return (
    <div className={s.quote}>
      <div className={s.quoteHead}>
        <h3>{t.quoteList}</h3>
        <span>{t.items(lines.length)}</span>
      </div>
      {lines.length === 0 ? (
        <div className={s.quoteEmpty}>
          <span aria-hidden="true">▢</span>
          <strong>{t.empty}</strong>
          <p>{t.emptyText}</p>
        </div>
      ) : (
        <ul className={s.quoteItems}>
          {lines.map((l) => {
            const c = chosenSize(l);
            const parts = l.items.map((i) => `${componentById(i.id)?.name[lang]} ×${i.qty}`);
            return (
              <li key={l.uid} className={s.quoteItem}>
                <div className={s.quoteTop}>
                  <strong>{lineTitle(l, lang)}</strong>
                  <span className={s.qtyPill}>×{l.qty.toLocaleString()}</span>
                </div>
                <small>
                  {l.material === "abs" ? "ABS" : "Metal"}
                  {c && l.flow !== "empty" ? ` · ${c.size.model}` : ""}
                  {l.flow !== "empty" ? ` · ${usedModules(l)} ${t.modules}` : c?.size.dims ? ` · ${c.size.dims}` : ""}
                </small>
                {parts.length ? <p>{parts.join(", ")}</p> : null}
                <div className={s.quoteActions}>
                  <button type="button" onClick={() => onEdit(l)}>{t.edit}</button>
                  <button type="button" onClick={() => onRemove(l.uid)}>{t.remove}</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {showRequest && lines.length > 0 ? (
        <button type="button" className={`${s.primaryBtn} ${s.block}`} onClick={onRequest}>{t.request} →</button>
      ) : null}
    </div>
  );
}
