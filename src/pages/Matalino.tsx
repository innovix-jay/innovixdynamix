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
        <title>Matalino – Launch smarter. Sell faster. | Innovix</title>
        <meta name="description" content="A lean, intelligent toolkit for creators and small teams—starter workflows, checklists, and mini‑apps that actually deliver." />
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
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Launch smarter. Sell faster. Matalino gets you there.</h1>
        <p className="text-muted-foreground mt-4">A lean, intelligent toolkit for creators and small teams—starter workflows, checklists, and mini‑apps that actually deliver.</p>
        <div className="mt-6">
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Join the Matalino waitlist</p>
          <EmailCapture list="matalino" />
        </div>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Why It Matters</h2>
          <p className="text-muted-foreground mt-2">Skip the brainstorm. Matalino arms you with systems you use, not read about. Ship critical workflows, fast.</p>
        </article>
        <article className="rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
          <h2 className="text-xl font-semibold">Bottom Line Impact</h2>
          <p className="text-muted-foreground mt-2">Matalino cuts launch time from weeks to hours—so you can focus on what matters: your craft.</p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/30 p-6">
        <h2 className="text-xl font-semibold">Features · How It Works</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>Start from the first word—plug‑and‑play starter kits like landing pages, checkout flows, and email sequences.</li>
          <li>Hands‑on automations and checklists—no dev, no designers, no excuses.</li>
          <li>Scales from solo creators to micro‑teams, with zero overengineering.</li>
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
