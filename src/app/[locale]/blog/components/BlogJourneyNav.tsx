"use client";

import { useEffect, useState } from "react";

type JourneyStep = {
  label: string;
  anchor: string;
};

type BlogJourneyNavProps = {
  steps: JourneyStep[];
  ariaLabel: string;
};

/**
 * 采购导航条（sticky）。
 *
 * 桌面端为五等分网格，移动端横向滚动——两种情况都由 blog-rich.css 控制，
 * 这里只负责「当前阅读到哪一步」的高亮，让它像真正的采购流程导航。
 *
 * 纯增量组件：只在这一篇采购导航式文章里使用，不影响普通 BLOG 文章。
 */
export default function BlogJourneyNav({ steps, ariaLabel }: BlogJourneyNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = steps
      .map((step) => document.getElementById(step.anchor.replace(/^#/, "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

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
        // 顶部留出站点 Header + 本导航条的高度，底部收窄，避免多个 section 同时命中
        rootMargin: "-140px 0px -60% 0px",
        threshold: [0.05, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [steps]);

  return (
    <nav className="blog-rich__journey" aria-label={ariaLabel}>
      {steps.map((step, index) => {
        const id = step.anchor.replace(/^#/, "");
        return (
          <a
            key={step.anchor}
            href={step.anchor}
            className={activeId === id ? "is-active" : undefined}
            aria-current={activeId === id ? "true" : undefined}
          >
            <span className="blog-rich__journeyNum">{index + 1}</span>
            {step.label}
          </a>
        );
      })}
    </nav>
  );
}
