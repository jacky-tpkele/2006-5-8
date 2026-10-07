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
  display: block;
  color: #111;
  background: #fff;
}
.market-access-advisor .hero h1 {
  white-space: normal;
}
.market-access-advisor .hero p:not(.eyebrow) {
  max-width: 1100px;
  margin: 0;
  color: #374151;
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
