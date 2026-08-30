"use client";

import { FormEvent, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { products, site } from "@/data/site";

type LeadFormProps = {
  initialProduct?: string;
  initialIntent?: string;
};

export function LeadForm({ initialProduct, initialIntent }: LeadFormProps) {
  const t = useTranslations("form");
  const initialSubject = initialProduct
    ? t("quotationFor", { product: initialProduct })
    : t("productInquiry");
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState(initialProduct ?? "");
  const [subject, setSubject] = useState(initialSubject);

  const whatsappLink = useMemo(() => {
    const text = `Hello TPKELE, I am interested in ${product || "your products"}. Subject: ${subject || "Product inquiry"}`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [product, subject]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus(t("validationError"));
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const response = await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setStatus(t("error"));
      return;
    }

    setStatus(t("success"));
    form.reset();
    setProduct("");
    setSubject("");
  }

  const defaultSubject = initialProduct ? t("quotationFor", { product: initialProduct }) : t("productInquiry");
  const defaultMessage = (() => {
    if (initialIntent === "factory") return t("messageFactory");
    if (initialIntent === "catalog") return t("messageCatalog");
    if (initialIntent === "quote") return t("messageQuote");
    if (initialIntent) return t("messageGeneric", { intent: initialIntent });
    return t("messageQuote");
  })();

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span className="label-text">{t("name")} <span className="required">*</span></span>
          <input name="name" type="text" autoComplete="name" placeholder={t("namePlaceholder")} required />
        </label>
        <label>
          <span className="label-text">{t("email")} <span className="required">*</span></span>
          <input name="email" type="email" autoComplete="email" placeholder={t("emailPlaceholder")} required />
        </label>
      </div>
      <label>
        <span className="label-text">{t("product")}</span>
        <select name="product" value={product} onChange={(event) => setProduct(event.target.value)}>
          <option value="">{t("productPlaceholder")}</option>
          {products.map((item) => (
            <option value={item.name} key={item.slug}>
              {item.name}
            </option>
          ))}
          <option>{t("oemOption")}</option>
        </select>
      </label>
      <label>
        <span className="label-text">{t("subject")} <span className="required">*</span></span>
        <input
          name="subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder={defaultSubject}
          required
        />
      </label>
      <label>
        <span className="label-text">{t("message")} <span className="required">*</span></span>
        <textarea name="message" rows={2} defaultValue={defaultMessage} required />
      </label>
      <div className="form-actions">
        <button className="btn primary" type="submit">
          {t("submit")}
        </button>
        <a className="btn ghost dark" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
      {status ? (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      ) : null}
    </form>
  );
}
