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
            If you're building AI-powered applications or need rapid prototyping capabilities, start with JCAL.ai—it lets you build functional apps with prompts, no coding required. If you're a small business, creator, or solopreneur looking to launch products, manage operations, and scale faster, Matalino provides the essential tools to ship and sell without getting bogged down in complexity. For organizations needing compliant AI adoption programs (government or enterprise), our AI Training & Enablement service is the right fit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you still offer consulting?</AccordionTrigger>
          <AccordionContent>
            We offer consulting only when it directly supports customer onboarding and successful adoption of our products and services. Our philosophy is tools over hours—we'd rather empower you with self-service capabilities than sell you expensive consulting engagements. However, for AI Training & Enablement implementations, we provide guidance and support as part of the program to ensure your team gets maximum value and meets compliance requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            For JCAL.ai and Matalino, final pricing will be announced at launch, with founder-friendly tiers for early users. For AI Training & Enablement services, pricing, terms, and conditions are subject to a legally binding contract, Master Service Agreement (MSA), and Service Level Agreement (SLA) with provisions specific to your organization's needs. To inquire about business opportunities and discuss custom arrangements, please contact us directly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What makes your AI Training & Enablement different?</AccordionTrigger>
          <AccordionContent>
            Our AI Training & Enablement is built for real-world compliance and productivity—not just theory. We align to OMB M-24-10, NIST AI Risk Management Framework (AI RMF), and Section 508 accessibility requirements, making it suitable for government agencies and private sector organizations with strict standards. You get practical AI patterns, monthly reporting with a Compliance Score snapshot, quarterly content updates, and usage-only analytics with zero operational data ingestion. It's hosted, turnkey, and designed to get teams productive with AI quickly and safely.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Can I use Innovix products if I'm not technical?</AccordionTrigger>
          <AccordionContent>
            Absolutely. JCAL.ai and Matalino are specifically designed for non-technical users. JCAL.ai lets you build AI-powered apps using natural language prompts—no coding required. Matalino provides straightforward tools for running your business without technical overhead. Our AI Training & Enablement program is also designed for everyday work adoption, not just technical teams. If you can describe what you want, our tools can help you build it or get it done.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default HomeFAQ;
