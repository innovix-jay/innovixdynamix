import React from "react";
import HeroMotionLattice from "./HeroMotionLattice";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <HeroMotionLattice />
      <div className="container relative z-10 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-3xl animate-fade-in">
          AI that accelerates real work
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl animate-fade-in">
          JCAL and Matalino are purpose-built to remove busywork and sharpen decisions. Fast. Private. Outcome-focused.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
          <Button asChild size="lg" data-cta="explore-jcal">
            <Link to="/jcal">Explore JCAL</Link>
          </Button>
          <Button asChild variant="outline" size="lg" data-cta="see-matalino">
            <Link to="/matalino">See Matalino</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
