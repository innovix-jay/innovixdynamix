import React from "react";

const features = [
  { title: "Built for outcomes", desc: "Every feature ties to speed, clarity, or control—nothing ornamental." },
  { title: "Private by default", desc: "No surprise training. Your data stays your advantage." },
  { title: "Fast where it counts", desc: "Tuned for real-world throughput on web and mobile." },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((f, i) => (
        <article key={f.title} className="rounded-lg border bg-card text-card-foreground p-6 transition-transform duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md">
          <h3 className="font-semibold text-lg">{f.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
        </article>
      ))}
    </div>
  );
};

export default FeatureGrid;
