import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/common/ContactForm";

const Contact: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/contact` : 'https://www.innovixdynamix.com/contact';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Contact Innovix Dynamix | AI Consulting & Training Inquiries</title>
        <meta name="description" content="Contact Innovix Dynamix for AI consulting, government training contracts, digital transformation, and enterprise AI enablement. Reach out for partnership opportunities and project inquiries." />
        <meta name="keywords" content="contact AI consulting, AI training inquiries, government contracting contact, partnership opportunities, AI consulting firm contact" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="Contact Innovix Dynamix | AI Consulting Inquiries" />
        <meta property="og:description" content="Reach out for AI consulting, training contracts, and partnership opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Structured Data - ContactPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Innovix Dynamix",
          "description": "Contact form for AI consulting, training, and partnership inquiries",
          "mainEntity": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Inquiries",
              "email": "jay.cadmus@innovixdynamix.com",
              "areaServed": "US",
              "availableLanguage": "en"
            }
          }
        })}</script>
      </Helmet>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Tell us what you're aiming to improve. We'll follow up quickly.</p>
      <div className="mt-8 max-w-xl">
        <ContactForm id="contact-form" />
      </div>
    </div>
  );
};

export default Contact;
