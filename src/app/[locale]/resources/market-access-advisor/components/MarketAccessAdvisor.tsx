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
      <style dangerouslySetInnerHTML={{ __html: advisorStyles }} />
      <div
        ref={rootRef}
        data-tpkele-market-access-advisor="confirmed-pro"
        dangerouslySetInnerHTML={{ __html: advisorMarkup }}
      />
    </>
  );
}
