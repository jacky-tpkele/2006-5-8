"use client";

import { FormEvent, useMemo, useState } from "react";
import { products, site } from "@/data/site";

type LeadFormProps = {
  initialProduct?: string;
  initialIntent?: string;
};

function defaultSubject(product?: string) {
  return product ? `Quotation request for ${product}` : "Product inquiry";
}

function defaultMessage(intent?: string) {
  if (intent === "factory") return "Please share your factory profile, certifications and OEM/ODM cooperation details.";
  if (intent === "catalog") return "Please send the latest product catalog and model selection information.";
  if (intent) return `Please provide more information about ${intent}.`;
  return "Please send quotation, MOQ, lead time and catalog details for my project.";
}

export function LeadForm({ initialProduct, initialIntent }: LeadFormProps) {
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState(initialProduct ?? "");
  const [subject, setSubject] = useState(defaultSubject(initialProduct));

  const whatsappLink = useMemo(() => {
    const text = `Hello TPKELE, I am interested in ${product || "your products"}. Subject: ${subject || "Product inquiry"}`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [product, subject]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields before sending.");
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
      setStatus("The message could not be sent. Please try WhatsApp or email.");
      return;
    }

    setStatus("Thank you. Your inquiry has been received.");
    form.reset();
    setProduct("");
    setSubject("Product inquiry");
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span className="label-text">Your Name <span className="required">*</span></span>
          <input name="name" type="text" autoComplete="name" placeholder="John Smith" required />
        </label>
        <label>
          <span className="label-text">Your Email <span className="required">*</span></span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        <span className="label-text">Product Interest</span>
        <select name="product" value={product} onChange={(event) => setProduct(event.target.value)}>
          <option value="">Select a product family</option>
          {products.map((item) => (
            <option value={item.name} key={item.slug}>
              {item.name}
            </option>
          ))}
          <option>OEM/ODM Project</option>
        </select>
      </label>
      <label>
        <span className="label-text">Subject <span className="required">*</span></span>
        <input name="subject" type="text" value={subject} onChange={(event) => setSubject(event.target.value)} required />
      </label>
      <label>
        <span className="label-text">Message <span className="required">*</span></span>
        <textarea name="message" rows={5} defaultValue={defaultMessage(initialIntent)} required />
      </label>
      <div className="form-actions">
        <button className="btn primary" type="submit">
          Send Message
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
