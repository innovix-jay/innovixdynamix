import React from "react";
import HeroAurora from "./HeroAurora";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <HeroAurora />
      <div className="container relative z-10 py-28 md:py-36">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm text-muted-foreground bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 animate-fade-in">
          Outcome-focused AI for real work
        </div>
        <h1 className="mt-5 text-5xl md:text-7xl font-display font-bold tracking-tight max-w-5xl leading-tight animate-fade-in">
          Build. Decide. Ship.
          <span className="block text-gradient">Powered by AI.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl animate-fade-in">
          JCAL and Matalino remove busywork, sharpen decisions, and keep teams moving with clarity and speed.
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
