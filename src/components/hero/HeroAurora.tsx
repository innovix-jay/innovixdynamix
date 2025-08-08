import React from "react";

const HeroAurora: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
      <div className="hero-aurora" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background" />
    </div>
  );
};

export default HeroAurora;
