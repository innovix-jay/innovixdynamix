import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { downloadCapabilitiesPDF } from "@/utils/capabilities-pdf";

const Capabilities: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/capabilities` : 'https://www.innovix-llc.com/capabilities';
  const contactEmail = "jay.cadmus@innovix-llc.com";

  return (
    <div className="container py-16 max-w-4xl">
      <Helmet>
        <title>Innovix Dynamix Capabilities Statement | AI Training & Enablement</title>
        <meta name="description" content="Standards-aligned AI Training & Enablement for government and enterprise—aligned to OMB M-24-10, NIST AI RMF, and Section 508 captions/transcripts baseline." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>

      <h1 className="text-4xl font-bold">Innovix Dynamix — Capabilities Statement</h1>

      <section aria-labelledby="what-we-do" className="mt-10">
        <h2 id="what-we-do" className="text-2xl font-semibold">What We Do</h2>
        <p className="text-muted-foreground mt-3">
          Innovix Dynamix delivers AI Training & Enablement that helps teams adopt AI safely in day-to-day work. We provide a hosted, standards-aligned approach so organizations can move fast without increasing risk. Suitable for both government and private sector programs.
        </p>
      </section>

      <section aria-labelledby="core-capabilities" className="mt-10">
        <h2 id="core-capabilities" className="text-2xl font-semibold">Core Capabilities</h2>
        <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
          <li>Hosted training experience (no new infrastructure required to begin)</li>
          <li>Practical AI patterns and guidance for daily work</li>
          <li>Monthly adoption/completion reporting and simple Compliance Score snapshot</li>
          <li>Quarterly content refreshes to keep examples current</li>
          <li>Usage-only analytics (no operational/customer data ingested)</li>
        </ul>
      </section>

      <section aria-labelledby="standards-alignment" className="mt-10">
        <h2 id="standards-alignment" className="text-2xl font-semibold">Standards Alignment (Plain Language)</h2>
        <div className="text-muted-foreground mt-3 space-y-3">
          <p>
            <strong>OMB M-24-10:</strong> governance, inventory, impact assessment, oversight, testing (alignment in training and guardrails)
          </p>
          <p>
            <strong>NIST AI RMF:</strong> Govern • Map • Measure • Manage (training maps to these functions)
          </p>
          <p>
            <strong>Section 508:</strong> captions and transcripts provided for training media; VPAT available on request
          </p>
          <p className="text-sm italic">
            Note: "Aligned to" means capability and readiness; no certification or prior federal deployment is implied.
          </p>
        </div>
      </section>

      <section aria-labelledby="how-engagements-work" className="mt-10">
        <h2 id="how-engagements-work" className="text-2xl font-semibold">How Engagements Work</h2>
        <p className="text-muted-foreground mt-3">
          Discovery → scope confirmation → hosted setup → onboarding → monthly reporting and quarterly refreshes. Innovix Dynamix participates in kickoff and keeps materials current over time.
        </p>
      </section>

      <section aria-labelledby="company-contact" className="mt-10">
        <h2 id="company-contact" className="text-2xl font-semibold">Company & Contact</h2>
        <div className="text-muted-foreground mt-3 space-y-2">
          <p><strong>Innovative Vision X LLC, operating as Innovix Dynamix</strong></p>
          <p>Contact: Jay Cadmus, CEO — <a href={`mailto:${contactEmail}`} className="story-link">{contactEmail}</a></p>
          <p>Website: <a href="https://www.innovix-llc.com" className="story-link">innovix-llc.com</a></p>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg" data-cta="request-discovery-call-capabilities">
          <Link to="/contact" aria-label="Request a discovery call">Request a discovery call</Link>
        </Button>
        <Button asChild variant="outline" size="lg" data-cta="email-requirements">
          <a href={`mailto:${contactEmail}`} aria-label="Email us your requirements">Email us your requirements</a>
        </Button>
      </div>

      <aside className="mt-16 border-t pt-8 text-sm text-muted-foreground italic">
        Note: Innovix Dynamix represents capability and readiness for the services described. Claims are expressed as alignment to OMB M-24-10, NIST AI RMF, and Section 508 practices; no certification or prior federal deployment is implied.
      </aside>
    </div>
  );
};

export default Capabilities;
