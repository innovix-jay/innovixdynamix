import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/hero/Hero";
import FeatureGrid from "@/components/common/FeatureGrid";
import ResultsStrip from "@/components/common/ResultsStrip";
import CalloutBanner from "@/components/common/CalloutBanner";
import EmailCapture from "@/components/common/EmailCapture";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/` : 
    'https://www.innovix-llc.com/';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Products for Precise Operations | Innovix</title>
        <meta name="description" content="Innovix builds focused AI products that streamline operations. Explore JCAL and Matalino. Fast, private, and purpose-built for results." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="AI Products for Precise Operations | Innovix" />
        <meta property="og:description" content="Innovix builds focused AI products that streamline operations. Explore JCAL and Matalino." />
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

      <section id="features" className="container py-16 animate-fade-in">
        <FeatureGrid />
      </section>

      <section id="results" className="container py-12 animate-fade-in">
        <ResultsStrip />
      </section>

      <section id="signup" className="container py-16 animate-fade-in">
        <EmailCapture id="signup" list="general" />
      </section>

      <section id="callout" className="container py-12 animate-fade-in">
        <CalloutBanner />
      </section>
    </div>
  );
};

export default Index;
