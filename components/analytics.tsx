"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Record page view event in console for telemetry auditing
    if (typeof window !== "undefined") {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      if (window.gtag && gaId) {
        window.gtag("config", gaId, { page_path: url });
      }
    }
  }, [pathname, searchParams, gaId]);

  return (
    <>
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

// Augment window object for gtag
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
