import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/privacy` : 'https://www.innovixdynamix.com/privacy';
  
  return (
    <div className="container py-16">
      <Helmet>
        <title>Privacy Policy | Innovix Dynamix</title>
        <meta name="description" content="Comprehensive privacy policy for Innovix Dynamix - US-only data storage, federal-grade security, and absolute prohibition on foreign data transfers." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebPage",
          name:"Privacy Policy",
          url: canonical
        })}</script>
      </Helmet>

      <header className="prose prose-invert max-w-4xl mx-auto text-center mb-10">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">
          <strong>Effective Date:</strong> October 7, 2025<br />
          <strong>Last Updated:</strong> October 7, 2025
        </p>
      </header>

      {/* Scope notice */}
      <section className="glass-card rounded-xl p-6 max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-3">Scope of This Policy</h2>
        <p className="mb-3">This Privacy Policy applies exclusively to the Innovative Vision X LLC (operating as Innovix Dynamix) website located at innovixdynamix.com (the "Site"). This Policy does not cover:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
          <li><strong>JCAL.ai</strong> – governed by its own privacy policy at [jcalai.com/privacy]</li>
          <li><strong>Matalino</strong> – governed by its own privacy policy at [matalino.online/privacy]</li>
          <li>Third-party websites linked from this Site</li>
        </ul>
      </section>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* Section 1 */}
        <section id="info" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-2">1.1 Information You Provide Directly</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li><strong>Contact Information:</strong> Name, email address, company name (if provided), and phone number (if provided) submitted through:
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Contact forms</li>
                <li>Newsletter or mailing list sign-ups</li>
                <li>Service inquiry forms</li>
              </ul>
            </li>
            <li><strong>Communications:</strong> Contents of messages, feedback, or questions you send us</li>
            <li><strong>Professional Information:</strong> Job title, industry, or project details you voluntarily share in inquiries</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">1.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-sm">
            <li><strong>Device and Browser Data:</strong> IP address (anonymized), browser type and version, operating system, device type, referring URL</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, access times, and dates</li>
            <li><strong>Cookies and Tracking Technologies:</strong> See Section 6 below</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">1.3 Information from Third Parties</h3>
          <p className="text-sm text-muted-foreground">We do not purchase or receive personal information about you from data brokers or third-party sources.</p>
        </section>

        {/* Section 2 */}
        <section id="use" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4 text-sm">We use collected information for the following purposes:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold">Purpose</th>
                  <th className="text-left p-2 font-semibold">Legal Basis (GDPR)</th>
                  <th className="text-left p-2 font-semibold">Applicable Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2">Respond to inquiries and support requests</td>
                  <td className="p-2 text-muted-foreground">Consent / Legitimate Interest</td>
                  <td className="p-2 text-muted-foreground">Contact info, messages</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Send newsletters and product updates</td>
                  <td className="p-2 text-muted-foreground">Consent (opt-in)</td>
                  <td className="p-2 text-muted-foreground">Email address</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Improve Site functionality and user experience</td>
                  <td className="p-2 text-muted-foreground">Legitimate Interest</td>
                  <td className="p-2 text-muted-foreground">Usage data, analytics</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Maintain Site security and prevent fraud</td>
                  <td className="p-2 text-muted-foreground">Legitimate Interest / Legal Obligation</td>
                  <td className="p-2 text-muted-foreground">IP logs, security data</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Comply with legal obligations</td>
                  <td className="p-2 text-muted-foreground">Legal Obligation</td>
                  <td className="p-2 text-muted-foreground">All applicable data</td>
                </tr>
                <tr>
                  <td className="p-2">Aggregate analytics and reporting</td>
                  <td className="p-2 text-muted-foreground">Legitimate Interest</td>
                  <td className="p-2 text-muted-foreground">Anonymized usage data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-accent/10 rounded-lg">
            <p className="text-sm font-semibold mb-2">We do not:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Sell your personal information to third parties</li>
              <li>Use your data for automated decision-making or profiling</li>
              <li>Share your data for third-party marketing purposes</li>
              <li>Transfer your data to foreign or overseas entities</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="legal" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">3. Legal Bases for Processing (GDPR)</h2>
          <p className="mb-3 text-sm">If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your personal data based on:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Consent:</strong> You have explicitly agreed (e.g., form submissions, newsletter sign-ups)</li>
            <li><strong>Legitimate Interests:</strong> Necessary for our business operations, security, and improvements, balanced against your rights</li>
            <li><strong>Legal Obligations:</strong> Required to comply with applicable laws</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">You may withdraw consent at any time by contacting us (see Section 14).</p>
        </section>

        {/* Section 4 */}
        <section id="sharing" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">4. How We Share Your Information</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-3">4.1 Service Providers</h3>
          <p className="mb-3 text-sm">We share data only with trusted third-party vendors who perform services on our behalf and are located within the United States:</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold">Category</th>
                  <th className="text-left p-2 font-semibold">Purpose</th>
                  <th className="text-left p-2 font-semibold">Examples</th>
                  <th className="text-left p-2 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2">Email Service Providers</td>
                  <td className="p-2 text-muted-foreground">Newsletter delivery, transactional emails</td>
                  <td className="p-2 text-muted-foreground">Resend, SendGrid, Mailchimp</td>
                  <td className="p-2 text-muted-foreground">US-based</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Analytics Providers</td>
                  <td className="p-2 text-muted-foreground">Site performance and usage analysis</td>
                  <td className="p-2 text-muted-foreground">Google Analytics 4 (IP anonymized)</td>
                  <td className="p-2 text-muted-foreground">US-based</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Hosting and Infrastructure</td>
                  <td className="p-2 text-muted-foreground">Site hosting, CDN, security</td>
                  <td className="p-2 text-muted-foreground">Vercel, Cloudflare, AWS (US regions)</td>
                  <td className="p-2 text-muted-foreground">US-based</td>
                </tr>
                <tr>
                  <td className="p-2">Security Services</td>
                  <td className="p-2 text-muted-foreground">DDoS protection, threat monitoring</td>
                  <td className="p-2 text-muted-foreground">Cloudflare, security partners</td>
                  <td className="p-2 text-muted-foreground">US-based</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm mb-2">These providers are contractually obligated to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>Protect your data using industry-standard security measures</li>
            <li>Use data only for specified purposes</li>
            <li>Maintain data exclusively on US-based servers</li>
            <li>Comply with applicable US privacy and security laws</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">4.2 Legal Requirements</h3>
          <p className="text-sm mb-2">We may disclose information if required by law, court order, subpoena, or government request, or to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>Enforce our Terms of Service</li>
            <li>Protect our rights, property, or safety</li>
            <li>Prevent fraud or security threats</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">All such disclosures will be made in compliance with applicable US federal and state laws.</p>

          <h3 className="text-lg font-medium mt-4 mb-2">4.3 Business Transfers</h3>
          <p className="text-sm text-muted-foreground">If Innovix Dynamix is involved in a merger, acquisition, sale of assets, bankruptcy, or reorganization, your information may be transferred to the successor entity. You will be notified via email and/or a prominent notice on the Site. Any successor entity will be required to honor the commitments made in this Privacy Policy, including our US-only data storage and no-foreign-transfer policies.</p>

          <h3 className="text-lg font-medium mt-4 mb-2">4.4 No Sale or Foreign Transfer of Data</h3>
          <div className="p-4 bg-accent/10 rounded-lg">
            <p className="text-sm font-semibold mb-2">We categorically do not and will never:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Sell, rent, or trade your personal information to third parties for monetary or other valuable consideration</li>
              <li>Transfer, share, or provide access to your data to any foreign, overseas, or non-US entity</li>
              <li>Store your data on servers located outside the United States</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">This is a core security commitment and competitive differentiator of our business practices.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="sovereignty" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">5. Data Sovereignty and US-Only Storage</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-2">5.1 US-Based Infrastructure</h3>
          <p className="text-sm text-muted-foreground mb-3">All personal information collected through this Site is stored exclusively on servers physically located within the United States. We do not use foreign data centers, offshore hosting, or international cloud regions for any data storage or processing.</p>

          <h3 className="text-lg font-medium mt-4 mb-2">5.2 Federal-Level Security Standards</h3>
          <p className="text-sm mb-2">We align our data handling practices with federal government standards for sensitive information, including:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>NIST Cybersecurity Framework:</strong> Implementation of NIST SP 800-53 controls appropriate to the sensitivity of data</li>
            <li><strong>Federal Information Security Management Act (FISMA):</strong> Security controls and continuous monitoring practices</li>
            <li><strong>HIPAA Security Rule Standards:</strong> Though we do not process Protected Health Information (PHI), we apply technical, physical, and administrative safeguards equivalent to HIPAA requirements</li>
            <li><strong>Federal Risk and Authorization Management Program (FedRAMP) principles:</strong> Cloud security baseline controls</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">5.3 Protection of Sensitive Data</h3>
          <p className="text-sm mb-2">Your data is treated with the same level of care and protection as:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>Personally Identifiable Information (PII) under federal standards</li>
            <li>Controlled Unclassified Information (CUI) security requirements</li>
            <li>Sensitive But Unclassified (SBU) information handling procedures</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">5.4 No Foreign Access</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>No offshore development or support:</strong> Our team members who access your data are US-based</li>
            <li><strong>No international subprocessors:</strong> We do not use service providers located outside the US</li>
            <li><strong>No data exports:</strong> Your information never leaves US jurisdiction</li>
            <li><strong>Contractual prohibitions:</strong> All service agreements explicitly prohibit foreign data transfers</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">This commitment ensures your data remains under US legal jurisdiction and protected by US privacy and security laws at all times.</p>
        </section>

        {/* Section 6 */}
        <section id="cookies" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-2">6.1 What Are Cookies?</h3>
          <p className="text-sm text-muted-foreground mb-3">Cookies are small text files stored on your device. We use cookies and similar technologies (web beacons, pixels) for:</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold">Type</th>
                  <th className="text-left p-2 font-semibold">Purpose</th>
                  <th className="text-left p-2 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2">Strictly Necessary</td>
                  <td className="p-2 text-muted-foreground">Site functionality, security, session management</td>
                  <td className="p-2 text-muted-foreground">Session / Persistent</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Analytics</td>
                  <td className="p-2 text-muted-foreground">Anonymized usage statistics (Google Analytics 4)</td>
                  <td className="p-2 text-muted-foreground">Persistent (up to 2 years)</td>
                </tr>
                <tr>
                  <td className="p-2">Functional</td>
                  <td className="p-2 text-muted-foreground">Remember preferences (e.g., language)</td>
                  <td className="p-2 text-muted-foreground">Persistent (up to 1 year)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium mt-4 mb-2">6.2 Your Cookie Choices</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Browser Settings:</strong> Configure your browser to refuse cookies or alert you when cookies are sent</li>
            <li><strong>Google Analytics Opt-Out:</strong> Install the Google Analytics Opt-out Browser Add-on</li>
            <li><strong>Do Not Track Signals:</strong> Our Site does not currently respond to Do Not Track (DNT) signals due to lack of industry consensus</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">Disabling cookies may limit Site functionality.</p>
        </section>

        {/* Section 7 */}
        <section id="retention" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">7. Data Retention</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold">Data Type</th>
                  <th className="text-left p-2 font-semibold">Retention Period</th>
                  <th className="text-left p-2 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2">Contact form submissions</td>
                  <td className="p-2 text-muted-foreground">Until you request deletion or 3 years of inactivity</td>
                  <td className="p-2 text-muted-foreground">Legitimate interest in maintaining correspondence</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Newsletter subscribers</td>
                  <td className="p-2 text-muted-foreground">Until unsubscribe or 2 years of inactivity</td>
                  <td className="p-2 text-muted-foreground">Consent-based marketing</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Analytics data (anonymized)</td>
                  <td className="p-2 text-muted-foreground">26 months (Google Analytics 4 default)</td>
                  <td className="p-2 text-muted-foreground">Aggregate analysis</td>
                </tr>
                <tr>
                  <td className="p-2">Security logs</td>
                  <td className="p-2 text-muted-foreground">90 days</td>
                  <td className="p-2 text-muted-foreground">Security and troubleshooting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-4">After retention periods expire, data is securely deleted using industry-standard data destruction methods that meet federal standards for permanent data erasure.</p>
        </section>

        {/* Section 8 */}
        <section id="rights" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">8. Your Privacy Rights</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-2">8.1 Rights Available to All Users</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Access:</strong> Request a copy of personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails via the link in every email or by contacting us</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">8.2 Additional Rights (GDPR – EEA/UK/Switzerland)</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (does not affect prior lawful processing)</li>
            <li><strong>Lodge a Complaint:</strong> Contact your local data protection authority</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">8.3 Additional Rights (US State Privacy Laws)</h3>
          <p className="text-sm mb-2">California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), and similar state laws:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Right to Know:</strong> Categories and specific pieces of personal information collected</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
            <li><strong>Right to Correct:</strong> Request correction of inaccurate information</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of "sales" (we do not sell data) and "sharing" for targeted advertising (we do not share for this purpose)</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><em>Note: We do not engage in "sales" or "sharing" of personal information as defined by these laws. We do not use personal information for "targeted advertising" or "profiling in furtherance of decisions that produce legal or similarly significant effects."</em></p>

          <h3 className="text-lg font-medium mt-4 mb-2">8.4 How to Exercise Your Rights</h3>
          <p className="text-sm mb-2">Submit requests via:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
            <li><strong>Email:</strong> jay.cadmus@innovixdynamix.com</li>
            <li><strong>Contact Form:</strong> <a href="/contact" className="story-link">https://innovixdynamix.com/contact</a></li>
            <li><strong>Subject Line:</strong> "Privacy Rights Request – [Your Name]"</li>
          </ul>
          <p className="text-sm mb-2">Include:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>Your full name and email address</li>
            <li>Description of your request</li>
            <li>Any additional information needed to verify your identity</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3"><strong>Response Time:</strong> We will respond within 30 days (45 days if complex, with notice). For California residents, you may use an authorized agent by providing written authorization.</p>
        </section>

        {/* Section 9 */}
        <section id="security" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">9. Data Security</h2>
          <p className="text-sm text-muted-foreground mb-4">We implement federal government-grade technical and organizational measures to protect your data:</p>
          
          <h3 className="text-lg font-medium mt-4 mb-2">9.1 Technical Safeguards</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Encryption in Transit:</strong> All data transmitted to and from the Site uses TLS 1.3 encryption (HTTPS)</li>
            <li><strong>Encryption at Rest:</strong> Data stored on our servers is encrypted using AES-256 or equivalent encryption standards</li>
            <li><strong>Access Controls:</strong> Role-based access control (RBAC), principle of least privilege, multi-factor authentication (MFA) for all administrative access</li>
            <li><strong>Network Security:</strong> Firewalls, intrusion detection systems (IDS), intrusion prevention systems (IPS), and continuous threat monitoring</li>
            <li><strong>Secure Configuration:</strong> Hardened server configurations following CIS Benchmarks and NIST guidelines</li>
            <li><strong>Vulnerability Management:</strong> Regular security scanning, penetration testing, and patch management</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">9.2 Administrative Safeguards</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Security Policies:</strong> Comprehensive information security policies and procedures</li>
            <li><strong>Employee Training:</strong> Regular security awareness training for all personnel</li>
            <li><strong>Background Checks:</strong> Screening of personnel with access to sensitive systems</li>
            <li><strong>Incident Response Plan:</strong> Documented procedures for detecting, responding to, and reporting security incidents</li>
            <li><strong>Vendor Management:</strong> Due diligence and ongoing monitoring of all service providers</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">9.3 Physical Safeguards</h3>
          <p className="text-sm mb-2"><strong>Data Center Security:</strong> Use of SOC 2 Type II certified, Tier III or higher data centers with:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>24/7 physical security and monitoring</li>
            <li>Biometric access controls</li>
            <li>Environmental controls (fire suppression, climate control)</li>
            <li>Redundant power and network connectivity</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><strong>US Jurisdiction:</strong> All data centers located exclusively in the continental United States</p>

          <h3 className="text-lg font-medium mt-4 mb-2">9.4 Compliance and Auditing</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Continuous Monitoring:</strong> Real-time security monitoring and alerting</li>
            <li><strong>Security Audits:</strong> Regular internal and external security assessments</li>
            <li><strong>Logging and Audit Trails:</strong> Comprehensive activity logging for accountability</li>
            <li><strong>Data Breach Response:</strong> Procedures to detect, contain, and report data breaches in compliance with applicable laws</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">9.5 Security Commitment</h3>
          <p className="text-sm text-muted-foreground mb-2">While no system is 100% secure, we employ security controls that meet or exceed:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>NIST SP 800-53 (Security and Privacy Controls for Information Systems)</li>
            <li>HIPAA Security Rule technical safeguards</li>
            <li>FedRAMP baseline security requirements</li>
            <li>SOC 2 Type II security criteria</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">You are responsible for safeguarding any credentials you create. If you suspect unauthorized access to your account, contact us immediately.</p>
        </section>

        {/* Section 10 */}
        <section id="international" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">10. International Data Transfers</h2>
          <p className="text-sm font-semibold mb-2">For EEA/UK/Switzerland Users:</p>
          <p className="text-sm text-muted-foreground mb-3">While we maintain all data on US-based servers, if you are accessing the Site from outside the United States, your information will be transferred to and processed in the United States. The United States may not offer the same level of data protection as your home country.</p>
          
          <p className="text-sm mb-2">Our US-only storage policy provides enhanced protection:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
            <li>Your data remains under US legal jurisdiction</li>
            <li>Protected by US federal and state privacy laws</li>
            <li>Subject to US law enforcement and judicial oversight only</li>
            <li>No exposure to foreign government access requests</li>
          </ul>

          <p className="text-sm mb-2">We rely on the following safeguards for international users:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li><strong>Standard Contractual Clauses (SCCs):</strong> Approved by the European Commission (where applicable)</li>
            <li><strong>Your Consent:</strong> By using this Site, you consent to the transfer of your information to the United States</li>
            <li><strong>Adequate Safeguards:</strong> Security measures described in Section 9</li>
          </ul>
        </section>

        {/* Section 11 */}
        <section id="children" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">11. Children's Privacy</h2>
          <p className="text-sm text-muted-foreground mb-3">The Site is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 13 (or 16 in certain jurisdictions).</p>
          <p className="text-sm text-muted-foreground">If we learn we have collected information from a child without proper consent, we will delete it promptly using secure data destruction methods. Parents or guardians who believe we have collected their child's information should contact us immediately.</p>
        </section>

        {/* Section 12 */}
        <section id="thirdparty" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">12. Third-Party Links</h2>
          <p className="text-sm text-muted-foreground mb-3">The Site may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.</p>
          <p className="text-sm text-muted-foreground"><em>Note: Third-party services we link to may not maintain the same US-only data storage standards that we do.</em></p>
        </section>

        {/* Section 13 */}
        <section id="changes" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
          <p className="text-sm text-muted-foreground mb-3">We may update this Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations.</p>
          
          <p className="text-sm mb-2"><strong>Notice of Changes:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
            <li>Updated "Last Updated" date at the top</li>
            <li>Material changes will be posted prominently on the Site and may be sent via email to newsletter subscribers</li>
            <li>Continued use of the Site after changes constitutes acceptance</li>
          </ul>
          
          <p className="text-sm text-muted-foreground">We encourage you to review this Policy periodically.</p>
        </section>

        {/* Section 14 */}
        <section id="contact" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">14. Contact Us</h2>
          <p className="text-sm text-muted-foreground mb-3">For questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>
          
          <div className="space-y-2 text-sm">
            <p><strong>Innovative Vision X LLC (DBA Innovix Dynamix)</strong></p>
            <p><strong>Email:</strong> <a href="mailto:jay.cadmus@innovixdynamix.com" className="story-link">jay.cadmus@innovixdynamix.com</a></p>
            <p><strong>Contact Form:</strong> <a href="/contact" className="story-link">https://innovixdynamix.com/contact</a></p>
            <p><strong>Physical Address:</strong><br />
            953 Bentstation Ln #303<br />
            Lake Mary, FL 32746<br />
            United States</p>
          </div>

          <p className="text-sm text-muted-foreground mt-4"><em>For EEA/UK Users: If you are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority.</em></p>
        </section>

        {/* Section 15 */}
        <section id="disclosures" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">15. Additional Disclosures</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-3">15.1 California-Specific Disclosures</h3>
          <p className="text-sm font-semibold mb-2">California "Shine the Light" Law:</p>
          <p className="text-sm text-muted-foreground mb-3">California residents may request information about disclosure of personal information to third parties for direct marketing purposes. We do not disclose personal information to third parties for their direct marketing purposes.</p>
          
          <p className="text-sm font-semibold mb-2">California Consumer Privacy Act (CCPA) Summary:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold">Category of Data</th>
                  <th className="text-left p-2 font-semibold">Collected?</th>
                  <th className="text-left p-2 font-semibold">Business Purpose</th>
                  <th className="text-left p-2 font-semibold">Shared With</th>
                  <th className="text-left p-2 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2">Identifiers (name, email, IP)</td>
                  <td className="p-2 text-muted-foreground">Yes</td>
                  <td className="p-2 text-muted-foreground">Communication, analytics, security</td>
                  <td className="p-2 text-muted-foreground">US-based service providers only</td>
                  <td className="p-2 text-muted-foreground">US only</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Commercial information</td>
                  <td className="p-2 text-muted-foreground">No</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Internet/network activity</td>
                  <td className="p-2 text-muted-foreground">Yes</td>
                  <td className="p-2 text-muted-foreground">Analytics, security</td>
                  <td className="p-2 text-muted-foreground">US-based service providers (anonymized)</td>
                  <td className="p-2 text-muted-foreground">US only</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Geolocation (coarse, via IP)</td>
                  <td className="p-2 text-muted-foreground">Yes (anonymized)</td>
                  <td className="p-2 text-muted-foreground">Analytics</td>
                  <td className="p-2 text-muted-foreground">US-based service providers</td>
                  <td className="p-2 text-muted-foreground">US only</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2">Professional information (if provided)</td>
                  <td className="p-2 text-muted-foreground">Yes</td>
                  <td className="p-2 text-muted-foreground">Communication, service inquiry</td>
                  <td className="p-2 text-muted-foreground">US-based service providers</td>
                  <td className="p-2 text-muted-foreground">US only</td>
                </tr>
                <tr>
                  <td className="p-2">Inferences</td>
                  <td className="p-2 text-muted-foreground">No</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                  <td className="p-2 text-muted-foreground">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-accent/10 rounded-lg mb-4">
            <p className="text-sm font-semibold mb-1">Sale or Sharing of Data:</p>
            <p className="text-sm text-muted-foreground">We have not sold or shared personal information in the past 12 months and will never do so in the future.</p>
          </div>

          <div className="p-4 bg-accent/10 rounded-lg">
            <p className="text-sm font-semibold mb-1">Foreign Transfer:</p>
            <p className="text-sm text-muted-foreground">We have not and will never transfer personal information to any foreign or overseas entity.</p>
          </div>

          <h3 className="text-lg font-medium mt-6 mb-2">15.2 Nevada Residents</h3>
          <p className="text-sm text-muted-foreground">Nevada residents have the right to opt out of the sale of certain personal information. We do not sell personal information as defined by Nevada law. If you are a Nevada resident and would like to submit an opt-out request, contact us at jay.cadmus@innovixdynamix.com.</p>
        </section>

        {/* Section 16 */}
        <section id="definitions" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">16. Definitions</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Personal Information:</strong> <span className="text-muted-foreground">Information that identifies, relates to, or could reasonably be linked with a particular individual or household.</span></li>
            <li><strong>Processing:</strong> <span className="text-muted-foreground">Any operation performed on personal data, including collection, use, storage, disclosure, or deletion.</span></li>
            <li><strong>Service Providers:</strong> <span className="text-muted-foreground">Third parties that process data on our behalf under contract, located exclusively in the United States.</span></li>
            <li><strong>US-Based:</strong> <span className="text-muted-foreground">Physical infrastructure, personnel, and operations located within the continental United States, Alaska, Hawaii, and US territories.</span></li>
          </ul>
        </section>

        {/* Section 17 */}
        <section id="commitment" className="glass-card p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">17. Our Security Commitment</h2>
          <p className="text-sm text-muted-foreground mb-3">Innovix Dynamix treats your data with the same level of protection and care as sensitive government information. Our US-only storage policy, federal-grade security standards, and absolute prohibition on foreign data transfers represent our commitment to:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-4">
            <li><strong>Data sovereignty:</strong> Your information stays under US jurisdiction</li>
            <li><strong>Maximum security:</strong> Protection equivalent to HIPAA and federal standards</li>
            <li><strong>Legal compliance:</strong> Full adherence to US federal and state privacy laws</li>
            <li><strong>Business integrity:</strong> Transparency and accountability in all data practices</li>
          </ul>

          <p className="text-sm text-muted-foreground">This approach is not just a legal requirement—it's a core business principle and competitive advantage that distinguishes us in the marketplace.</p>
        </section>

        {/* Final statement */}
        <section className="glass-card p-6 rounded-xl bg-accent/10">
          <p className="text-sm text-center text-muted-foreground">
            <strong>By using this Site, you acknowledge that you have read and understood this Privacy Policy.</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;