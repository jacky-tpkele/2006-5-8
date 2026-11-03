"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { configSeries, seriesByCode, type Material } from "@/data/box-configurator";
import type { Copy } from "./copy";
import type { Line } from "./model";
import s from "./configurator.module.css";

type Props = { line: Line; set: (patch: Partial<Line>) => void; t: Copy; lang: "en" | "ru"; part: "material" | "size" | "all" };

function MaterialCards({ line, set, t }: Omit<Props, "part" | "lang">) {
  const pick = (material: Material) =>
    set({ material, series: material === "metal" ? "METAL" : line.series === "METAL" ? undefined : line.series, model: undefined });
  return (
    <div className={s.matGrid}>
      {(["abs", "metal"] as const).map((m) => {
        const c = m === "abs" ? t.abs : t.metal;
        const active = line.material === m;
        return (
          <button type="button" key={m} className={`${s.matCard} ${active ? s.active : ""}`} onClick={() => pick(m)} aria-pressed={active}>
            <span className={s.matVisual} data-mat={m}>
              <Image src={m === "abs" ? "/assets/enclosures/enclosure-hv.webp" : "/assets/enclosures/metal-placeholder.svg"} alt="" width={220} height={150} />
            </span>
            <span className={s.matText}>
              <strong>{c.title}</strong>
              <small>{c.text}</small>
            </span>
            <span className={s.radio} />
          </button>
        );
      })}
    </div>
  );
}

function MetalFields({ line, set, t }: Omit<Props, "part" | "lang">) {
  return (
    <div className={s.metalBox}>
      <p className={s.notice}>{t.metalSoon}</p>
      <div className={s.fieldRow}>
        <label className={s.field}>
          <span>{t.metalWays}</span>
          <input inputMode="numeric" value={line.metalWays ?? ""} onChange={(e) => set({ metalWays: e.target.value.replace(/\D/g, "").slice(0, 3) })} placeholder="24" />
        </label>
        <label className={s.field}>
          <span>{t.metalDims}</span>
          <input value={line.metalDims ?? ""} onChange={(e) => set({ metalDims: e.target.value.slice(0, 40) })} placeholder="400×500×150" />
        </label>
      </div>
    </div>
  );
}

function SeriesAndSize({ line, set, t, lang }: Omit<Props, "part">) {
  const list = configSeries.filter((x) => x.material === "abs" && (line.flow === "empty" || line.install === "indoor" || !x.indoorOnly));
  const series = line.series ? seriesByCode(line.series) : undefined;
  const [sizeModal, setSizeModal] = React.useState<string | null>(null);

  const modalSeries = sizeModal ? seriesByCode(sizeModal) : null;

  const handleSeriesClick = (code: string) => {
    setSizeModal(code);
  };

  const handleSizeSelect = (model: string) => {
    set({ series: sizeModal!, model });
    setSizeModal(null);
  };

  return (
    <>
      <span className={s.label}>{t.series}</span>
      <div className={s.seriesGrid}>
        {list.map((x) => {
          const active = line.series === x.code;
          return (
            <button type="button" key={x.code} className={`${s.seriesCard} ${active ? s.active : ""}`} onClick={() => handleSeriesClick(x.code)} aria-pressed={active}>
              <span className={s.seriesImg}><Image src={x.image} alt="" width={160} height={100} /></span>
              <span className={s.seriesBody}>
                <strong>{x.name[lang]}</strong>
                <small>{x.tag[lang]}</small>
                <span className={s.ipTag} data-ip={x.ip}>{x.ip}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Size selection modal */}
      {sizeModal && modalSeries ? (
        <div className={s.modalOverlay} onClick={() => setSizeModal(null)}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <h3>{modalSeries.name[lang]}</h3>
              <button type="button" className={s.modalClose} onClick={() => setSizeModal(null)} aria-label="Close">×</button>
            </div>
            <div className={s.modalBody}>
              <p className={s.modalLabel}>{t.pickSize}</p>
              <div className={s.sizeGrid}>
                {modalSeries.sizes.map((z) => (
                  <button type="button" key={z.model} className={s.sizeCard} onClick={() => handleSizeSelect(z.model)}>
                    <strong>{z.ways}</strong>
                    <span>{t.ways}</span>
                    <small>{z.model}</small>
                    {z.dims ? <em>{z.dims}</em> : null}
                  </button>
                ))}
              </div>
              {modalSeries.href ? (
                <Link href={modalSeries.href} target="_blank" className={s.textLink}>
                  {t.view} ↗
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function EnclosureStep({ line, set, t, lang, part }: Props) {
  const showMaterial = part !== "size";
  const showSize = part !== "material";
  return (
    <div className={s.stack}>
      {showMaterial ? (
        <section>
          <span className={s.label}>{t.material}</span>
          <MaterialCards line={line} set={set} t={t} />
        </section>
      ) : null}

      {line.flow !== "empty" && showMaterial ? (
        <section className={s.twoCol}>
          <div>
            <span className={s.label}>{t.install}</span>
            <div className={s.segment}>
              {(["indoor", "outdoor"] as const).map((v) => (
                <button type="button" key={v} className={line.install === v ? s.active : ""} onClick={() => set({ install: v, ...(v === "outdoor" && seriesByCode(line.series ?? "")?.indoorOnly ? { series: undefined, model: undefined } : {}) })}>
                  <span className={s.optV}>{v === "indoor" ? t.indoor : t.outdoor}</span>
                </button>
              ))}
            </div>
          </div>
          {line.material === "abs" ? (
            <div>
              <span className={s.label}>{t.sizeMode}</span>
              <div className={s.segment}>
                <button type="button" className={line.sizeMode === "auto" ? s.active : ""} onClick={() => set({ sizeMode: "auto" })}><span className={s.optV}>{t.autoSize}</span></button>
                <button type="button" className={line.sizeMode === "manual" ? s.active : ""} onClick={() => set({ sizeMode: "manual" })}><span className={s.optV}>{t.manualSize}</span></button>
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {line.flow !== "empty" && line.material === "abs" && line.sizeMode === "auto" && showMaterial ? <p className={s.hint}>{t.autoSizeText}</p> : null}

      {showSize && line.material === "metal" ? <MetalFields line={line} set={set} t={t} /> : null}
      {showSize && line.material === "abs" && (line.flow === "empty" || line.sizeMode === "manual") ? (
        <section><SeriesAndSize line={line} set={set} t={t} lang={lang} /></section>
      ) : null}
    </div>
  );
}
