"use client";
import { useEffect } from 'react';
/** Small progressive enhancement. Content and anchor navigation work without JS. */
export default function SmartArticleEnhancements() {
  useEffect(() => {
    const root = document.getElementById('tpb-smart-guide');
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-toc]'));
    const sections = links.map(a => root.querySelector<HTMLElement>('#' + a.dataset.toc)).filter((x): x is HTMLElement => Boolean(x));
    const io = new IntersectionObserver(entries => {
      const visible = entries.filter(x => x.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      links.forEach(a => a.setAttribute('aria-current', a.dataset.toc === id ? 'true' : 'false'));
    }, { rootMargin: '-12% 0px -65% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
