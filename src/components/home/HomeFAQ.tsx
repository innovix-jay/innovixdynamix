import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFAQ: React.FC = () => {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold">FAQ</h2>
      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Innovix?</AccordionTrigger>
          <AccordionContent>
            Innovix delivers AI Training & Enablement that helps teams adopt AI safely and productively in day-to-day work. We provide a hosted, standards-aligned approach suitable for both government and private sector programs—aligned to OMB M-24-10, NIST AI Risk Management Framework (AI RMF), and Section 508 captions/transcripts baseline. Our core capabilities include practical AI patterns and guidance, monthly adoption/completion reporting with a simple Compliance Score snapshot, quarterly content refreshes, and usage-only analytics with no operational data ingestion. Innovix also operates two product initiatives from Innovix Labs: JCAL.ai (build AI-powered apps with a prompt) and Matalino (tools for small businesses and creators who ship).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Which product should I start with?</AccordionTrigger>
          <AccordionContent>
            If you need an app, start with JCAL.ai. If you need to launch and sell faster, start with Matalino.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you still offer consulting?</AccordionTrigger>
          <AccordionContent>
            Only when it helps customers onboard to our products. The point is to use the tools, not buy hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            Final pricing will be announced at launch. Early users get founder friendly tiers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default HomeFAQ;
