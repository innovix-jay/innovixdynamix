import React from "react";
import { Helmet } from "react-helmet-async";
import EmailCapture from "@/components/common/EmailCapture";
import BrandLogo from "@/components/common/BrandLogo";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Matalino: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/matalino` : 'https://www.innovix-llc.com/matalino';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Matalino – AI model aggregator + business suite | Innovix</title>
        <meta name="description" content="Unified access to several premium AI models with store, email, and automations—launch faster without multiple subscriptions." />
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
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          mainEntity:[
            {
              "@type":"Question",
              name:"Do I need coding skills?",
              acceptedAnswer:{
                "@type":"Answer",
                text:"No. Matalino is a no-code business suite with a product store builder, link-in-bio maker, and email campaign creator. It also offers unified access to several premium AI models under one roof—nothing to code."
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
