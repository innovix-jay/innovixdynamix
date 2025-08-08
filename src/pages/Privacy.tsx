import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/privacy` : 'https://www.innovix-llc.com/privacy';
  const updated = new Date().toISOString();
  return (
    <div className="container py-16 prose prose-invert">
      <Helmet>
        <title>Privacy Policy | Innovix</title>
        <meta name="description" content="Our privacy policy explains what we collect, why, and how we protect your data. Clear and practical." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> {updated}</p>
      <nav aria-label="On this page">
        <ul>
          <li><a href="#who">Who we are</a></li>
          <li><a href="#data">What data we collect</a></li>
          <li><a href="#why">Why we collect</a></li>
          <li><a href="#cookies">Cookies and tracking</a></li>
          <li><a href="#sharing">Data sharing</a></li>
          <li><a href="#retention">Data retention</a></li>
          <li><a href="#rights">Your rights</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#children">Children’s privacy</a></li>
          <li><a href="#changes">Changes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="who"><h2>Who we are</h2><p>Innovix LLC builds focused AI products.</p></section>
      <section id="data"><h2>What data we collect</h2><p>Contact info you provide, usage analytics with anonymized IP, and technical logs.</p></section>
      <section id="why"><h2>Why we collect</h2><p>To run the service, improve experience, and communicate with you.</p></section>
      <section id="cookies"><h2>Cookies and tracking</h2><p>We use essential cookies and GA4. You can opt out of ad pixels.</p></section>
      <section id="sharing"><h2>Data sharing</h2><p>We don’t sell data. Limited sharing with processors that help us operate.</p></section>
      <section id="retention"><h2>Data retention</h2><p>We keep data only as long as needed for the purposes in this policy.</p></section>
      <section id="rights"><h2>Your rights</h2><p>Depending on your region, you may request access, correction, or deletion.</p></section>
      <section id="security"><h2>Security</h2><p>We apply reasonable safeguards and limit access.</p></section>
      <section id="children"><h2>Children’s privacy</h2><p>Our products aren’t directed to children.</p></section>
      <section id="changes"><h2>Changes</h2><p>We’ll update this page if the policy changes.</p></section>
      <section id="contact"><h2>Contact</h2><p>Reach us via the contact form.</p></section>
      <p><em>This is not legal advice.</em></p>
    </div>
  );
};

export default Privacy;
