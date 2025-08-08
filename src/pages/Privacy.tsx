import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/privacy` : 'https://www.innovix-llc.com/privacy';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16">
      <Helmet>
        <title>Privacy Policy | Innovix</title>
        <meta name="description" content="How Innovix collects and uses names and emails from our website. This policy applies to innovix-llc.com only." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebPage",
          name:"Privacy Policy",
          url: canonical
        })}</script>
      </Helmet>

      <header className="prose prose-invert max-w-3xl mx-auto text-center mb-10">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      </header>

      {/* Scope notice */}
      <section className="glass-card rounded-xl p-6 max-w-4xl mx-auto mb-6">
        <h2 className="text-lg font-semibold mb-3">Scope</h2>
        <p className="text-sm text-muted-foreground">This Privacy Policy covers the Innovix LLC website at innovix-llc.com and forms on this Site only. Our products JCAL.ai and Matalino have separate privacy policies that govern those services.</p>
      </section>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <section id="info" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <h3 className="text-base font-medium mt-2">1.1 Information You Provide</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Contact Details:</strong> Name and email address submitted via our contact forms or mailing list sign‑ups.</li>
            <li><strong>Messages:</strong> Any information you include in queries or feedback you send us.</li>
          </ul>
          <h3 className="text-base font-medium mt-4">1.2 Automatically Collected</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Basic Analytics:</strong> Page views and interactions using Google Analytics 4 with IP anonymization enabled.</li>
            <li><strong>Logs:</strong> Standard web server and security logs for reliability and abuse prevention.</li>
          </ul>
        </section>

        <section id="use" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and requests.</li>
            <li>Send updates or newsletters if you opt in (you can unsubscribe anytime).</li>
            <li>Operate, protect, and improve the Site.</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">We do not sell your personal information.</p>
        </section>

        <section id="legal" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">3. Legal Bases</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Consent:</strong> For email communications and form submissions.</li>
            <li><strong>Legitimate Interests:</strong> For Site operations, security, and aggregated analytics.</li>
          </ul>
        </section>

        <section id="sharing" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">4. Sharing and Processors</h2>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Email Service Provider:</strong> To deliver newsletters and updates to subscribers.</li>
            <li><strong>Analytics Provider (Google Analytics 4):</strong> With IP anonymization and limited data retention.</li>
            <li><strong>Hosting and Security:</strong> Infrastructure partners that help us operate the Site.</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">We do not directly process payments on this Site and do not collect payment information here.</p>
        </section>

        <section id="cookies" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">5. Cookies and Analytics</h2>
          <p>We use cookies and similar technologies for essential Site functionality and anonymized analytics. You can control cookies through your browser settings.</p>
        </section>

        <section id="retention" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
          <p>We retain contact information until you unsubscribe or request deletion. Aggregated analytics and server logs are kept for a limited period necessary for operations and security.</p>
        </section>

        <section id="rights" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, correction, and deletion</li>
            <li>Opt‑out of marketing communications at any time</li>
          </ul>
        </section>

        <section id="children" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>The Site is not directed to children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section id="changes" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>We may update this Policy. Updates will be posted here and the “Last updated” date above will be revised.</p>
        </section>

        <section id="contact" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
          <p>If you have questions or requests regarding this Policy, please reach out via our <a className="story-link" href="/contact">contact page</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
