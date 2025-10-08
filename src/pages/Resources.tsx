import React from "react";
import { Helmet } from "react-helmet-async";

const Resources: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/resources` : 'https://www.innovixdynamix.com/resources';
  return (
    <div className="container py-16">
      <Helmet>
        <title>AI Resources & Knowledge Base | Innovix Dynamix</title>
        <meta name="description" content="AI consulting resources, digital transformation guides, and practical insights from Innovix Dynamix. Expert knowledge base for government contractors and enterprise AI adoption." />
        <meta name="keywords" content="AI resources, AI knowledge base, digital transformation guides, AI consulting insights, government AI resources, enterprise AI guides" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="AI Resources & Knowledge Base | Innovix Dynamix" />
        <meta property="og:description" content="Expert AI consulting resources and practical guides for government contractors and enterprise teams." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="text-muted-foreground mt-2">Fresh perspectives and practical guides coming soon.</p>
    </div>
  );
};

export default Resources;
