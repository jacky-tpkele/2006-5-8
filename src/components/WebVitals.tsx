export function WebVitals() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <script
      id="web-vitals"
      dangerouslySetInnerHTML={{
        __html: `
          // 轻量级 Web Vitals 监控
          (function() {
            const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

            function sendToAnalytics(metric) {
              const body = JSON.stringify({
                dsn: '${process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID || ""}',
                id: metric.id,
                page: window.location.pathname,
                href: window.location.href,
                event_name: metric.name,
                value: metric.value.toString(),
                speed: navigator.connection?.effectiveType || ''
              });

              if (navigator.sendBeacon) {
                navigator.sendBeacon(vitalsUrl, body);
              } else {
                fetch(vitalsUrl, { body, method: 'POST', keepalive: true });
              }
            }

            // 监听 Web Vitals
            function onCLS(metric) { sendToAnalytics(metric); }
            function onFID(metric) { sendToAnalytics(metric); }
            function onFCP(metric) { sendToAnalytics(metric); }
            function onLCP(metric) { sendToAnalytics(metric); }
            function onTTFB(metric) { sendToAnalytics(metric); }

            // 轻量级实现
            if ('PerformanceObserver' in window) {
              // LCP
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                onLCP({ name: 'LCP', value: lastEntry.renderTime || lastEntry.loadTime, id: 'v3-' + Date.now() });
              });
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

              // FID
              const fidObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                  onFID({ name: 'FID', value: entry.processingStart - entry.startTime, id: 'v3-' + Date.now() });
                });
              });
              fidObserver.observe({ entryTypes: ['first-input'] });

              // CLS
              let clsValue = 0;
              const clsObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                });
              });
              clsObserver.observe({ entryTypes: ['layout-shift'] });

              window.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                  onCLS({ name: 'CLS', value: clsValue, id: 'v3-' + Date.now() });
                }
              });
            }
          })();
        `,
      }}
    />
  );
}
