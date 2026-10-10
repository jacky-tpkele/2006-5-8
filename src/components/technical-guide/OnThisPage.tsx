'use client';

import { useEffect, useMemo, useState } from 'react';

type OnThisPageProps = {
  items: { id: string; title: string }[];
  /**
   * 点击目录后标题距离视口顶部的留白。
   * 默认 100 保持原有行为；有 sticky 顶部导航的页面（如采购导航式 BLOG）
   * 可传入更大的值，避免标题被站点 Header 和 sticky 导航遮住。
   */
  offset?: number;
};

export default function OnThisPage({ items, offset = 100 }: OnThisPageProps) {
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
    // 立即更新高亮状态（不等滚动完成）
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="tpk-guide__toc">
      <h3>ON THIS PAGE</h3>
      <div className="tpk-guide__tocRail">
        {/* 隐藏滑动条，只保留圆点 */}
        {/* <div className="tpk-guide__tocSlider" style={{ transform: `translateY(${activeIndex * 38}px)` }} /> */}
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
