import React from "react";
import { Helmet } from "react-helmet-async";
import ceoPhoto from "@/assets/jay-cadmus-ceo.png";

const About: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://www.innovixdynamix.com/about';
  return (
    <div className="container py-16">
      <Helmet>
        <title>About Innovix Dynamix | Innovation, Integration, Excellence</title>
        <meta name="description" content="Innovix Dynamix builds AI tools for builders and businesses—innovation, integration, and excellence—led by Founder & CEO Jay Cadmus." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jay Cadmus",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "Innovix Dynamix LLC" },
          image: ceoPhoto,
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
            alt="Jay Cadmus, Founder & CEO of Innovix Dynamix"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-border shadow-lg"
            loading="lazy"
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
