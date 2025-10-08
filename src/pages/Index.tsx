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
        <title>AI Training & Consulting for Government & Enterprise | Innovix Dynamix</title>
        <meta name="description" content="Leading AI consulting and training firm specializing in government contracts, digital transformation, and enterprise AI enablement. OMB M-24-10 & NIST AI RMF aligned. Expert AI workflow automation and app building solutions." />
        <meta name="keywords" content="AI consulting, AI training, government AI contracts, digital transformation, AI workflow automation, AI app building, enterprise AI training, OMB M-24-10, NIST AI RMF, AI enablement, SaaS AI solutions, AI knowledge base, federal AI training, AI for government contractors" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="AI Training & Consulting for Government & Enterprise | Innovix Dynamix" />
        <meta property="og:description" content="Leading AI consulting and training firm specializing in government contracts, digital transformation, and enterprise AI enablement. Standards-aligned solutions that deliver results." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Innovix Dynamix" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Training & Consulting for Government & Enterprise" />
        <meta name="twitter:description" content="Leading AI consulting and training firm. Government contracts, digital transformation, enterprise AI enablement." />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* LinkedIn */}
        <meta property="og:image:alt" content="Innovix Dynamix - AI Training and Consulting Solutions" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Innovix Dynamix LLC",
          "alternateName": "Innovix Dynamix",
          "url": "https://www.innovixdynamix.com",
          "logo": "https://www.innovixdynamix.com/assets/innovix-logo.png",
          "description": "Leading AI consulting and training firm specializing in government contracts, digital transformation, and enterprise AI enablement",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "953 Bentstation Ln #303",
            "addressLocality": "Lake Mary",
            "addressRegion": "FL",
            "postalCode": "32746",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Business Inquiries",
            "email": "jay.cadmus@innovixdynamix.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/innovixdynamix"
          ],
          "founder": {
            "@type": "Person",
            "name": "Jay Cadmus",
            "jobTitle": "Founder & CEO"
          }
        })}</script>
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Innovix Dynamix AI Training & Consulting",
          "description": "AI consulting, training, and enablement services for government and enterprise",
          "provider": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
          },
          "areaServed": "US",
          "serviceType": [
            "AI Training",
            "AI Consulting",
            "Digital Transformation",
            "AI Workflow Automation",
            "Government AI Contracts",
            "Enterprise AI Enablement"
          ]
        })}</script>
        
        {/* Structured Data - Website */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.innovixdynamix.com",
          "name": "Innovix Dynamix",
          "description": "AI Training & Consulting for Government & Enterprise",
          "publisher": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
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
