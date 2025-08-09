import React from "react";
// Aurora moved to global background
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section id="hero" className="relative overflow-hidden">
      
      <div className="container relative z-10 py-28 md:py-36">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm text-muted-foreground bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 animate-fade-in">
            JCAL.ai for builders • Matalino for creators
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-display font-bold tracking-tight max-w-5xl leading-tight animate-fade-in">
            We build the tools that build your business.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl animate-fade-in">
            Innovix is the AI mothership behind JCAL.ai and Matalino — purpose-built products that help you launch faster, build smarter, and skip the noise.
          </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
          <Button asChild size="lg" data-cta="see-jcal-hero">
            <Link to="/jcal" aria-label="See JCAL.ai">See JCAL.ai</Link>
          </Button>
          <Button asChild variant="outline" size="lg" data-cta="see-matalino-hero">
            <Link to="/matalino" aria-label="See Matalino">See Matalino</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
