import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ConsentBanner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [adsConsent, setAdsConsent] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('consent_seen');
    if (!seen) setOpen(true);
    const saved = localStorage.getItem('ads_consent');
    if (saved) setAdsConsent(saved === 'true');
  }, []);

  const accept = () => {
    localStorage.setItem('consent_seen', '1');
    localStorage.setItem('ads_consent', String(adsConsent));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto bg-popover text-popover-foreground border rounded-md shadow-lg p-4">
      <p className="text-sm">We use GA4 with anonymized IP for essential analytics. Meta and LinkedIn pixels are disabled by default. Toggle ad pixels at any time.</p>
      <div className="mt-3 flex items-center gap-3">
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={adsConsent} onChange={(e)=>setAdsConsent(e.target.checked)} aria-label="Allow advertising pixels" />
          Allow Meta & LinkedIn pixels
        </label>
        <Button size="sm" onClick={accept}>OK</Button>
      </div>
    </div>
  );
};

export default ConsentBanner;
