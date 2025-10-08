import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";
import BrandLogo from "@/components/common/BrandLogo";

const Jcal: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/jcal` : 'https://www.innovixdynamix.com/jcal';
  return (
    <div className="container py-16">
      <Helmet>
        <title>JCAL.ai - AI App Building Platform | Prompt to Production | Innovix Dynamix</title>
        <meta name="description" content="JCAL.ai: Revolutionary AI app building platform. Transform natural language prompts into production-ready applications. Rapid prototyping, workflow automation, and SaaS development without coding. Perfect for government modernization and enterprise digital transformation." />
        <meta name="keywords" content="AI app building, AI development platform, prompt to app, no-code AI, low-code development, rapid prototyping, SaaS platform, AI workflow automation, government modernization, citizen development, agentic IDE" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="JCAL.ai - AI App Building Platform | Build Apps with Prompts" />
        <meta property="og:description" content="Transform ideas into production-ready apps using natural language. Revolutionary AI development platform for rapid prototyping and deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JCAL.ai - Build AI Apps with Prompts" />
        <meta name="twitter:description" content="Revolutionary AI app building platform. From prompt to production in minutes." />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "JCAL.ai",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "description": "AI-powered app building platform that transforms natural language prompts into production-ready applications",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/PreOrder"
          },
          "featureList": [
            "Natural language to code conversion",
            "Live preview and real-time compilation",
            "Integrated deployment pipelines",
            "Multi-LLM support",
            "Rapid prototyping",
            "Zero infrastructure setup"
          ],
          "applicationSubCategory": [
            "AI Development",
            "Low-Code Platform",
            "Rapid Application Development"
          ],
          "screenshot": "https://www.innovixdynamix.com/assets/jcal-screenshot.jpg",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1"
          }
        })}</script>
        
        {/* Structured Data - Product */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "JCAL.ai",
          "description": "Agentic cloud IDE for building applications from natural language prompts",
          "brand": {
            "@type": "Organization",
            "name": "Innovix Dynamix"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/PreOrder",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}</script>
      </Helmet>
      <div className="mx-auto max-w-3xl text-center">
        <BrandLogo src={["/lovable-uploads/2a736c9d-fe6b-4c72-8c35-7564930ab019.png","/lovable-uploads/jcal-logo.png","/lovable-uploads/jcal-logo.jpg","/lovable-uploads/jcal.svg","/lovable-uploads/jcal.png","/lovable-uploads/jcal.jpg"]} alt="JCAL.ai logo" className="h-[12rem] w-auto mb-6 mx-auto" eager />
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">From idea to app—prompt it, ship it, done.</h1>
        <p className="text-muted-foreground mt-4">Forget backlog paralysis—describe your app in plain English, and watch it scaffold into production‑ready UI.</p>
        <div className="mt-6">
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Join the JCAL.ai waitlist</p>
          <EmailCapture list="jcal" />
        </div>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Why It Matters</h2>
          <p className="text-muted-foreground mt-2">Your vision, not the backlog, is the driver. JCAL.ai handles the code chain so you’re shipping, not waiting.</p>
        </article>
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Bottom Line Impact</h2>
          <p className="text-muted-foreground mt-2">JCAL.ai lets you ship tools in minutes—so your next idea actually becomes something you can show.</p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 className="text-xl font-semibold">Features · How It Works</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>Natural‑language prompts translate directly into live UI (forms, dashboards, CRUD flows).</li>
          <li>Iteration is as easy as refining your prompt—no dev infrastructure needed.</li>
          <li>Zero dev debt—just ideas turned into usable tools, fast.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 className="text-xl font-semibold">Who It’s For</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>Product people and builders prototyping ideas endlessly.</li>
          <li>Agencies needing internal tools ready for use fast.</li>
          <li>Founders who demand working apps, not meetings.</li>
        </ul>
      </section>
    </div>
  );
};

export default Jcal;
