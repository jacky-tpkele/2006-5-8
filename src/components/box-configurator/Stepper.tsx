"use client";

import s from "./configurator.module.css";

type Props = { value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number; compact?: boolean; large?: boolean };

export function Stepper({ value, onChange, min = 1, max = 100000, step = 1, compact, large }: Props) {
  const clamp = (v: number) => Math.max(min, Math.min(max, Math.round(v) || min));
  return (
    <div className={`${s.stepper} ${compact ? s.compact : ""} ${large ? s.large : ""}`}>
      <button type="button" aria-label="−" onClick={() => onChange(clamp(value - step))} disabled={value <= min}>−</button>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
      />
      <button type="button" aria-label="+" onClick={() => onChange(clamp(value + step))} disabled={value >= max}>+</button>
    </div>
  );
}
