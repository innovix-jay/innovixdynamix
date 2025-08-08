import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";

const Products: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/products` : 'https://www.innovix-llc.com/products';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Products | Innovix</title>
        <meta name="description" content="Explore Innovix products: JCAL and Matalino. Built to reduce busywork and increase clarity in your operations." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="text-muted-foreground mt-2">Two focused products, one goal: better outcomes.</p>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <article id="pcard-jcal" className="glass-card p-6">
          <BrandLogo src={["/lovable-uploads/2a736c9d-fe6b-4c72-8c35-7564930ab019.png","/lovable-uploads/jcal-logo.png","/lovable-uploads/jcal-logo.jpg","/lovable-uploads/jcal.svg","/lovable-uploads/jcal.png","/lovable-uploads/jcal.jpg"]} alt="JCAL.ai logo" className="h-[10.5rem] w-auto mb-3" />
          
          <p className="text-sm text-muted-foreground mt-2">Structured collaboration that keeps teams aligned without the noise.</p>
          <Link to="/jcal" className="mt-4 inline-flex text-primary story-link" data-cta="explore-jcal">Explore JCAL</Link>
        </article>
        <article id="pcard-matalino" className="glass-card p-6">
          <BrandLogo src={["/lovable-uploads/d1859762-1792-4ebb-bd94-f148b6bdae7b.png","/lovable-uploads/matalino-logo.png","/lovable-uploads/matalino-logo.jpg","/lovable-uploads/matalino.svg","/lovable-uploads/matalino.png","/lovable-uploads/matalino.jpg"]} alt="Matalino logo" className="h-[10.5rem] w-auto mb-3" />
          
          <p className="text-sm text-muted-foreground mt-2">Sharper decisions through compact insights—right when you need them.</p>
          <Link to="/matalino" className="mt-4 inline-flex text-primary story-link" data-cta="see-matalino">See Matalino</Link>
        </article>
      </div>
    </div>
  );
};

export default Products;
