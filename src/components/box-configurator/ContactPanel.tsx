"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import type { Copy } from "./copy";
import { lineToText, track, type Line } from "./model";
import s from "./configurator.module.css";

type Props = { lines: Line[]; help: boolean; t: Copy; source: string; onSent: () => void };

export function ContactPanel({ lines, help, t, source, onSent }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "invalid">("idle");
  const [chips, setChips] = useState<string[]>([]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (!f.name?.trim() || !/^\S+@\S+\.\S+$/.test(f.email ?? "")) {
      setStatus("invalid");
      return;
    }
    const contact = [
      f.company && `Company: ${f.company}`,
      f.country && `Country: ${f.country}`,
      f.phone && `Phone/WhatsApp: ${f.phone}`,
    ].filter(Boolean);
    const body = help
      ? [chips.length ? `Interested in: ${chips.join(", ")}` : "", f.message || ""].filter(Boolean).join("\n\n")
      : lines.map(lineToText).join("\n\n") + (f.message ? `\n\nMessage: ${f.message}` : "");
    const message = `${body}\n\n---\n${contact.join("\n")}\nSource: Box configurator (${source})`;
    const subject = help
      ? "Distribution box inquiry (configurator help)"
      : `Distribution box configuration: ${lines.length} item${lines.length > 1 ? "s" : ""}`;

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.name, email: f.email, product: "Distribution Box Configurator", subject, message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("configurator_submit", { mode: help ? "help" : "config", items: lines.length, source });
      onSent();
    } catch {
      setStatus("error");
    }
  }

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello TPKELE, I need a distribution box quotation.")}`;

  return (
    <form className={s.contact} onSubmit={submit} noValidate>
      <h3>{help ? t.helpTitle : t.contactTitle}</h3>
      <p className={s.hint}>{help ? t.helpLead : t.contactLead}</p>

      {help ? (
        <div className={s.presets}>
          {t.helpChips.map((c) => (
            <button type="button" key={c} className={chips.includes(c) ? s.active : ""} onClick={() => setChips(chips.includes(c) ? chips.filter((x) => x !== c) : [...chips, c])}>{c}</button>
          ))}
        </div>
      ) : null}

      <div className={s.fieldRow}>
        <label className={s.field}><span>{t.name} *</span><input name="name" autoComplete="name" required /></label>
        <label className={s.field}><span>{t.email} *</span><input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className={s.fieldRow}>
        <label className={s.field}><span>{t.company}</span><input name="company" autoComplete="organization" /></label>
        <label className={s.field}><span>{t.country}</span><input name="country" autoComplete="country-name" /></label>
      </div>
      <label className={s.field}><span>{t.phone}</span><input name="phone" type="tel" autoComplete="tel" /></label>
      <label className={s.field}>
        <span>{t.message}</span>
        <textarea name="message" rows={help ? 4 : 2} maxLength={2000} placeholder={help ? t.helpMsgPh : ""} />
      </label>

      {/* Upload reserved: needs a storage backend before it can be enabled. */}
      <div className={s.dropzone} aria-disabled="true">
        <span className={s.dropIcon}>⇪</span>
        <span><strong>{t.upload}</strong><small>{t.uploadSoon}</small></span>
      </div>

      {status === "invalid" ? <p className={s.warn}>{t.required}</p> : null}
      {status === "error" ? <p className={s.warn}>{t.fail}: <a href={`mailto:${site.email}`}>{site.email}</a></p> : null}

      <div className={s.contactActions}>
        <button type="submit" className={`${s.primaryBtn} ${s.big}`} disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}
        </button>
        <a className={s.ghostBtn} href={wa} target="_blank" rel="noreferrer">{t.whatsapp}</a>
      </div>
    </form>
  );
}
