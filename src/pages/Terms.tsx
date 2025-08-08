import React from "react";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/terms` : 'https://www.innovix-llc.com/terms';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16 prose prose-invert">
      <Helmet>
        <title>Terms and Conditions | Innovix</title>
        <meta name="description" content="Read the Innovix terms covering use, limitations, and responsibilities. Placeholder—please have counsel review." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1>Terms and Conditions</h1>
      <p><strong>Last Updated:</strong> {updated}</p>
      <nav aria-label="On this page">
        <ul>
          <li><a href="#acceptance">Acceptance</a></li>
          <li><a href="#definitions">Definitions</a></li>
          <li><a href="#access">Access and accounts</a></li>
          <li><a href="#ip">IP rights</a></li>
          <li><a href="#content">User content & acceptable use</a></li>
          <li><a href="#pricing">Purchases & pricing</a></li>
          <li><a href="#third">Third party links</a></li>
          <li><a href="#disclaimers">Disclaimers</a></li>
          <li><a href="#liability">Limitation of liability</a></li>
          <li><a href="#indemnification">Indemnification</a></li>
          <li><a href="#law">Governing law & venue</a></li>
          <li><a href="#changes">Changes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="acceptance"><h2>Acceptance</h2><p>Using our site means you agree to these terms.</p></section>
      <section id="definitions"><h2>Definitions</h2><p>Basic terms describing our services and users.</p></section>
      <section id="access"><h2>Access and accounts</h2><p>Keep your credentials secure and comply with policies.</p></section>
      <section id="ip"><h2>IP rights</h2><p>We retain rights to our products and content.</p></section>
      <section id="content"><h2>User content & acceptable use</h2><p>Don’t upload unlawful or infringing content.</p></section>
      <section id="pricing"><h2>Purchases & pricing</h2><p>Pricing details to be provided.</p></section>
      <section id="third"><h2>Third party links</h2><p>We’re not responsible for third-party sites.</p></section>
      <section id="disclaimers"><h2>Disclaimers</h2><p>Provided “as is” to the extent permitted by law.</p></section>
      <section id="liability"><h2>Limitation of liability</h2><p>Our liability is limited as allowed by law.</p></section>
      <section id="indemnification"><h2>Indemnification</h2><p>You agree to defend and hold us harmless for misuse.</p></section>
      <section id="law"><h2>Governing law & venue</h2><p>To be specified based on your location.</p></section>
      <section id="changes"><h2>Changes</h2><p>We may update these terms. Continued use means acceptance.</p></section>
      <section id="contact"><h2>Contact</h2><p>Use the contact form to reach us.</p></section>
      <p><em>Have legal counsel review before use.</em></p>
    </div>
  );
};

export default Terms;
