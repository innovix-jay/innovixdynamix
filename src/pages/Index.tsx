import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/hero/Hero";
import FeatureGrid from "@/components/common/FeatureGrid";
import Differentiators from "@/components/home/Differentiators";
import ProductCallouts from "@/components/home/ProductCallouts";
import WhyInnovix from "@/components/home/WhyInnovix";
import OurJourney from "@/components/home/OurJourney";
import HowWeWork from "@/components/home/HowWeWork";
import TrainingFlowDiagram from "@/components/home/TrainingFlowDiagram";
import HomeFAQ from "@/components/home/HomeFAQ";
import TeamingSection from "@/components/home/TeamingSection";
import CalloutBanner from "@/components/common/CalloutBanner";
import EmailCapture from "@/components/common/EmailCapture";
import StickyCTABanner from "@/components/home/StickyCTABanner";
import ConsentBanner from "@/components/common/ConsentBanner";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/` : 
    'https://www.innovixdynamix.com/';

  return (
    <div className="min-h-screen">
      <StickyCTABanner />
      
      <Helmet>
        <title>Innovix Dynamix | AI Training & Enablement, Ready on Day One</title>
        <meta name="description" content="Standards-aligned AI Training & Enablement for government and enterprise—aligned to OMB M-24-10 and NIST AI RMF." />
        <meta name="keywords" content="AI training, AI enablement, OMB M-24-10, NIST AI RMF, government AI, enterprise AI training" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Innovix Dynamix | AI Training & Enablement, Ready on Day One" />
        <meta property="og:description" content="Standards-aligned AI Training & Enablement for government and enterprise—aligned to OMB M-24-10 and NIST AI RMF." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Organization",
          name:"Innovix Dynamix LLC",
          url:"https://www.innovixdynamix.com",
          logo:"https://www.innovixdynamix.com/assets/innovix-logo.png",
          sameAs:["https://www.linkedin.com/company/innovixdynamix"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebSite",
          url:"https://www.innovixdynamix.com",
          potentialAction:{
            "@type":"SearchAction",
            target:"https://www.innovixdynamix.com/search?q={search_term_string}",
            "query-input":"required name=search_term_string"
          }
        })}</script>
      </Helmet>

      <Hero id="hero" />

      <Differentiators />

      <section id="features" className="container py-12 animate-fade-in">
        <FeatureGrid />
      </section>

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

      <TrainingFlowDiagram />

      <section id="faq" className="container py-12 animate-fade-in">
        <HomeFAQ />
      </section>

      <TeamingSection />

      <section id="email" className="container py-16 animate-fade-in">
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Get early access and playbooks</h2>
          <p className="text-sm text-muted-foreground mt-1">Join the list for product updates, launch guides, and practical tips. No spam.</p>
        </header>
        <EmailCapture id="signup" list="general" className="max-w-xl" data-cta="join-list-home" aria-label="Join the list" /* @ts-ignore custom prop */ emailOnly successMessage="You are on the list. We will be in touch soon." />
      </section>

      <section id="callout" className="container py-12 animate-fade-in">
        <CalloutBanner />
      </section>

      <ConsentBanner />
    </div>
  );
};

export default Index;
