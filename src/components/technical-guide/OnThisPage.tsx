'use client';

import { useEffect, useMemo, useState } from 'react';

type OnThisPageProps = {
  items: { id: string; title: string }[];
};

export default function OnThisPage({ items }: OnThisPageProps) {
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

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="tpk-guide__toc">
      <h3>ON THIS PAGE</h3>
      <div className="tpk-guide__tocRail">
        <div className="tpk-guide__tocSlider" style={{ transform: `translateY(${activeIndex * 38}px)` }} />
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeId === item.id ? 'is-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.id);
            }}
          >
            <span className="dot" />
            <span className="label">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
