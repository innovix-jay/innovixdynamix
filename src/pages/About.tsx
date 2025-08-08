import React from "react";
import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://www.innovix-llc.com/about';
  return (
    <div className="container py-16">
      <Helmet>
        <title>About | Innovix</title>
        <meta name="description" content="Innovix builds AI products with a simple goal: speed, clarity, and control for your operations." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1 className="text-3xl font-bold">About Innovix</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">We ship focused tools that remove busywork and elevate decision quality. No bloat. No gimmicks.</p>
    </div>
  );
};

export default About;
