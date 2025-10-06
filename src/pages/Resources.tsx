import React from "react";
import { Helmet } from "react-helmet-async";

const Resources: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/resources` : 'https://www.innovixdynamix.com/resources';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Resources | Innovix Dynamix</title>
        <meta name="description" content="Guides and updates from Innovix Dynamix focused on real results, not buzzwords." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="text-muted-foreground mt-2">Fresh perspectives and practical guides coming soon.</p>
    </div>
  );
};

export default Resources;
