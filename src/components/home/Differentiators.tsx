import React from "react";
import { Shield, CheckCircle, Zap } from "lucide-react";

const Differentiators: React.FC = () => {
  return (
    <section aria-labelledby="differentiators" className="container py-16">
      <h2 id="differentiators" className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Why Teams Choose Innovix Dynamix
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="glass-card p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">US-Only Data Storage</h3>
          <p className="text-sm text-muted-foreground">
            All data on continental US servers. Zero foreign exposure. Enhanced security posture for government and regulated industries.
          </p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Federal-Grade Security</h3>
          <p className="text-sm text-muted-foreground">
            NIST, FISMA, HIPAA-equivalent controls. Protection meeting government standards without government pricing.
          </p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Rapid Deployment</h3>
          <p className="text-sm text-muted-foreground">
            Training: 1-3 weeks. JCAL: Immediate. Matalino: Hours. Minimal overhead, maximum speed to value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
