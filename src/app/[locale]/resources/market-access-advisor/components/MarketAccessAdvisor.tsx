"use client";

import { useEffect, useRef } from "react";
import { advisorMarkup } from "./template";
import { advisorStyles } from "./styles";
import { initMarketAccessAdvisor } from "./initAdvisor";

export default function MarketAccessAdvisor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const cleanup = initMarketAccessAdvisor(rootRef.current);
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `${advisorStyles}
.market-access-advisor .hero {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  color: #111;
  background: #fff;
}
.market-access-advisor .hero h1 {
  display: block !important;
  width: 100%;
  white-space: normal;
}
.market-access-advisor .hero p:not(.eyebrow) {
  display: block !important;
  width: 100%;
  max-width: 1100px;
  margin: 0;
  color: #111 !important;
}`,
        }}
      />
      <div
        ref={rootRef}
        className="market-access-advisor"
        data-tpkele-market-access-advisor="confirmed-pro"
        dangerouslySetInnerHTML={{ __html: advisorMarkup }}
      />
    </>
  );
}
