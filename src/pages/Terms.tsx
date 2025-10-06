import React from "react";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/terms` : 'https://www.innovix-llc.com/terms';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16">
      <Helmet>
        <title>Terms of Service | Innovix Dynamix</title>
        <meta name="description" content="Innovix Dynamix website terms of service. Covers use of innovix-llc.com only. Separate terms apply to JCAL.ai and Matalino." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebPage",
          name:"Terms of Service",
          url: canonical
        })}</script>
      </Helmet>

      <header className="prose prose-invert max-w-3xl mx-auto text-center mb-10">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      </header>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* 1. Acceptance of Terms */}
        <section aria-labelledby="acceptance" className="glass-card p-6 rounded-xl">
          <h2 id="acceptance" className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>These Terms govern your use of the Innovix Dynamix LLC website available at innovix-llc.com (the "Site"). By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.</p>
        </section>

        {/* 2. Scope and Separate Product Terms */}
        <section aria-labelledby="scope" className="glass-card p-6 rounded-xl">
          <h2 id="scope" className="text-xl font-semibold mb-2">2. Scope and Separate Product Terms</h2>
          <p>These Terms apply only to the Innovix Dynamix corporate website and related informational pages. Our products and brands, including JCAL.ai and Matalino, have their own terms and policies which govern use of those services.</p>
        </section>

        {/* 3. Use of the Site */}
        <section aria-labelledby="use" className="glass-card p-6 rounded-xl">
          <h2 id="use" className="text-xl font-semibold mb-2">3. Use of the Site</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You may browse the Site and use any publicly available resources for informational purposes.</li>
            <li>You agree not to misuse the Site, attempt to interfere with its operation, or access non‑public areas.</li>
            <li>You must comply with all applicable laws while using the Site.</li>
          </ul>
        </section>

        {/* 4. Intellectual Property */}
        <section aria-labelledby="ip" className="glass-card p-6 rounded-xl">
          <h2 id="ip" className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>The Site, its design, text, graphics, and other content are owned or licensed by Innovix Dynamix LLC and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without prior written permission.</p>
        </section>

        {/* 5. No Accounts or Purchases on the Site */}
        <section aria-labelledby="accounts" className="glass-card p-6 rounded-xl">
          <h2 id="accounts" className="text-xl font-semibold mb-2">5. No Accounts or Purchases on the Site</h2>
          <p>The Site does not offer user accounts or direct purchases. If you choose to contact us or join our mailing list, you may provide your name and email address. Handling of that information is described in our <a className="story-link" href="/privacy">Privacy Policy</a>.</p>
        </section>

        {/* 6. Third‑Party Links */}
        <section aria-labelledby="links" className="glass-card p-6 rounded-xl">
          <h2 id="links" className="text-xl font-semibold mb-2">6. Third‑Party Links</h2>
          <p>The Site may contain links to third‑party websites. Innovix Dynamix does not control and is not responsible for the content or practices of those sites.</p>
        </section>

        {/* 7. Disclaimers */}
        <section aria-labelledby="disclaimers" className="glass-card p-6 rounded-xl">
          <h2 id="disclaimers" className="text-xl font-semibold mb-2">7. Disclaimers</h2>
          <p>The Site is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of accuracy, reliability, or fitness for a particular purpose.</p>
        </section>

        {/* 8. Limitation of Liability */}
        <section aria-labelledby="liability" className="glass-card p-6 rounded-xl">
          <h2 id="liability" className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Innovix Dynamix LLC and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site.</p>
        </section>

        {/* 9. Changes to the Site and Terms */}
        <section aria-labelledby="changes" className="glass-card p-6 rounded-xl">
          <h2 id="changes" className="text-xl font-semibold mb-2">9. Changes to the Site and Terms</h2>
          <p>We may update the Site and these Terms from time to time. Updates will be posted on this page with the "Last updated" date above.</p>
        </section>

        {/* 10. Governing Law */}
        <section aria-labelledby="law" className="glass-card p-6 rounded-xl">
          <h2 id="law" className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p>These Terms are governed by the laws of the jurisdiction where Innovix Dynamix LLC is formed, without regard to conflict of laws principles.</p>
        </section>

        {/* 11. Contact */}
        <section aria-labelledby="contact" className="glass-card p-6 rounded-xl">
          <h2 id="contact" className="text-xl font-semibold mb-2">11. Contact</h2>
          <p>If you have questions about these Terms, please contact us via the <a className="story-link" href="/contact">contact page</a>.</p>
        </section>

        <p className="text-xs text-muted-foreground text-center">Placeholder legal text for review by counsel.</p>
      </div>
    </div>
  );
};

export default Terms;
