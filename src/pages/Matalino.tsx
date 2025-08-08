import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";

const Matalino: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/matalino` : 'https://www.innovix-llc.com/matalino';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Matalino – Compact Insights | Innovix</title>
        <meta name="description" content="Matalino delivers compact insights at the moment of decision. Less searching, more clarity." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"SoftwareApplication",
          name:"Matalino",
          applicationCategory:"BusinessApplication",
          operatingSystem:"Web",
          offers:{"@type":"Offer","price":"0","priceCurrency":"USD"}
        })}</script>
      </Helmet>
      <img src="/lovable-uploads/matalino-logo.png" alt="Matalino logo" className="h-8 w-auto mb-3" loading="eager" decoding="async" />
      <h1 className="text-3xl font-bold">Matalino</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Sharper decisions through compact, contextual insights.</p>
      <div className="mt-8">
        <EmailCapture list="matalino" />
      </div>
    </div>
  );
};

export default Matalino;
