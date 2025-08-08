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
      <p className="text-muted-foreground mt-2 max-w-2xl">We build practical AI tools that remove busywork and amplify decision quality so builders can ship faster.</p>

      <section aria-labelledby="positioning-heading" className="mt-10">
        <h2 id="positioning-heading" className="text-xl font-semibold">Why Innovix</h2>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Innovix is a product-first company for people who create—product teams, agencies, entrepreneurs, and ambitious operators. If Apple crafts premium tools and Google offers premium access, Innovix exists to equip builders with modern AI products to design, launch, and scale what comes next.
        </p>
        <p className="text-muted-foreground mt-3 max-w-3xl">
          Not a consulting firm—an innovative provider dedicated to creation. Our mantra: Innovation. Integration. Excellence.
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
