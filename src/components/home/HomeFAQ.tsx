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
            Innovix is the parent company behind JCAL.ai and Matalino. We build focused AI products for creators and small teams.
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
