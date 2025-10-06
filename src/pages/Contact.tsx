import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/common/ContactForm";

const Contact: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/contact` : 'https://www.innovixdynamix.com/contact';
  return (
    <div className="container py-16">
      <Helmet>
        <title>Contact | Innovix Dynamix</title>
        <meta name="description" content="Reach out to Innovix Dynamix. Tell us what outcome you want, and we'll help you get there." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
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
