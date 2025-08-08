import React from "react";

const WhyInnovix: React.FC = () => {
  return (
    <section aria-labelledby="why-this-matters">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">Why this matters</p>
      <h2 id="why-this-matters" className="text-2xl md:text-3xl font-semibold mt-2">Clarity first. Speed to value.</h2>
      <p className="text-sm text-muted-foreground mt-3">
        Most teams drown in tools or meetings. We build products that remove friction. No buzzword theater.
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm">
        <li>Outcome driven, not service heavy</li>
        <li>Clear setup paths and templates</li>
        <li>Sensible pricing and simple onboarding</li>
      </ul>
    </section>
  );
};

export default WhyInnovix;
