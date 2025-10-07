import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const TeamingSection: React.FC = () => {
  return (
    <section aria-labelledby="teaming" className="container py-16">
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
        <h2 id="teaming" className="text-2xl md:text-3xl font-semibold text-center">
          Prime Contractors: Add AI Capabilities to Your Bids
        </h2>
        <p className="text-muted-foreground mt-3 text-center max-w-2xl mx-auto">
          Our AI Training integrates seamlessly as a subcontractor service on federal IT staffing and mission support contracts. Differentiate your proposals with "AI-trained FTEs" as a standard offering.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Value-Add Differentiator</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">1-3 Week Deployment</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">No Agency Infrastructure Required</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">Monthly Reporting & Metrics</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button asChild size="lg" data-cta="request-partnership-teaming">
            <Link to="/contact?inquiry=partnership" aria-label="Request partnership discussion">Request Partnership Discussion</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamingSection;
