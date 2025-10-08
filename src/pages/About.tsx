import React from "react";
import { Helmet } from "react-helmet-async";
import ceoPhoto from "@/assets/jay-cadmus-ceo.png";

const About: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://www.innovixdynamix.com/about';
  return (
    <div className="container py-16">
      <Helmet>
        <title>About Innovix Dynamix | Leading AI Consulting & Digital Transformation Firm</title>
        <meta name="description" content="Service-disabled veteran-owned AI consulting firm specializing in government contracts and enterprise digital transformation. Expert AI training, workflow automation, and production-ready solutions led by CEO Jay Cadmus." />
        <meta name="keywords" content="AI consulting firm, digital transformation, service-disabled veteran-owned business, SDVOSB, AI training experts, government AI consulting, enterprise AI solutions, Jay Cadmus CEO" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="About Innovix Dynamix | Leading AI Consulting Firm" />
        <meta property="og:description" content="Service-disabled veteran-owned AI consulting firm specializing in government contracts and enterprise digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Innovix Dynamix | Leading AI Consulting Firm" />
        <meta name="twitter:description" content="SDVOSB AI consulting firm led by CEO Jay Cadmus. Government contracts and enterprise digital transformation experts." />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Structured Data - Person */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jay Cadmus",
          "jobTitle": "Founder & CEO",
          "description": "Service-disabled Air Force veteran specializing in AI consulting, digital transformation, and data science for government and enterprise clients",
          "worksFor": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
          },
          "image": "https://www.innovixdynamix.com" + ceoPhoto,
          "alumniOf": "United States Air Force",
          "knowsAbout": [
            "Artificial Intelligence",
            "Digital Transformation",
            "Data Science",
            "Government Contracting",
            "Enterprise AI Training"
          ]
        })}</script>
        
        {/* Structured Data - AboutPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Innovix Dynamix",
          "description": "Learn about Innovix Dynamix, a leading AI consulting and training firm for government and enterprise clients",
          "mainEntity": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
          }
        })}</script>
      </Helmet>
      <h1 className="text-3xl font-bold">About Innovix Dynamix</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Innovix Dynamix delivers practical AI training and production-ready solutions that help teams adopt AI safely and move faster. From standards-aligned training programs to specialized products like JCAL and Matalino, we focus on capability and readiness—not theory.</p>
      <p className="text-muted-foreground mt-3 max-w-2xl">Founded by a service-disabled Air Force veteran with deep experience in data science, analytics, and digital transformation, we understand what regulated environments and mission-driven teams need: tools and training that work, guidance you can trust, and solutions that ship.</p>

      <section aria-labelledby="positioning-heading" className="mt-10">
        <h2 id="positioning-heading" className="text-xl font-semibold">Why Innovix Dynamix</h2>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          We align with OMB M-24-10 and the NIST AI Risk Management Framework because standards matter—especially in government and regulated environments. Our approach emphasizes three things: speed without shortcuts, security by design, and measurable outcomes.
        </p>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Everything we build is hosted on US-only infrastructure with federal-grade security standards. We're a small business that moves fast, delivers real products, and partners effectively with prime contractors and commercial teams alike.
        </p>
      </section>

      <section aria-labelledby="founder-heading" className="mt-12">
        <h2 id="founder-heading" className="text-xl font-semibold">Founder & CEO</h2>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-[auto,1fr]">
          <img
            src={ceoPhoto}
            alt="Jay Cadmus - Founder and CEO of Innovix Dynamix, Service-Disabled Air Force Veteran specializing in AI consulting, digital transformation, and government contracting"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-border shadow-lg"
            loading="lazy"
            width="192"
            height="192"
          />
          <div>
            <h3 className="sr-only">Jay Cadmus</h3>
            <p className="text-muted-foreground">
              Jay Cadmus leads Innovix Dynamix with an operator's focus and a builder's drive. Coming from an Air Force background in contracting and digital transformation, with deep experience in data science and analytics, he's motivated by a straightforward belief: people deserve powerful, practical tools to express their creativity, test ideas, and turn effort into outcomes.
            </p>
            <p className="text-muted-foreground mt-3">
              At Innovix Dynamix, Jay's mission is to put working AI solutions in the hands of those who make things—so businesses, creators, and teams can move faster, think clearer, and build with confidence. We ship products and solutions, not promises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
