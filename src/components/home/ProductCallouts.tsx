import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductCallouts: React.FC = () => {
  return (
    <section aria-labelledby="what-we-build">
      <header className="mb-8">
        <h2 id="what-we-build" className="text-2xl md:text-3xl font-semibold">What we build</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card p-6" aria-labelledby="jcal-title">
          <h3 id="jcal-title" className="font-semibold text-lg">JCAL.ai</h3>
          <p className="text-sm text-muted-foreground mt-2">Build AI apps with a prompt.</p>
          <p className="text-sm text-muted-foreground mt-1">Describe it in plain English, get working UI and flows.</p>
          <p className="text-sm text-muted-foreground mt-1">Great for prototypes, internal tools, and client utilities.</p>
          <div className="mt-4">
            <Button asChild data-cta="see-jcal">
              <Link to="/jcal" aria-label="See JCAL.ai">See JCAL.ai</Link>
            </Button>
          </div>
        </article>
        <article className="glass-card p-6" aria-labelledby="matalino-title">
          <h3 id="matalino-title" className="font-semibold text-lg">Matalino</h3>
          <p className="text-sm text-muted-foreground mt-2">Launch faster with creator focused workflows.</p>
          <p className="text-sm text-muted-foreground mt-1">Starter kits, checklists, simple automations.</p>
          <p className="text-sm text-muted-foreground mt-1">Perfect for creators, solopreneurs, and micro teams.</p>
          <div className="mt-4">
            <Button asChild variant="outline" data-cta="see-matalino">
              <Link to="/matalino" aria-label="See Matalino">See Matalino</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductCallouts;
