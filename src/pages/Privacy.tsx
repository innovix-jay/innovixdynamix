import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/privacy` : 'https://www.innovix-llc.com/privacy';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16">
      <Helmet>
        <title>Privacy Policy | Matalino</title>
        <meta name="description" content="How Matalino collects, uses, and protects your data. Clear, practical, and user‑first privacy policy." />
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

      <section className="glass-card rounded-xl p-6 max-w-4xl mx-auto mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Privacy at a Glance</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Secure Data</div>
            <p className="text-sm text-muted-foreground">Enterprise‑grade encryption protects your information.</p>
          </div>
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Transparent Use</div>
            <p className="text-sm text-muted-foreground">We clearly explain how your data is used.</p>
          </div>
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Your Control</div>
            <p className="text-sm text-muted-foreground">Delete or export your data anytime.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <section id="info" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <h3 className="text-base font-medium mt-2">1.1 Information You Provide</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Account Information:</strong> Name, email address, business information</li>
            <li><strong>Business Data:</strong> Documents, chat conversations, marketing campaigns</li>
            <li><strong>Payment Information:</strong> Billing details (processed securely through Stripe)</li>
            <li><strong>Communications:</strong> Support requests, feedback, and correspondence</li>
          </ul>
          <h3 className="text-base font-medium mt-4">1.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Usage Data:</strong> Features used, time spent, interactions with AI</li>
            <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
            <li><strong>Analytics Data:</strong> Performance metrics and service optimization data</li>
          </ul>
          <div className="mt-4 rounded-lg border border-border/50 p-4">
            <div className="font-medium">Data Security Promise</div>
            <p className="text-sm text-muted-foreground">All data is encrypted in transit and at rest using industry‑standard AES‑256 encryption. We never sell personal information.</p>
          </div>
        </section>

        <section id="use" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide services (AI consultations, document generation, campaigns)</li>
            <li>Improve our platform and add features</li>
            <li>Manage accounts, billing, and support</li>
            <li>Send service updates and security alerts</li>
            <li>Detect fraud, prevent abuse, and protect users</li>
          </ul>
        </section>

        <section id="sharing" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
          <h3 className="text-base font-medium mt-2">3.1 Third‑Party Services</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>AI Providers:</strong> OpenAI, Anthropic for processing (data not used for training)</li>
            <li><strong>Payments:</strong> Stripe for secure payment handling</li>
            <li><strong>Cloud:</strong> AWS/Google Cloud for hosting and storage</li>
            <li><strong>Analytics:</strong> Anonymous usage statistics for improvement</li>
          </ul>
          <h3 className="text-base font-medium mt-4">3.2 Legal Requirements</h3>
          <p>We may disclose information as required by law, to protect our rights, or to protect the safety of users or the public.</p>
        </section>

        <section id="retention" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
          <p>We retain information as long as necessary to provide services, comply with legal obligations, and resolve disputes. You can request deletion of your account and associated data; certain information may be retained as required by law.</p>
        </section>

        <section id="rights" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">5. Your Privacy Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, correction, and deletion</li>
            <li>Portability (export in machine‑readable format)</li>
            <li>Opt‑out of marketing communications</li>
          </ul>
        </section>

        <section id="transfers" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">6. International Data Transfers</h2>
          <p>Your information may be processed in other countries; we use appropriate safeguards consistent with applicable laws.</p>
        </section>

        <section id="children" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p>Our Service is not intended for children under 13; we do not knowingly collect personal information from children.</p>
        </section>

        <section id="changes" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy. We will post updates here and revise the “Last updated” date above.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
