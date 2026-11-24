import type { Kind } from "@/data/box-configurator";
import s from "./configurator.module.css";

/**
 * Reusable device silhouette, visually matching the DIN rail preview's .device blocks
 * (toggle lever, LCD face, round SPD window, rotary knob, etc). Used anywhere a
 * component needs a quick visual identity without a product photo: picker cards,
 * the in-box list, the config modal header.
 */
export function DeviceShape({ kind, size = "md" }: { kind: Kind; size?: "sm" | "md" | "lg" }) {
  return (
    <span className={`${s.shape} ${s[`shape_${size}`]}`} data-kind={kind} aria-hidden="true">
      <i />
    </span>
  );
}
