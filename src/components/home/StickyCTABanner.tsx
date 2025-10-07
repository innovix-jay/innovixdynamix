import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTABanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/20 animate-slide-down">
      <div className="container flex items-center justify-between py-2 px-4">
        <p className="text-sm text-primary-foreground font-medium">
          Federal Contractors: Partner with us on your next RFP
        </p>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="secondary" data-cta="sticky-banner-learn-more">
            <Link to="/training" aria-label="Learn more about AI training">Learn More</Link>
          </Button>
          <button
            onClick={handleDismiss}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABanner;
