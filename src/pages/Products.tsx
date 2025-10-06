import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";

const Products: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/products` : 'https://www.innovixdynamix.com/products';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Products | Innovix Dynamix</title>
        <meta name="description" content="Explore Innovix Dynamix products: JCAL and Matalino. Built to reduce busywork and increase clarity in your operations." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="text-muted-foreground mt-2">Two focused initiatives from Innovix Dynamix Labs. Our AI Training & Enablement offering is available alongside these products for organizations that want standards-aligned onboarding and reporting.</p>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <article id="pcard-jcal" className="glass-card p-6">
          <BrandLogo src={["/lovable-uploads/2a736c9d-fe6b-4c72-8c35-7564930ab019.png","/lovable-uploads/jcal-logo.png","/lovable-uploads/jcal-logo.jpg","/lovable-uploads/jcal.svg","/lovable-uploads/jcal.png","/lovable-uploads/jcal.jpg"]} alt="JCAL.ai logo" className="h-[10.5rem] w-auto mb-3" />
          
          <p className="text-sm text-muted-foreground mt-2">Build AI‑powered apps with a prompt. Describe what you want in plain English—get working UI, data, and flows in minutes.</p>
          <Link to="/jcal" className="mt-4 inline-flex text-primary story-link" data-cta="explore-jcal">Explore JCAL</Link>
        </article>
        <article id="pcard-matalino" className="glass-card p-6">
          <BrandLogo src={["/lovable-uploads/d1859762-1792-4ebb-bd94-f148b6bdae7b.png","/lovable-uploads/matalino-logo.png","/lovable-uploads/matalino-logo.jpg","/lovable-uploads/matalino.svg","/lovable-uploads/matalino.png","/lovable-uploads/matalino.jpg"]} alt="Matalino logo" className="h-[10.5rem] w-auto mb-3" />
          
          <p className="text-sm text-muted-foreground mt-2">All‑in‑one AI model access + business suite. Unified access to several premium models with a store builder, link‑in‑bio maker, email campaigns, and automations.</p>
          <Link to="/matalino" className="mt-4 inline-flex text-primary story-link" data-cta="see-matalino">See Matalino</Link>
        </article>
      </div>
    </div>
  );
};

export default Products;
