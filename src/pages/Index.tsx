import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/hero/Hero";
import ProductCallouts from "@/components/home/ProductCallouts";
import WhyInnovix from "@/components/home/WhyInnovix";
import OurJourney from "@/components/home/OurJourney";
import HowWeWork from "@/components/home/HowWeWork";
import HomeFAQ from "@/components/home/HomeFAQ";
import CalloutBanner from "@/components/common/CalloutBanner";
import EmailCapture from "@/components/common/EmailCapture";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/` : 
    'https://www.innovix-llc.com/';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Innovix | The AI mothership for JCAL.ai and Matalino</title>
        <meta name="description" content="Innovix builds JCAL.ai and Matalino — focused AI tools to help creators and small teams ship faster. No buzzwords. Just results." />
        <meta name="keywords" content="AI app builder, creator workflows, launch automation, prompt to app, small business AI tools" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Innovix | We build the tools that build your business" />
        <meta property="og:description" content="Innovix builds JCAL.ai and Matalino so small teams can ship fast." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          name:"Innovix LLC",
          url:"https://www.innovix-llc.com",
          logo:"https://www.innovix-llc.com/assets/innovix-logo.png",
          sameAs:["https://www.linkedin.com/company/innovix-llc"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebSite",
          url:"https://www.innovix-llc.com",
          potentialAction:{
            "@type":"SearchAction",
            target:"https://www.innovix-llc.com/search?q={search_term_string}",
            "query-input":"required name=search_term_string"
          }
        })}</script>
      </Helmet>

      <Hero id="hero" />

      <section id="products" className="container py-16 animate-fade-in">
        <ProductCallouts />
      </section>

      <section id="why" className="container py-12 animate-fade-in">
        <WhyInnovix />
      </section>

      <section id="journey" className="container py-12 animate-fade-in">
        <OurJourney />
      </section>

      <section id="how" className="container py-12 animate-fade-in">
        <HowWeWork />
      </section>

      <section id="email" className="container py-16 animate-fade-in">
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Get early access and playbooks</h2>
          <p className="text-sm text-muted-foreground mt-1">Join the list for product updates, launch guides, and practical tips. No spam.</p>
        </header>
        <EmailCapture id="signup" list="general" className="max-w-xl" data-cta="join-list-home" aria-label="Join the list" /* @ts-ignore custom prop */ emailOnly successMessage="You are on the list. We will be in touch soon." />
      </section>

      <section id="faq" className="container py-12 animate-fade-in">
        <HomeFAQ />
      </section>

      <section id="callout" className="container py-12 animate-fade-in">
        <CalloutBanner />
      </section>
    </div>
  );
};

export default Index;
