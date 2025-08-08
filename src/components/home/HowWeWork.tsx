import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowWeWork: React.FC = () => {
  return (
    <section aria-labelledby="how-we-work">
      <h2 id="how-we-work" className="text-2xl md:text-3xl font-semibold">Simple model, fast outcomes</h2>
      <ol className="mt-4 space-y-3 list-decimal pl-5 text-sm">
        <li>
          Start with the right product. <strong>JCAL.ai</strong> for app building. <strong>Matalino</strong> for launch workflows.
        </li>
        <li>
          Follow a short setup path. Clear docs, zero drama.
        </li>
        <li>
          Ship. Then iterate based on what your users do, not what a deck says.
        </li>
      </ol>
      <div className="mt-6">
        <Button asChild size="lg" data-cta="explore-products-how">
          <Link to="/products" aria-label="Explore our products">Explore our products</Link>
        </Button>
      </div>
    </section>
  );
};

export default HowWeWork;
