import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const ConsentBanner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('cookie_consent_seen');
    if (!seen) {
      setOpen(true);
    }
    const savedAnalytics = localStorage.getItem('analytics_consent');
    const savedMarketing = localStorage.getItem('marketing_consent');
    if (savedAnalytics) setAnalyticsConsent(savedAnalytics === 'true');
    if (savedMarketing) setMarketingConsent(savedMarketing === 'true');
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie_consent_seen', '1');
    localStorage.setItem('analytics_consent', 'true');
    localStorage.setItem('marketing_consent', 'true');
    setOpen(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie_consent_seen', '1');
    localStorage.setItem('analytics_consent', String(analyticsConsent));
    localStorage.setItem('marketing_consent', String(marketingConsent));
    setOpen(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie_consent_seen', '1');
    localStorage.setItem('analytics_consent', 'false');
    localStorage.setItem('marketing_consent', 'false');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="glass-card mx-4 mb-4 md:mx-auto md:max-w-4xl p-4 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">Cookie Preferences</h3>
              <p className="text-xs text-muted-foreground mb-3">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. You can customize your preferences below.{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  View our Privacy Policy
                </Link>
              </p>

              {showDetails && (
                <div className="space-y-3 mt-4 mb-4 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded bg-background/50">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-0.5"
                      aria-label="Essential cookies (required)"
                    />
                    <div>
                      <p className="font-medium">Essential Cookies (Required)</p>
                      <p className="text-muted-foreground">
                        Necessary for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-2 rounded bg-background/50">
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="mt-0.5"
                      aria-label="Analytics cookies"
                    />
                    <div>
                      <p className="font-medium">Analytics Cookies</p>
                      <p className="text-muted-foreground">
                        Help us understand how visitors interact with our website (Google Analytics with anonymized IP).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-2 rounded bg-background/50">
                    <input
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-0.5"
                      aria-label="Marketing cookies"
                    />
                    <div>
                      <p className="font-medium">Marketing Cookies</p>
                      <p className="text-muted-foreground">
                        Used to track visitors across websites for targeted advertising (Meta & LinkedIn pixels).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 mt-3">
                {!showDetails && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-xs text-primary hover:underline"
                  >
                    Customize
                  </button>
                )}
                {showDetails ? (
                  <>
                    <Button size="sm" onClick={acceptSelected}>
                      Save Preferences
                    </Button>
                    <Button size="sm" variant="outline" onClick={rejectAll}>
                      Reject All
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="sm" onClick={acceptAll}>
                      Accept All
                    </Button>
                    <Button size="sm" variant="outline" onClick={rejectAll}>
                      Reject Optional
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={rejectAll}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
