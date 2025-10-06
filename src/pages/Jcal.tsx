import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";
import BrandLogo from "@/components/common/BrandLogo";

const Jcal: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/jcal` : 'https://www.innovixdynamix.com/jcal';
  return (
    <div className="container py-16">
      <Helmet>
        <title>JCAL.ai – From idea to app | Innovix Dynamix</title>
        <meta name="description" content="Describe your app in plain English and JCAL.ai scaffolds production-ready UI. Ship tools in minutes." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"SoftwareApplication",
          name:"JCAL.ai",
          applicationCategory:"BusinessApplication",
          operatingSystem:"Web",
          offers:{"@type":"Offer","price":"0","priceCurrency":"USD"}
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
