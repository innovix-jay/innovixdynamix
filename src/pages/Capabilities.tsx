import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Capabilities: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/capabilities` : 'https://www.innovixdynamix.com/capabilities';
  const contactEmail = "jay.cadmus@innovixdynamix.com";

  return (
    <div className="container py-16 max-w-5xl">
      <Helmet>
        <title>Innovix Dynamix Capabilities Statement | AI Training, Enablement & Production-Ready Solutions</title>
        <meta name="description" content="SDVOSB-certified AI training, JCAL development platform, and Matalino business tools. Standards-aligned solutions for government and commercial teams." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">INNOVIX DYNAMIX</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">AI Training, Enablement & Production-Ready Solutions</p>
        <div className="text-sm text-muted-foreground space-y-1">
          <p><strong>Innovative Vision X LLC | Operating as Innovix Dynamix</strong></p>
          <p>953 Bentstation Ln #303, Lake Mary, FL 32746</p>
          <p>Jay Cadmus, CEO | <a href={`mailto:${contactEmail}`} className="story-link">{contactEmail}</a> | <a href="https://innovixdynamix.com" className="story-link">innovixdynamix.com</a></p>
        </div>
      </header>

      {/* Company Profile */}
      <section aria-labelledby="company-profile" className="mb-12">
        <h2 id="company-profile" className="text-3xl font-bold mb-4">COMPANY PROFILE</h2>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>Business Structure:</strong> Florida Limited Liability Company (LLC)</p>
          <p><strong>Socioeconomic Status:</strong> Small Business | Service-Disabled Veteran-Owned Small Business (SDVOSB certification in process)</p>
          <p><strong>Year Established:</strong> 2025</p>
          <p><strong>SAM.gov Registration:</strong> In process</p>
        </div>
      </section>

      {/* Who We Are */}
      <section aria-labelledby="who-we-are" className="mb-12">
        <h2 id="who-we-are" className="text-3xl font-bold mb-4">WHO WE ARE</h2>
        <p className="text-muted-foreground leading-relaxed">
          Innovix Dynamix delivers expert AI enablement and production-ready solutions—from standards-aligned training programs to specialized products like JCAL and Matalino. We equip teams to adopt AI safely and productively, with guidance anchored in OMB M-24-10 and the NIST AI Risk Management Framework. Built for regulated environments and commercial teams ready to move fast.
        </p>
      </section>

      {/* Core Competencies */}
      <section aria-labelledby="core-competencies" className="mb-12">
        <h2 id="core-competencies" className="text-3xl font-bold mb-6">CORE COMPETENCIES</h2>
        
        <div className="space-y-8">
          {/* 1. AI Workforce Training */}
          <div>
            <h3 className="text-xl font-semibold mb-3">1. AI Workforce Training & Enablement</h3>
            <p className="text-muted-foreground mb-3">
              Scalable, role-based AI training that equips government and commercial IT/cybersecurity personnel with practical prompt engineering skills, safe-use guardrails, and repeatable AI workflows aligned to mission requirements.
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>Delivery:</strong> Hosted training portal requiring no customer infrastructure. Provisioning completes within 1-3 weeks of award.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Standards Alignment:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>OMB M-24-10:</strong> AI governance, inventory, impact assessment, oversight, and testing</li>
              <li><strong>NIST AI RMF:</strong> Govern, Map, Measure, Manage framework integration</li>
              <li><strong>Section 508:</strong> Full accessibility compliance (captions, transcripts, keyboard navigation, VPAT available)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              <strong>Target Applications:</strong> Government contracting (as subcontractor/teaming partner), enterprise workforce development, regulated industry training programs.
            </p>
          </div>

          {/* 2. JCAL */}
          <div>
            <h3 className="text-xl font-semibold mb-3">2. Agentic Development Platforms (JCAL)</h3>
            <p className="text-muted-foreground mb-3">
              JCAL is an agentic cloud IDE that builds, runs, and deploys real applications from natural language prompts. Designed for rapid prototyping, citizen development, and accelerated software delivery.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Key Capabilities:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Natural language to working code (Next.js, React, TypeScript, Tailwind)</li>
              <li>Live preview and real-time compilation</li>
              <li>Integrated deployment pipelines</li>
              <li>API-driven architecture with Model Context Protocol (MCP)</li>
              <li>Multi-LLM support (OpenAI, Anthropic, Google)</li>
            </ul>
            <p className="text-muted-foreground mt-3 mb-2"><strong>Use Cases:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Rapid application prototyping for government modernization initiatives</li>
              <li>Low-code/no-code development for mission support tools</li>
              <li>Internal tool development with fast iteration cycles</li>
              <li>Proof-of-concept and pilot program acceleration</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              <strong>Target Markets:</strong> Federal agencies pursuing IT modernization, commercial software teams, system integrators needing rapid custom solutions.
            </p>
          </div>

          {/* 3. Matalino */}
          <div>
            <h3 className="text-xl font-semibold mb-3">3. Business Enablement Platforms (Matalino)</h3>
            <p className="text-muted-foreground mb-3">
              Matalino is an all-in-one platform for creators, solopreneurs, and small businesses combining digital storefront, link-in-bio, email marketing, AI-generated contracts/agreements, and multi-LLM chat capabilities.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Key Features:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Digital storefront and service catalog</li>
              <li>Link-in-bio with analytics</li>
              <li>Email marketing automation</li>
              <li>Prompt-built contracts and service agreements</li>
              <li>Multi-LLM chat (OpenAI, Anthropic, Google) in one interface</li>
              <li>Stripe integration for payments</li>
            </ul>
            <p className="text-muted-foreground mt-3 mb-2"><strong>Use Cases:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Small business contractor portals</li>
              <li>Service provider automation</li>
              <li>Veteran-owned small business (VOSB) operations</li>
              <li>Freelance and consulting practice management</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              <strong>Target Markets:</strong> Small businesses, government contractors managing commercial operations, professional services firms, independent consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Federal-Grade Security */}
      <section aria-labelledby="security" className="mb-12">
        <h2 id="security" className="text-3xl font-bold mb-4">FEDERAL-GRADE SECURITY & DATA SOVEREIGNTY</h2>
        <p className="text-muted-foreground mb-4">Across all offerings:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>US-only data infrastructure with federal security standards (NIST SP 800-53, FISMA principles, HIPAA-equivalent safeguards, FedRAMP baseline controls)</li>
          <li>All data stored exclusively on US servers with zero foreign access or transfers</li>
          <li>SOC 2 Type II certified infrastructure</li>
          <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
          <li>Multi-factor authentication (MFA) support</li>
          <li>Role-based access controls (RBAC)</li>
        </ul>
        <p className="text-muted-foreground mt-4 font-medium">
          Your data receives protection equivalent to Controlled Unclassified Information (CUI) and Sensitive But Unclassified (SBU) standards.
        </p>
      </section>

      {/* NAICS Codes */}
      <section aria-labelledby="naics-codes" className="mb-12">
        <h2 id="naics-codes" className="text-3xl font-bold mb-4">NAICS CODES</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-muted-foreground mb-2">Primary:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>611430 – Professional and Management Development Training</li>
              <li>541511 – Custom Computer Programming Services</li>
              <li>541512 – Computer Systems Design Services</li>
              <li>518210 – Data Processing, Hosting, and Related Services</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-muted-foreground mb-2">Secondary:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>541519 – Other Computer Related Services</li>
              <li>611420 – Computer Training</li>
              <li>541690 – Other Scientific and Technical Consulting Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section aria-labelledby="differentiators" className="mb-12">
        <h2 id="differentiators" className="text-3xl font-bold mb-6">DIFFERENTIATORS</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. US-Only Data Storage – Zero Foreign Exposure</h3>
            <p className="text-muted-foreground mb-2">Unlike competitors using international cloud regions or offshore support:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>All data stored exclusively in continental US data centers</li>
              <li>Zero foreign subcontractors or offshore teams</li>
              <li>No international data transfers – ever</li>
              <li>Protected under US jurisdiction only, eliminating foreign government access risks</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Federal-Grade Security Without Federal Pricing</h3>
            <p className="text-muted-foreground">
              Security controls meeting NIST, FISMA, HIPAA, and FedRAMP standards across all products and services—accessible to both government and commercial clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Rapid Deployment Across All Solutions</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>AI Training:</strong> 1-3 weeks from award to operational</li>
              <li><strong>JCAL:</strong> Immediate access, cloud-based IDE with zero installation</li>
              <li><strong>Matalino:</strong> Sign up to operational storefront in hours</li>
            </ul>
            <p className="text-muted-foreground mt-2">Minimal customer burden, maximum speed to value.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Practical, Mission-Focused Approach</h3>
            <p className="text-muted-foreground mb-2">Not generic AI theory or vaporware—production-ready solutions and job-specific training designed for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Government IT and cybersecurity teams</li>
              <li>System integrators needing custom tools fast</li>
              <li>Small businesses and contractors managing operations</li>
              <li>Commercial teams adopting AI safely</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Service-Disabled Veteran-Owned Small Business</h3>
            <p className="text-muted-foreground mb-2">Veteran leadership brings:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Deep understanding of government mission requirements</li>
              <li>Commitment to operational excellence and accountability</li>
              <li>Experience with federal processes and security protocols</li>
              <li>Values-driven business practices and integrity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Built for Teaming & Flexible Engagement</h3>
            <p className="text-muted-foreground mb-2">AI Training designed to integrate seamlessly as subcontractor or teaming partner on professional staffing and IT modernization contracts.</p>
            <p className="text-muted-foreground mb-2">JCAL and Matalino available for:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Direct licensing to government agencies or contractors</li>
              <li>White-label or OEM partnerships</li>
              <li>Custom development and integration services</li>
              <li>Pilot programs and proof-of-concept engagements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement Approach */}
      <section aria-labelledby="engagement-approach" className="mb-12">
        <h2 id="engagement-approach" className="text-3xl font-bold mb-4">ENGAGEMENT APPROACH</h2>
        <div className="space-y-3 text-muted-foreground">
          <p><strong>Discovery & Kickoff</strong> → SOW review, FTE roster and role mapping (for training), requirements gathering (for products), kickoff participation, reporting cadence confirmation</p>
          <p><strong>Hosted Setup</strong> → Portal/platform configuration, user provisioning with MFA, integration with customer workflows (Week 1)</p>
          <p><strong>Onboarding Sprint</strong> → Baseline training completion (training), initial application deployment (JCAL), storefront setup (Matalino), user briefings (Weeks 1-2)</p>
          <p><strong>Ongoing Delivery</strong> → Monthly metrics reporting, quarterly content updates (training), continuous platform support and feature releases (products), help channel for technical issues</p>
          <p className="mt-4">
            Innovix Dynamix maintains active participation throughout the contract, coordinates with prime contractors on scope changes, and ensures all solutions remain current with evolving AI capabilities and government policy.
          </p>
        </div>
      </section>

      {/* Past Performance */}
      <section aria-labelledby="past-performance" className="mb-12">
        <h2 id="past-performance" className="text-3xl font-bold mb-4">PAST PERFORMANCE & PARTNERSHIPS</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <strong>Current Positioning:</strong> Innovix Dynamix is actively building past performance through strategic teaming agreements with established government contractors and commercial partnerships. Our AI training capability serves as a competitive differentiator for prime contractors pursuing IT staffing and mission support contracts.
          </p>
          <p className="mb-2"><strong>Partnership Models:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Subcontractor:</strong> AI training and enablement integrated into larger contract vehicles</li>
            <li><strong>Product Licensing:</strong> JCAL and Matalino licensed to government agencies or prime contractors</li>
            <li><strong>Custom Development:</strong> Bespoke AI solutions and integrations for specific mission requirements</li>
          </ul>
          <p className="mt-3">
            <strong>References Available Upon Request:</strong> Teaming partners and current engagement references can be provided during proposal evaluation.
          </p>
        </div>
      </section>

      {/* Target Markets */}
      <section aria-labelledby="target-markets" className="mb-12">
        <h2 id="target-markets" className="text-3xl font-bold mb-4">TARGET MARKETS</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Federal Government</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Department of Defense (DoD) - IT modernization and workforce AI enablement</li>
              <li>Civilian agencies requiring AI training and rapid application development</li>
              <li>Intelligence Community (IC) support contractors</li>
              <li>Federal small business programs (SDVOSB set-asides, 8(a) programs)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">State & Local Government</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>State IT departments and cybersecurity programs</li>
              <li>Local government technology modernization initiatives</li>
              <li>Public sector small business contractor support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Commercial Sector</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>System integrators needing rapid custom solutions</li>
              <li>Enterprise IT teams adopting AI</li>
              <li>Small businesses and professional services firms</li>
              <li>Creator economy and solopreneur market</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Contract Vehicles</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Professional staffing augmentation contracts</li>
              <li>IT services and solutions contracts</li>
              <li>Training and workforce development contracts</li>
              <li>Software-as-a-Service (SaaS) licensing agreements</li>
              <li>Custom development and integration task orders</li>
              <li>SDVOSB set-aside opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Innovix Dynamix */}
      <section aria-labelledby="why-innovix" className="mb-12">
        <h2 id="why-innovix" className="text-3xl font-bold mb-4">WHY INNOVIX DYNAMIX</h2>
        <div className="grid gap-2 text-muted-foreground">
          <p>✓ Comprehensive AI Portfolio – Training, development platforms, and business tools</p>
          <p>✓ Service-Disabled Veteran-Owned – SDVOSB leadership and values</p>
          <p>✓ Zero Infrastructure Burden – Fully hosted solutions, nothing to deploy</p>
          <p>✓ US-Only Data Storage – No foreign exposure, enhanced security posture</p>
          <p>✓ Federal Security Standards – NIST, FISMA, HIPAA-equivalent controls</p>
          <p>✓ Rapid Deployment – Days to weeks, not months</p>
          <p>✓ Standards Aligned – OMB M-24-10, NIST AI RMF, Section 508</p>
          <p>✓ Teaming-Friendly – Built to integrate as subcontractor or product provider</p>
          <p>✓ Production-Ready – Real solutions shipping today, not roadmap promises</p>
        </div>
      </section>

      {/* Technical Capabilities Summary */}
      <section aria-labelledby="technical-summary" className="mb-12">
        <h2 id="technical-summary" className="text-3xl font-bold mb-4">TECHNICAL CAPABILITIES SUMMARY</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold">Solution</th>
                <th className="border border-border p-3 text-left font-semibold">Key Capabilities</th>
                <th className="border border-border p-3 text-left font-semibold">Deployment Time</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr>
                <td className="border border-border p-3">AI Training</td>
                <td className="border border-border p-3">Video modules, role-based paths, MFA, Section 508 compliant</td>
                <td className="border border-border p-3">1-3 weeks</td>
              </tr>
              <tr>
                <td className="border border-border p-3">JCAL</td>
                <td className="border border-border p-3">Natural language to code, live preview, cloud IDE, multi-LLM</td>
                <td className="border border-border p-3">Immediate access</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Matalino</td>
                <td className="border border-border p-3">Storefront, email marketing, AI contracts, multi-LLM chat, payments</td>
                <td className="border border-border p-3">Hours to operational</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Security</td>
                <td className="border border-border p-3">US-only servers, TLS 1.3, AES-256, NIST/FISMA/HIPAA standards</td>
                <td className="border border-border p-3">All solutions</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Scalability</td>
                <td className="border border-border p-3">10-10,000+ users per solution</td>
                <td className="border border-border p-3">All solutions</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Integration</td>
                <td className="border border-border p-3">API-first architecture, MCP support, webhook integration</td>
                <td className="border border-border p-3">All solutions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section aria-labelledby="contact-next-steps" className="mb-12">
        <h2 id="contact-next-steps" className="text-3xl font-bold mb-4">CONTACT & NEXT STEPS</h2>
        <p className="text-muted-foreground mb-4">Ready to discuss teaming opportunities, product licensing, or respond to your RFP?</p>
        <div className="text-muted-foreground space-y-2 mb-6">
          <p><strong>Jay Cadmus, CEO</strong></p>
          <p>Innovative Vision X LLC (DBA Innovix Dynamix)</p>
          <p>Email: <a href={`mailto:${contactEmail}`} className="story-link">{contactEmail}</a></p>
          <p>Website: <a href="https://innovixdynamix.com" className="story-link">innovixdynamix.com</a></p>
          <p>Address: 953 Bentstation Ln #303, Lake Mary, FL 32746</p>
        </div>
        <p className="text-muted-foreground italic">We respond to teaming and partnership requests within 24-48 hours.</p>
      </section>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg" data-cta="request-discovery-call-capabilities">
          <Link to="/contact" aria-label="Request a discovery call">Request a discovery call</Link>
        </Button>
        <Button asChild variant="outline" size="lg" data-cta="email-requirements">
          <a href={`mailto:${contactEmail}`} aria-label="Email us your requirements">Email us your requirements</a>
        </Button>
      </div>
    </div>
  );
};

export default Capabilities;
