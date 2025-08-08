import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";
import BrandLogo from "@/components/common/BrandLogo";

const Jcal: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/jcal` : 'https://www.innovix-llc.com/jcal';
  return (
    <div className="container py-16">
      <Helmet>
        <title>JCAL – Structured Collaboration | Innovix</title>
        <meta name="description" content="JCAL keeps teams aligned without noise. Faster cycles, fewer missteps, and decisions that stick." />
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
      <BrandLogo src={["/lovable-uploads/2a736c9d-fe6b-4c72-8c35-7564930ab019.png","/lovable-uploads/jcal-logo.png","/lovable-uploads/jcal-logo.jpg","/lovable-uploads/jcal.svg","/lovable-uploads/jcal.png","/lovable-uploads/jcal.jpg"]} alt="JCAL.ai logo" className="h-8 w-auto mb-3" eager />
      <h1 className="text-3xl font-bold">JCAL</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Structured collaboration that speeds up alignment and keeps progress visible.</p>
      <div className="mt-8">
        <EmailCapture list="jcal" />
      </div>
    </div>
  );
};

export default Jcal;
