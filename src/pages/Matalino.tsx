import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";
import BrandLogo from "@/components/common/BrandLogo";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Matalino: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/matalino` : 'https://www.innovixdynamix.com/matalino';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Matalino - AI Business Suite for Creators | All-in-One SaaS Platform</title>
        <meta name="description" content="Matalino: Unified AI model access + complete business suite. Multi-LLM aggregator with digital storefront, email marketing, AI contracts, and automation tools. Perfect for small businesses, creators, and solopreneurs. Replace multiple subscriptions with one platform." />
        <meta name="keywords" content="AI business suite, multi-LLM aggregator, AI for small business, creator tools, digital storefront, AI contracts, email marketing automation, solopreneur platform, AI SaaS, business automation, AI knowledge base" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Matalino - AI Business Suite | All-in-One Platform for Creators" />
        <meta property="og:description" content="Unified AI model access + complete business tools. Digital storefront, email marketing, AI contracts, and more in one platform." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matalino - AI Business Suite for Creators" />
        <meta name="twitter:description" content="All-in-one platform: AI models, digital storefront, email marketing, and automation." />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Matalino",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "All-in-one business suite with unified AI model access, digital storefront, email marketing, and automation tools for creators and small businesses",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/PreOrder"
          },
          "featureList": [
            "Unified multi-LLM access",
            "Digital storefront builder",
            "Link-in-bio creator",
            "Email marketing automation",
            "AI-generated contracts",
            "Payment processing",
            "Business automation"
          ],
          "applicationSubCategory": [
            "Business Management",
            "E-commerce",
            "Marketing Automation",
            "AI Tools"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1"
          }
        })}</script>
        
        {/* Structured Data - Product */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Matalino",
          "description": "All-in-one business platform combining AI model access with essential business tools",
          "brand": {
            "@type": "Organization",
            "name": "Innovix Dynamix"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/PreOrder",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}</script>
        
        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need coding skills to use Matalino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Matalino is a no-code business suite with a product store builder, link-in-bio maker, and email campaign creator. It also offers unified access to several premium AI models under one roof—nothing to code."
              }
            }
          ]
        })}</script>
      </Helmet>
      <div className="mx-auto max-w-3xl text-center">
        <BrandLogo src={["/lovable-uploads/d1859762-1792-4ebb-bd94-f148b6bdae7b.png","/lovable-uploads/matalino-logo.png","/lovable-uploads/matalino-logo.jpg","/lovable-uploads/matalino.svg","/lovable-uploads/matalino.png","/lovable-uploads/matalino.jpg"]} alt="Matalino logo" className="h-[12rem] w-auto mb-6 mx-auto" eager />
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">All‑in‑one AI model access + business suite</h1>
        <p className="text-muted-foreground mt-4">Unified access to several premium AI models under one plan. Launch pages, checkout, email campaigns, and automations—without juggling subscriptions.</p>
        <div className="mt-6">
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Join the Matalino waitlist</p>
          <EmailCapture list="matalino" />
        </div>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Why It Matters</h2>
          <p className="text-muted-foreground mt-2">Stop piecing together separate AI subs and tools. Get unified model access plus the business tools to actually ship.</p>
        </article>
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Bottom Line Impact</h2>
          <p className="text-muted-foreground mt-2">Replace multiple subscriptions with one plan—and launch faster while reducing cost and complexity.</p>
        </article>
      </section>

      <section role="note" aria-label="Unified AI access" className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <p className="text-sm md:text-base text-muted-foreground">No separate subscriptions needed—several premium AI models housed under one roof with unified access.</p>
      </section>

      <section className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 className="text-xl font-semibold">Features · How It Works</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>Unified access to several premium AI models—no separate subscriptions.</li>
          <li>Complete business suite: product store builder, link‑in‑bio maker, and email campaign creator.</li>
          <li>Starter workflows and checklists so you can ship in hours, not weeks.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 className="text-xl font-semibold">Who It’s For</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>Writers, artists, creators who just want to ship.</li>
          <li>Busy solopreneurs tired of tool paralysis.</li>
          <li>Micro‑agencies repeating setups, not reinventing them.</li>
        </ul>
      </section>

      <section aria-labelledby="matalino-faq" className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 id="matalino-faq" className="text-xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="no-code">
            <AccordionTrigger>Do I need coding skills?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. Matalino is a no‑code business suite with a product store builder, link‑in‑bio maker, and email campaign creator. It also offers unified access to several premium AI models under one roof—nothing to code.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Matalino;
