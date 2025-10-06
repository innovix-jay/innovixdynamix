import React from "react";
import { Helmet } from "react-helmet-async";

const Accessibility: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/accessibility` : 'https://www.innovix-llc.com/accessibility';
  const updated = new Date().toLocaleDateString();
  return (
    <div className="container py-16">
      <Helmet>
        <title>Accessibility Statement | Innovix Dynamix</title>
        <meta name="description" content="Our commitment to inclusive, accessible digital experiences with WCAG guidance, features, feedback, and conformance." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebPage",
          name:"Accessibility Statement",
          url: canonical
        })}</script>
      </Helmet>

      <header className="prose prose-invert max-w-3xl mx-auto text-center mb-10">
        <h1>Accessibility Statement</h1>
        <p className="text-muted-foreground">Committed to inclusive digital experiences for all users</p>
      </header>

      <section className="glass-card rounded-xl p-6 max-w-4xl mx-auto mb-6">
        <h2 className="text-lg font-semibold mb-3">Our Commitment to Accessibility</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Visual Accessibility</div>
            <p className="text-sm text-muted-foreground">High contrast design and scalable text</p>
          </div>
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Keyboard Navigation</div>
            <p className="text-sm text-muted-foreground">Full keyboard accessibility support</p>
          </div>
          <div className="rounded-lg border border-border/50 p-4">
            <div className="font-medium">Screen Readers</div>
            <p className="text-sm text-muted-foreground">Compatible with assistive technologies</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Accessibility Statement for Matalino</h2>
          <p>We are committed to ensuring digital accessibility for people with disabilities and are continually improving the user experience for everyone.</p>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Conformance Status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) define requirements to improve accessibility for people with disabilities. Matalino is partially conformant with WCAG 2.1 level AA, meaning some parts may not fully conform.</p>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Our Accessibility Features</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Semantic HTML structure for screen readers</li>
            <li>High contrast color schemes</li>
            <li>Keyboard navigation support</li>
            <li>Alternative text for images</li>
            <li>Responsive design for various screen sizes</li>
            <li>Visible focus indicators for interactive elements</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Feedback</h2>
          <p>We welcome your feedback on the accessibility of Matalino. Let us know if you encounter barriers:</p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Email: <a className="story-link" href="mailto:accessibility@matalino.ai">accessibility@matalino.ai</a></li>
            <li>Contact Form: <a className="story-link" href="/contact">Submit a support request</a></li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Technical Specifications</h2>
          <p>Accessibility of Matalino relies on the following technologies to work with your browser and assistive tools: HTML, WAI‑ARIA, CSS, and JavaScript.</p>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Assessment Approach</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Self‑evaluation using automated testing tools</li>
            <li>Manual testing with keyboard navigation</li>
            <li>Screen reader testing</li>
            <li>User testing with individuals who use assistive technologies</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Limitations and Known Issues</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>AI Chat Interface:</strong> Some dynamic content may not be immediately announced to screen readers.</li>
            <li><strong>File Uploads:</strong> Drag‑and‑drop may not be fully accessible; alternative upload methods are provided.</li>
            <li><strong>Third‑party Integrations:</strong> Embedded third‑party content may have limited accessibility features.</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p>If you're experiencing difficulties accessing any part of Matalino, please <a className="story-link" href="/contact">contact us</a>. We're committed to providing equal access for all users.</p>
          <p className="text-sm text-muted-foreground mt-4">This statement was last updated on {updated}.</p>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;
