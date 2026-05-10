type CertCode = "CE" | "RoHS" | "IEC" | "ISO" | "TUV" | "CB";

type CertIconProps = {
  code: CertCode | string;
  className?: string;
};

const commonProps = {
  viewBox: "0 0 80 80",
  width: "80",
  height: "80",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CertIcon({ code, className }: CertIconProps) {
  switch (code) {
    case "CE":
      return (
        <svg {...commonProps} className={className}>
          <rect x="10" y="14" width="60" height="52" rx="8" strokeWidth="3" />
          <path d="M34 30 q-9 0 -9 10 q0 10 9 10" strokeWidth="5" />
          <path d="M55 30 q-9 0 -9 10 q0 10 9 10" strokeWidth="5" />
        </svg>
      );
    case "RoHS":
      return (
        <svg {...commonProps} className={className}>
          <path
            d="M40 14 q-18 4 -22 22 q-2 12 6 22 q8 8 16 8 q14 -2 22 -16 q4 -10 0 -22 q-8 -14 -22 -14 z"
            strokeWidth="3.5"
          />
          <path d="M28 44 l8 8 l16 -18" strokeWidth="5.5" />
        </svg>
      );
    case "IEC":
      return (
        <svg {...commonProps} className={className}>
          <rect x="12" y="14" width="56" height="36" rx="4" strokeWidth="3" />
          <path d="M22 60 h36" strokeWidth="3" />
          <path d="M22 68 h28" strokeWidth="3" />
          <circle cx="62" cy="68" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "ISO":
      return (
        <svg {...commonProps} className={className}>
          <circle cx="40" cy="40" r="28" strokeWidth="3.5" />
          <ellipse cx="40" cy="40" rx="28" ry="11" strokeWidth="2.5" />
          <ellipse cx="40" cy="40" rx="11" ry="28" strokeWidth="2.5" />
          <line x1="12" y1="40" x2="68" y2="40" strokeWidth="2" />
        </svg>
      );
    case "TUV":
      return (
        <svg {...commonProps} className={className}>
          <polygon points="28,10 52,10 70,28 70,52 52,70 28,70 10,52 10,28" strokeWidth="3.5" />
          <path d="M28 32 v12 q0 6 6 6 t6 -6 v-12" strokeWidth="3.5" />
          <path d="M44 32 v18 M50 32 l4 18 l4 -18" strokeWidth="3" fill="none" />
        </svg>
      );
    case "CB":
      return (
        <svg {...commonProps} className={className}>
          <circle cx="40" cy="40" r="28" strokeWidth="3.5" />
          <path d="M14 40 h52" strokeWidth="2.5" />
          <path
            d="M40 12 q-12 14 -12 28 q0 14 12 28 M40 12 q12 14 12 28 q0 14 -12 28"
            strokeWidth="2.5"
          />
          <circle cx="40" cy="40" r="14" fill="#fff" stroke="none" />
          <path d="M30 40 l7 7 l13 -14" strokeWidth="4.5" />
        </svg>
      );
    default:
      return null;
  }
}
