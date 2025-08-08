import React from "react";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/terms` : 'https://www.innovix-llc.com/terms';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16">
      <Helmet>
        <title>Terms of Service | Matalino</title>
        <meta name="description" content="Terms of Service for Matalino AI covering accounts, subscriptions, acceptable use, IP, disclaimers, and changes." />
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
        <p className="text-muted-foreground"><strong>Last Updated:</strong> {updated}</p>
      </header>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* 1. Acceptance of Terms */}
        <section aria-labelledby="acceptance" className="glass-card p-6 rounded-xl">
          <h2 id="acceptance" className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using Matalino AI ("the Service"), you accept and agree to be bound by these terms. If you do not agree, please do not use the Service.</p>
        </section>

        {/* 2. Description of Service */}
        <section aria-labelledby="description" className="glass-card p-6 rounded-xl">
          <h2 id="description" className="text-xl font-semibold mb-2">2. Description of Service</h2>
          <p>Matalino AI is an artificial intelligence–powered business mentorship platform that provides:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>AI-powered chat consultations for business guidance</li>
            <li>Document generation and management tools</li>
            <li>Email marketing campaign creation and management</li>
            <li>E‑commerce store building capabilities</li>
            <li>Link-in-bio page creation tools</li>
            <li>Business analytics and insights</li>
          </ul>
        </section>

        {/* 3. User Accounts */}
        <section aria-labelledby="accounts" className="glass-card p-6 rounded-xl">
          <h2 id="accounts" className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <h3 className="text-base font-medium mt-2">3.1 Registration</h3>
          <p>You must register for an account to access certain features. You agree to provide accurate, current, and complete information.</p>
          <h3 className="text-base font-medium mt-4">3.2 Account Security</h3>
          <p>You are responsible for safeguarding your password and for activities under your account. Notify us promptly of any unauthorized use.</p>
        </section>

        {/* 4. Subscription Plans */}
        <section aria-labelledby="plans" className="glass-card p-6 rounded-xl">
          <h2 id="plans" className="text-xl font-semibold mb-2">4. Subscription Plans</h2>
          <h3 className="text-base font-medium mt-2">4.1 Free Plan</h3>
          <p>Limited access with usage restrictions on AI messages, document generation, and other premium features.</p>
          <h3 className="text-base font-medium mt-4">4.2 Pro Plan</h3>
          <p>Unlimited access to all features for a monthly subscription fee. Billing occurs monthly; you may cancel anytime.</p>
          <h3 className="text-base font-medium mt-4">4.3 Payment Terms</h3>
          <p>Subscription fees are billed in advance monthly. All fees are non‑refundable except as expressly stated in our refund policy.</p>
        </section>

        {/* 5. Acceptable Use */}
        <section aria-labelledby="acceptable-use" className="glass-card p-6 rounded-xl">
          <h2 id="acceptable-use" className="text-xl font-semibold mb-2">5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Generate harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the Service for any commercial purpose without authorization</li>
            <li>Share your account credentials with others</li>
          </ul>
        </section>

        {/* 6. Intellectual Property */}
        <section aria-labelledby="ip" className="glass-card p-6 rounded-xl">
          <h2 id="ip" className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <h3 className="text-base font-medium mt-2">6.1 Our Content</h3>
          <p>The Service and its original content, features, and functionality are owned by Matalino AI and protected by applicable intellectual property laws.</p>
          <h3 className="text-base font-medium mt-4">6.2 User Content</h3>
          <p>You retain ownership of content you create using the Service. You grant us a license to use and process your content as necessary to provide the Service.</p>
        </section>

        {/* 7. Privacy and Data Protection */}
        <section aria-labelledby="privacy" className="glass-card p-6 rounded-xl">
          <h2 id="privacy" className="text-xl font-semibold mb-2">7. Privacy and Data Protection</h2>
          <p>Your privacy is important to us. See our <a className="story-link" href="/privacy">Privacy Policy</a> for details on collection, use, and protection of information.</p>
        </section>

        {/* 8. Disclaimers */}
        <section aria-labelledby="disclaimers" className="glass-card p-6 rounded-xl">
          <h2 id="disclaimers" className="text-xl font-semibold mb-2">8. Disclaimers</h2>
          <p>The information provided by Matalino AI is for general informational purposes only. We make no warranties regarding completeness, reliability, or suitability.</p>
        </section>

        {/* 9. Limitation of Liability */}
        <section aria-labelledby="liability" className="glass-card p-6 rounded-xl">
          <h2 id="liability" className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Matalino AI shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, use, goodwill, or other intangible losses.</p>
        </section>

        {/* 10. Termination */}
        <section aria-labelledby="termination" className="glass-card p-6 rounded-xl">
          <h2 id="termination" className="text-xl font-semibold mb-2">10. Termination</h2>
          <p>We may suspend or terminate your account immediately, without prior notice, for any reason, including breach of these Terms.</p>
        </section>

        {/* 11. Changes to Terms */}
        <section aria-labelledby="changes" className="glass-card p-6 rounded-xl">
          <h2 id="changes" className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
          <p>We may modify these Terms at any time. If a revision is material, we will provide notice before new terms take effect.</p>
        </section>

        <p className="text-xs text-muted-foreground text-center">Have legal counsel review before use.</p>
      </div>
    </div>
  );
};

export default Terms;
