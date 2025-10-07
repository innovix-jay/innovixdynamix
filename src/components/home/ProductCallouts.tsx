import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductCallouts: React.FC = () => {
  return (
    <section aria-labelledby="what-we-build">
      <header className="mb-8">
        <h2 id="what-we-build" className="text-2xl md:text-3xl font-semibold">What we build</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="glass-card p-6" aria-labelledby="training-title">
          <h3 id="training-title" className="font-semibold text-lg">AI Training & Enablement</h3>
          <p className="text-sm font-medium mt-2">Get your team AI-ready, fast.</p>
          <p className="text-sm text-muted-foreground mt-1">Standards-aligned training portal for government and enterprise teams. Role-based learning paths, practical prompt engineering, and measurable outcomes. Perfect for teaming on federal staffing contracts.</p>
          <div className="mt-4">
            <Button asChild data-cta="learn-more-training">
              <Link to="/training" aria-label="Learn More About Training">Learn More About Training</Link>
            </Button>
          </div>
        </article>
        <article className="glass-card p-6" aria-labelledby="jcal-title">
          <h3 id="jcal-title" className="font-semibold text-lg">JCAL.ai</h3>
          <p className="text-sm font-medium mt-2">From prompt to product — no code needed.</p>
          <p className="text-sm text-muted-foreground mt-1">Describe your idea in plain English. JCAL.ai turns it into a working app with clean UI, logic, and deployment-ready code in minutes.</p>
          <p className="text-sm text-muted-foreground mt-1">Prototypes, internal tools, client apps — built faster than you can draft a spec.</p>
          <div className="mt-4">
            <Button asChild data-cta="see-jcal">
              <a href="https://jcalai.com" target="_blank" rel="noopener noreferrer" aria-label="See JCAL.ai">See JCAL.ai</a>
            </Button>
          </div>
        </article>
        <article className="glass-card p-6" aria-labelledby="matalino-title">
          <h3 id="matalino-title" className="font-semibold text-lg">Matalino</h3>
          <p className="text-sm font-medium mt-2">Your launch command center.</p>
          <p className="text-sm text-muted-foreground mt-1">Matalino gives creators, solopreneurs, and small teams the templates, workflows, and automation to move from concept to launch — without detours.</p>
          <div className="mt-4">
            <Button asChild variant="outline" data-cta="see-matalino">
              <a href="https://matalino.online" target="_blank" rel="noopener noreferrer" aria-label="See Matalino">See Matalino</a>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductCallouts;
