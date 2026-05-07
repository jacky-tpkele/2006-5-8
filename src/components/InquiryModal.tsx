"use client";

import { ReactNode, useEffect, useState } from "react";
import { LeadForm } from "@/components/LeadForm";

type InquiryModalProps = {
  triggerLabel: string;
  triggerClassName?: string;
  triggerAriaLabel?: string;
  triggerContent?: ReactNode;
  product?: string;
  intent?: string;
  title?: string;
};

export function InquiryModal({
  triggerLabel,
  triggerClassName,
  triggerAriaLabel,
  triggerContent,
  product,
  intent,
  title = "Send Inquiry",
}: InquiryModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        aria-label={triggerAriaLabel ?? triggerLabel}
        onClick={() => setOpen(true)}
      >
        {triggerContent ?? triggerLabel}
      </button>
      {open ? (
        <div
          className="inquiry-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
        >
          <div className="inquiry-modal" role="dialog" aria-modal="true" aria-label={title}>
            <div className="inquiry-modal-header">
              <h2>{title}</h2>
              <button
                type="button"
                className="inquiry-modal-close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="inquiry-modal-body">
              <LeadForm initialProduct={product} initialIntent={intent} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
