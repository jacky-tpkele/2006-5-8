"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 检查用户是否已经做出选择
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    // 重新加载以启用 GA
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <circle cx="12" cy="6" r="1.5" fill="currentColor" />
              <circle cx="6" cy="9" r="1.5" fill="currentColor" />
              <circle cx="18" cy="9" r="1.5" fill="currentColor" />
              <circle cx="7" cy="16" r="1.5" fill="currentColor" />
              <circle cx="17" cy="16" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.text}>
            <strong>We value your privacy</strong>
            <p>
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.{" "}
              <Link href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={handleReject} className={styles.btnReject}>
            Reject
          </button>
          <button onClick={handleAccept} className={styles.btnAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
