"use client";

import { useState } from "react";
import { componentById } from "@/data/box-configurator";
import type { Copy } from "./copy";
import { circuitColor, uid, type Circuit, type Line } from "./model";
import s from "./configurator.module.css";

type Props = { line: Line; set: (patch: Partial<Line>) => void; t: Copy; lang: "en" | "ru" };

export function CircuitStructureStep({ line, set, t, lang }: Props) {
  const [editingCircuit, setEditingCircuit] = useState<string | null>(null);
  const circuits = line.circuits ?? [];
  const assignedUids = new Set(circuits.flatMap((c) => c.itemUids));
  const unassigned = line.items.filter((item) => !assignedUids.has(item.uid));

  const addCircuit = () => {
    const newCircuit: Circuit = { uid: uid(), label: "", itemUids: [] };
    set({ circuits: [...circuits, newCircuit] });
    setEditingCircuit(newCircuit.uid);
  };

  const updateCircuit = (circuitUid: string, patch: Partial<Circuit>) => {
    set({
      circuits: circuits.map((c) => (c.uid === circuitUid ? { ...c, ...patch } : c)),
    });
  };

  const deleteCircuit = (circuitUid: string) => {
    set({ circuits: circuits.filter((c) => c.uid !== circuitUid) });
    if (editingCircuit === circuitUid) setEditingCircuit(null);
  };

  const toggleItemInCircuit = (circuitUid: string, itemUid: string) => {
    // Remove from other circuits first
    const cleaned = circuits.map((c) => ({
      ...c,
      itemUids: c.itemUids.filter((id) => id !== itemUid),
    }));
    // Toggle in target circuit
    const target = cleaned.find((c) => c.uid === circuitUid);
    if (target) {
      const has = target.itemUids.includes(itemUid);
      target.itemUids = has ? target.itemUids.filter((id) => id !== itemUid) : [...target.itemUids, itemUid];
    }
    set({ circuits: cleaned });
  };

  const skipCircuits = () => {
    set({ circuits: undefined });
  };

  return (
    <div className={s.circuitStep}>
      <div className={s.circuitHeader}>
        <h3>{t.circuitTitle}</h3>
        <p className={s.hint}>{t.circuitHint}</p>
      </div>

      {circuits.length === 0 ? (
        <div className={s.circuitEmpty}>
          <p>{t.noCircuitsYet}</p>
          <button type="button" className={s.primaryBtn} onClick={addCircuit}>
            + {t.addCircuit}
          </button>
        </div>
      ) : (
        <>
          <div className={s.circuitList}>
            <div className={s.circuitCard} data-main="true">
              <strong>{t.mainBusbar}</strong>
              <small>{t.unassignedCount(unassigned.length)}</small>
            </div>

            {circuits.map((circuit, ci) => {
              const isEditing = editingCircuit === circuit.uid;
              const itemsInCircuit = line.items.filter((item) => circuit.itemUids.includes(item.uid));
              return (
                <div key={circuit.uid} className={`${s.circuitCard} ${isEditing ? s.active : ""}`}>
                  <div className={s.circuitCardHead}>
                    <span className={s.railSegDot} style={{ background: circuitColor(ci) }} />
                    {isEditing ? (
                      <input
                        type="text"
                        className={s.circuitInput}
                        value={circuit.label}
                        onChange={(e) => updateCircuit(circuit.uid, { label: e.target.value })}
                        placeholder={t.circuitLabelPh}
                        autoFocus
                      />
                    ) : (
                      <strong onClick={() => setEditingCircuit(circuit.uid)}>{circuit.label || t.circuitDefaultLabel(circuits.indexOf(circuit) + 1)}</strong>
                    )}
                    <button type="button" className={s.iconBtn} onClick={() => deleteCircuit(circuit.uid)} aria-label={t.deleteCircuit}>
                      ×
                    </button>
                  </div>
                  <small>{t.circuitItemCount(itemsInCircuit.length)}</small>
                  {isEditing ? (
                    <div className={s.assignArea}>
                      <p className={s.assignLabel}>{t.assignItems}</p>
                      <div className={s.assignGrid}>
                        {line.items.map((item) => {
                          const def = componentById(item.id);
                          if (!def) return null;
                          const assigned = circuit.itemUids.includes(item.uid);
                          return (
                            <button
                              key={item.uid}
                              type="button"
                              className={`${s.assignItem} ${assigned ? s.active : ""}`}
                              onClick={() => toggleItemInCircuit(circuit.uid, item.uid)}
                            >
                              <span className={s.dot} data-kind={def.kind} />
                              <span>{def.name[lang]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className={s.circuitActions}>
            <button type="button" className={s.ghostBtn} onClick={addCircuit}>
              + {t.addCircuit}
            </button>
            <button type="button" className={s.linkBtn} onClick={skipCircuits}>
              {t.skipCircuits}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
