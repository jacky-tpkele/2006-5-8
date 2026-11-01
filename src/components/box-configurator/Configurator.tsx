"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { componentById, defaultSpecs, seriesByCode, type Flow } from "@/data/box-configurator";
import { copy } from "./copy";
import { ComponentPicker } from "./ComponentPicker";
import { ContactPanel } from "./ContactPanel";
import { EnclosureStep } from "./EnclosureStep";
import { QuantityStep } from "./QuantityStep";
import { RailPreview } from "./RailPreview";
import { QuoteList } from "./QuoteList";
import { chosenSize, newLine, track, uid, type Line } from "./model";
import s from "./configurator.module.css";

type Stage = "paths" | "build" | "contact" | "done";
const STORE = "tpk-box-config-v1";

function canNext(line: Line, step: number) {
  if (line.flow === "empty") {
    if (step === 1) return line.material === "metal" ? Boolean(line.metalWays) : Boolean(line.model);
    return true;
  }
  if (step === 0) return line.material === "metal" || line.sizeMode === "auto" || Boolean(line.model);
  if (step === 1) return line.items.length > 0 || line.engineerPicks;
  return true;
}

export function Configurator({ locale }: { locale: string }) {
  const lang = locale === "ru" ? "ru" : "en";
  const t = copy[lang];
  const [stage, setStage] = useState<Stage>("paths");
  const [help, setHelp] = useState(false);
  const [line, setLine] = useState<Line>(() => newLine("ac"));
  const [step, setStep] = useState(0);
  const [editing, setEditing] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [toast, setToast] = useState("");
  const [sheet, setSheet] = useState(false);
  const [source, setSource] = useState("direct");
  const work = useRef<HTMLDivElement>(null);

  const set = (patch: Partial<Line>) => setLine((l) => ({ ...l, ...patch }));
  const scrollToWork = () => requestAnimationFrame(() => {
    const el = work.current;
    if (el && el.getBoundingClientRect().top < 60) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Restore list; apply ?type=&series=&item= presets from entry links.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || "[]");
      if (Array.isArray(saved)) setLines(saved);
    } catch {}
    const q = new URLSearchParams(window.location.search);
    const from = q.get("from") || (document.referrer ? new URL(document.referrer).pathname : "direct");
    setSource(from);
    const type = q.get("type");
    if (type === "help") return startHelp(false);
    if (type === "empty" || type === "ac" || type === "dc") {
      const l = newLine(type);
      const series = seriesByCode((q.get("series") || "").toUpperCase());
      if (series && type === "empty") Object.assign(l, { material: series.material, series: series.code });
      const def = componentById(q.get("item") || "");
      if (def && def.flow === type) l.items = [{ uid: uid(), id: def.id, specs: defaultSpecs(def), qty: 1 }];
      setLine(l);
      setStep(type === "empty" && series ? 1 : def ? 1 : 0);
      setStage("build");
      track("configurator_start", { flow: type, preset: true, source: from });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(lines)); } catch {}
  }, [lines]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  function start(flow: Flow) {
    setLine(newLine(flow));
    setStep(0);
    setEditing(null);
    setHelp(false);
    setStage("build");
    track("configurator_start", { flow, source });
    scrollToWork();
  }

  function startHelp(scroll = true) {
    setHelp(true);
    setStage("contact");
    track("configurator_start", { flow: "help", source });
    if (scroll) scrollToWork();
  }

  function goStep(n: number) {
    setStep(n);
    track("configurator_step", { flow: line.flow, step: n + 1 });
    scrollToWork();
  }

  function addToList() {
    setLines((ls) => (editing ? ls.map((l) => (l.uid === editing ? line : l)) : [...ls, line]));
    setToast(t.added);
    setEditing(null);
    setStage("contact");
    setHelp(false);
    track("configurator_add", { flow: line.flow, qty: line.qty });
    scrollToWork();
  }

  function editLine(l: Line) {
    setLine(l);
    setEditing(l.uid);
    setStep(0);
    setHelp(false);
    setStage("build");
    setSheet(false);
    scrollToWork();
  }

  const steps = t.steps[line.flow];
  const last = step === steps.length - 1;
  const ok = canNext(line, step);
  const custom = line.flow !== "empty";

  return (
    <div className={s.root}>
      {/* Path cards */}
      <div className={s.paths} role="list">
        {(["empty", "ac", "dc", "help"] as const).map((p) => {
          const c = t.paths[p];
          const active = p === "help" ? help && stage === "contact" : stage === "build" && line.flow === p;
          return (
            <button
              type="button"
              role="listitem"
              key={p}
              className={`${s.pathCard} ${active ? s.active : ""} ${p === "help" ? s.pathHelp : ""}`}
              onClick={() => (p === "help" ? startHelp() : start(p))}
            >
              <span className={s.pathIcon} data-path={p} aria-hidden="true" />
              <span className={s.pathTitle}>{c.title}</span>
              <span className={s.pathText}>{c.text}</span>
              <span className={s.pathMeta}>{c.meta} →</span>
            </button>
          );
        })}
      </div>

      <div className={s.workspace} ref={work}>
        <div className={s.main}>
          {stage === "paths" ? (
            <div className={s.intro}>
              <div className={s.introRail} aria-hidden="true">
                {["mcb", "mcb", "rcbo", "spd", "spd", "mcb", "meter", "meter", "mcb"].map((k, i) => (
                  <div key={i} className={s.device} data-kind={k} style={{ animationDelay: `${i * 70}ms` }}><i /></div>
                ))}
              </div>
              <h2>{t.introTitle}</h2>
              <p>{t.introText}</p>
            </div>
          ) : null}

          {stage === "build" ? (
            <div className={s.builder} key={`${line.flow}-${editing ?? "new"}`}>
              <ol className={s.progress}>
                {steps.map((label, i) => {
                  const state = i < step ? s.done : i === step ? s.current : "";
                  const reachable = i <= step || (i === step + 1 && ok);
                  return (
                    <li key={label} className={state}>
                      <button type="button" disabled={!reachable} onClick={() => reachable && goStep(i)}>
                        <span className={s.num}>{i < step ? "✓" : i + 1}</span>
                        <span>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className={s.stepBody} key={step}>
                {line.flow === "empty" && step === 0 ? <EnclosureStep line={line} set={set} t={t} lang={lang} part="material" /> : null}
                {line.flow === "empty" && step === 1 ? <EnclosureStep line={line} set={set} t={t} lang={lang} part="size" /> : null}
                {custom && step === 0 ? <EnclosureStep line={line} set={set} t={t} lang={lang} part="all" /> : null}
                {custom && step === 1 ? (
                  <>
                    <div className={s.railInline}><RailPreview line={line} t={t} lang={lang} /></div>
                    <ComponentPicker line={line} set={set} t={t} lang={lang} />
                  </>
                ) : null}
                {last ? <QuantityStep line={line} set={set} t={t} lang={lang} /> : null}
              </div>

              <div className={s.nav}>
                <button type="button" className={s.ghostBtn} onClick={() => (step === 0 ? setStage(lines.length ? "contact" : "paths") : goStep(step - 1))}>
                  ← {t.back}
                </button>
                <button type="button" className={s.linkBtn} onClick={() => startHelp()}>{t.edgeHelp}</button>
                {last ? (
                  <button type="button" className={s.primaryBtn} onClick={addToList}>{editing ? t.saveChanges : t.addToList}</button>
                ) : (
                  <button type="button" className={s.primaryBtn} disabled={!ok} onClick={() => goStep(step + 1)}>{t.next} →</button>
                )}
              </div>
            </div>
          ) : null}

          {stage === "contact" ? (
            <div className={s.stepBody}>
              {!help ? (
                <button type="button" className={s.addAnother} onClick={() => setStage("paths")}>+ {t.another}</button>
              ) : null}
              <ContactPanel lines={lines} help={help || lines.length === 0} t={t} source={source} onSent={() => { setLines([]); setStage("done"); }} />
            </div>
          ) : null}

          {stage === "done" ? (
            <div className={s.success}>
              <span className={s.successMark} aria-hidden="true">✓</span>
              <h3>{t.successTitle}</h3>
              <p>{t.successText}</p>
              <button type="button" className={s.ghostBtn} onClick={() => setStage("paths")}>{t.newConfig}</button>
            </div>
          ) : null}
        </div>

        <aside className={`${s.aside} ${sheet ? s.sheetOpen : ""}`}>
          <div className={s.asideInner}>
            {stage === "build" && custom ? <div className={s.railAside}><RailPreview line={line} t={t} lang={lang} /></div> : null}
            {stage === "build" && line.flow === "empty" ? <BoxCard line={line} lang={lang} t={t} /> : null}
            <QuoteList
              lines={lines}
              lang={lang}
              t={t}
              onEdit={editLine}
              onRemove={(id) => setLines((ls) => ls.filter((l) => l.uid !== id))}
              onRequest={() => { setHelp(false); setStage("contact"); setSheet(false); scrollToWork(); }}
              showRequest={stage !== "contact" && stage !== "done"}
            />
          </div>
        </aside>
      </div>

      {/* Mobile bar */}
      {stage !== "done" && (lines.length > 0 || stage === "build") ? (
        <div className={s.mobileBar}>
          <button type="button" onClick={() => setSheet(!sheet)}>
            <span className={s.countBadge}>{lines.length}</span> {t.quoteList}
          </button>
          {stage === "build" ? (
            last ? (
              <button type="button" className={s.primaryBtn} onClick={addToList}>{editing ? t.saveChanges : t.addToList}</button>
            ) : (
              <button type="button" className={s.primaryBtn} disabled={!ok} onClick={() => goStep(step + 1)}>{t.next} →</button>
            )
          ) : (
            <button type="button" className={s.primaryBtn} onClick={() => { setStage("contact"); setSheet(false); scrollToWork(); }}>{t.request}</button>
          )}
        </div>
      ) : null}
      {sheet ? <div className={s.scrim} onClick={() => setSheet(false)} /> : null}

      <div className={`${s.toast} ${toast ? s.show : ""}`} role="status" aria-live="polite">✓ {toast}</div>
    </div>
  );
}

function BoxCard({ line, lang, t }: { line: Line; lang: "en" | "ru"; t: (typeof copy)["en"] }) {
  const c = chosenSize(line);
  const series = line.series ? seriesByCode(line.series) : undefined;
  return (
    <div className={s.boxCard}>
      <div className={s.boxCardImg}>
        <Image src={series?.image ?? (line.material === "metal" ? "/assets/enclosures/metal-placeholder.svg" : "/assets/enclosures/enclosure-ht.webp")} alt="" width={320} height={200} />
      </div>
      <dl>
        <div><dt>{t.material}</dt><dd>{line.material === "abs" ? t.abs.title : t.metal.title}</dd></div>
        <div><dt>{t.series}</dt><dd>{series && series.code !== "METAL" ? `${series.name[lang]} · ${series.ip}` : "—"}</dd></div>
        <div><dt>{t.size}</dt><dd>{c ? `${c.size.model} · ${c.size.ways} ${t.ways}` : line.metalWays ? `${line.metalWays} ${t.ways}` : "—"}</dd></div>
        {c?.size.dims ? <div><dt>W×H×D</dt><dd>{c.size.dims}</dd></div> : null}
        <div><dt>{t.qty}</dt><dd>{line.qty.toLocaleString()} {t.sets}</dd></div>
      </dl>
    </div>
  );
}
