'use client';

import { useEffect, useMemo, useState } from 'react';

export default function OnThisPage({ items }: { items: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-120px 0px -65% 0px',
        threshold: [0.12, 0.35, 0.6]
      }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  const activeIndex = useMemo(
    () => Math.max(items.findIndex((item) => item.id === activeId), 0),
    [items, activeId]
  );

  return (
    <div className="tpk-guide__toc">
      <h3>ON THIS PAGE</h3>
      <div className="tpk-guide__tocRail">
        <div className="tpk-guide__tocSlider" style={{ transform: `translateY(${activeIndex * 38}px)` }} />
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? 'is-active' : ''}>
            <span className="dot" />
            <span className="label">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
