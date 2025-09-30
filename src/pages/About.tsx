import React from "react";
import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://www.innovix-llc.com/about';
  return (
    <div className="container py-16">
      <Helmet>
        <title>About Innovix | Innovation, Integration, Excellence</title>
        <meta name="description" content="Innovix builds AI tools for builders and businesses—innovation, integration, and excellence—led by Founder & CEO Jay Cadmus." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jay Cadmus",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "Innovix LLC" },
          image: "/lovable-uploads/4156af08-434d-40d8-ad89-db7c42e92674.png",
        })}</script>
      </Helmet>
      <h1 className="text-3xl font-bold">About Innovix</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Innovix equips teams with practical, standards-aligned AI Training & Enablement so they can use AI safely and productively in everyday work. We focus on clarity, speed, and outcomes—without adding operational burden.</p>

      <section aria-labelledby="positioning-heading" className="mt-10">
        <h2 id="positioning-heading" className="text-xl font-semibold">Why Innovix</h2>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Our approach aligns to OMB M-24-10, the NIST AI Risk Management Framework, and Section 508 captions/transcripts baseline, making it suitable for regulated environments and commercial teams alike. We emphasize capability and readiness: what you need is available quickly, maintained over time, and measured with simple adoption and completion reporting.
        </p>
      </section>

      <section aria-labelledby="founder-heading" className="mt-12">
        <h2 id="founder-heading" className="text-xl font-semibold">Founder & CEO</h2>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-[auto,1fr]">
          <img
            src="/lovable-uploads/4156af08-434d-40d8-ad89-db7c42e92674.png"
            alt="Jay Cadmus, Founder & CEO of Innovix"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-border shadow-lg"
            loading="lazy"
          />
          <div>
            <h3 className="sr-only">Jay Cadmus</h3>
            <p className="text-muted-foreground">
              Jay Cadmus leads Innovix with an operator’s focus and a builder’s curiosity. Coming from an Air Force background and deep experience in data science and analytics, he’s driven by a simple belief: people deserve powerful tools to express their creativity, test ideas, and turn ingenuity into value.
            </p>
            <p className="text-muted-foreground mt-3">
              At Innovix, Jay’s mission is to put practical AI in the hands of those who make things—so businesses, creators, and teams can move faster, think clearer, and create with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
