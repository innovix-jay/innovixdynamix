import React from "react";

const features = [
  { title: "Standards-Aligned", desc: "Content and guardrails aligned to OMB M-24-10, NIST AI RMF, and Section 508 captions/transcripts baseline." },
  { title: "Low Overhead", desc: "Hosted approach; no new infrastructure required to get started." },
  { title: "Measured Outcomes", desc: "Simple adoption/completion reporting and a practical Compliance Score snapshot." },
];

const FeatureGrid: React.FC = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <article key={f.title} className="glass-card p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </article>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Usable in government and enterprise contexts • Aligned to OMB M-24-10 • NIST AI RMF • Section 508 captions/transcripts baseline (VPAT on request)
      </p>
    </>
  );
};

export default FeatureGrid;
