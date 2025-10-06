import React from "react";
// Aurora moved to global background
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { downloadCapabilitiesPDF } from "@/utils/capabilities-pdf";

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section id="hero" className="relative overflow-hidden">
      
      <div className="container relative z-10 py-28 md:py-36">
          <h1 className="mt-5 text-5xl md:text-7xl font-display font-bold tracking-tight max-w-5xl leading-tight animate-fade-in">
            AI Training & Enablement, Ready on Day One.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl animate-fade-in">
            Innovix Dynamix equips teams to use Artificial Intelligence safely and productively with a hosted, standards-aligned training approach—aligned to OMB M-24-10, the NIST AI Risk Management Framework (AI RMF), and Section 508 captions/transcripts baseline. Built for regulated environments and commercial teams alike.
          </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
          <Button asChild size="lg" data-cta="request-discovery-call">
            <Link to="/contact" aria-label="Request a discovery call">Request a discovery call</Link>
          </Button>
          <Button asChild
            variant="outline" 
            size="lg" 
            data-cta="view-capabilities"
            aria-label="View Capabilities Statement"
          >
            <Link to="/capabilities">Capabilities Statement</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
