import React from "react";

const ResultsStrip: React.FC = () => {
  const items = [
    { k: "Lighter ops", v: "-40% manual steps" },
    { k: "Faster cycles", v: "3× iteration speed" },
    { k: "Fewer errors", v: "-60% corrections" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => (
        <div key={it.k} className="rounded-lg border bg-card p-4 text-center">
          <div className="text-sm text-muted-foreground">{it.k}</div>
          <div className="text-xl font-semibold mt-1">{it.v}</div>
        </div>
      ))}
    </div>
  );
};

export default ResultsStrip;
