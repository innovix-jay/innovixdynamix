import React from "react";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/terms` : 'https://www.innovixdynamix.com/terms';
  
  return (
    <div className="container py-16">
      <Helmet>
        <title>Terms of Service | Innovix Dynamix</title>
        <meta name="description" content="Comprehensive Terms of Service for Innovix Dynamix. Covers use of innovixdynamix.com, intellectual property, data security, US-only infrastructure, and legal terms." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          url: canonical,
          datePublished: "2025-10-07",
          dateModified: "2025-10-07"
        })}</script>
      </Helmet>

      <header className="prose prose-invert max-w-3xl mx-auto text-center mb-10">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">
          <strong>Effective Date:</strong> October 7, 2025<br />
          <strong>Last Updated:</strong> October 7, 2025
        </p>
      </header>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* 1. Acceptance of Terms */}
        <section aria-labelledby="acceptance" className="glass-card p-6 rounded-xl">
          <h2 id="acceptance" className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>These Terms of Service (the "Terms") constitute a legally binding agreement between you (the "User" or "you") and Innovative Vision X LLC, a Florida limited liability company operating as Innovix Dynamix ("Company," "we," "us," or "our"), governing your access to and use of the Innovix Dynamix website located at innovixdynamix.com (the "Site").</p>
          <p className="mt-3">By accessing, browsing, or using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must immediately discontinue use of the Site.</p>
          <p className="mt-3">These Terms apply to all visitors, users, and others who access or use the Site.</p>
        </section>

        {/* 2. Scope and Separate Product Terms */}
        <section aria-labelledby="scope" className="glass-card p-6 rounded-xl">
          <h2 id="scope" className="text-xl font-semibold mb-3">2. Scope and Separate Product Terms</h2>
          <h3 className="font-semibold mt-4 mb-2">2.1 This Site Only</h3>
          <p>These Terms apply exclusively to the Innovix Dynamix corporate website at innovixdynamix.com, including all informational pages, blog content, contact forms, and related resources hosted on this domain.</p>
          
          <h3 className="font-semibold mt-4 mb-2">2.2 Separate Product Terms</h3>
          <p>Our products and brands maintain their own separate terms of service and privacy policies:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>JCAL.ai</strong> – Terms available at [jcalai.com/terms]</li>
            <li><strong>Matalino</strong> – Terms available at [matalino.online/terms]</li>
          </ul>
          <p className="mt-3">Use of those products and services is governed by their respective terms, not these Terms. By accessing those products, you agree to be bound by their specific terms and policies.</p>
          
          <h3 className="font-semibold mt-4 mb-2">2.3 No Cross-Application</h3>
          <p>Nothing in these Terms grants you any rights to use, access, or reference our separate products or services. Each product must be accessed and used in accordance with its own terms.</p>
        </section>

        {/* 3. Eligibility and User Representations */}
        <section aria-labelledby="eligibility" className="glass-card p-6 rounded-xl">
          <h2 id="eligibility" className="text-xl font-semibold mb-3">3. Eligibility and User Representations</h2>
          <h3 className="font-semibold mt-4 mb-2">3.1 Age Requirement</h3>
          <p>You must be at least 18 years of age to use the Site. By using the Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>
          
          <h3 className="font-semibold mt-4 mb-2">3.2 Authority</h3>
          <p>If you are using the Site on behalf of a business, organization, or other entity, you represent and warrant that:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You have the authority to bind that entity to these Terms</li>
            <li>You agree to these Terms on behalf of that entity</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">3.3 Accuracy of Information</h3>
          <p>You represent and warrant that all information you provide through the Site (including via contact forms, newsletter sign-ups, or other submissions) is accurate, current, and complete.</p>
        </section>

        {/* 4. Permitted Use of the Site */}
        <section aria-labelledby="use" className="glass-card p-6 rounded-xl">
          <h2 id="use" className="text-xl font-semibold mb-3">4. Permitted Use of the Site</h2>
          <h3 className="font-semibold mt-4 mb-2">4.1 License Grant</h3>
          <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Site for your personal, non-commercial, informational purposes only.</p>
          
          <h3 className="font-semibold mt-4 mb-2">4.2 Permitted Activities</h3>
          <p>You may:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Browse and view publicly available content on the Site</li>
            <li>Contact us through provided contact forms for legitimate business inquiries</li>
            <li>Subscribe to our newsletter or mailing lists (subject to opt-out rights)</li>
            <li>Share links to the Site via social media or other platforms</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">4.3 Prohibited Activities</h3>
          <p>You agree not to:</p>
          
          <p className="font-semibold mt-3">Technical Misuse:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Use automated systems (bots, scrapers, crawlers) to access the Site without our prior written consent</li>
            <li>Attempt to gain unauthorized access to any portion of the Site, servers, or networks</li>
            <li>Introduce viruses, malware, trojans, worms, or other malicious code</li>
            <li>Interfere with, disrupt, or create an undue burden on the Site or its infrastructure</li>
            <li>Circumvent or attempt to circumvent any security features or access controls</li>
            <li>Reverse engineer, decompile, or disassemble any software or technology underlying the Site</li>
          </ul>
          
          <p className="font-semibold mt-3">Content Misuse:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Copy, reproduce, distribute, modify, or create derivative works of Site content without permission</li>
            <li>Frame, mirror, or replicate any portion of the Site on another website</li>
            <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
            <li>Use the Site content for any commercial purpose without our express written consent</li>
          </ul>
          
          <p className="font-semibold mt-3">Legal Violations:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Use the Site for any unlawful purpose or in violation of any applicable local, state, national, or international law</li>
            <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
            <li>Collect or harvest personal information about other users without their consent</li>
            <li>Submit false, misleading, or fraudulent information through contact forms or other submission mechanisms</li>
            <li>Engage in any activity that violates the rights of others, including intellectual property, privacy, or publicity rights</li>
          </ul>
          
          <p className="font-semibold mt-3">Abuse:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Transmit spam, unsolicited advertisements, or promotional materials through Site features</li>
            <li>Use the Site to harass, abuse, threaten, or intimidate others</li>
            <li>Post or transmit any defamatory, obscene, offensive, or illegal content</li>
          </ul>
          
          <p className="mt-3">Violation of these prohibitions may result in immediate termination of your access to the Site and potential legal action.</p>
        </section>

        {/* 5. Intellectual Property Rights */}
        <section aria-labelledby="ip" className="glass-card p-6 rounded-xl">
          <h2 id="ip" className="text-xl font-semibold mb-3">5. Intellectual Property Rights</h2>
          <h3 className="font-semibold mt-4 mb-2">5.1 Ownership</h3>
          <p>The Site and all content, features, and functionality (including but not limited to text, graphics, logos, images, videos, audio, software, code, design, layout, and overall "look and feel") are owned by Innovative Vision X LLC, operating as Innovix Dynamix, or our licensors, and are protected by:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>United States and international copyright laws</li>
            <li>Trademark laws</li>
            <li>Patent laws</li>
            <li>Trade secret laws</li>
            <li>Other intellectual property and proprietary rights laws</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">5.2 Trademarks</h3>
          <p>"Innovix Dynamix," "JCAL.ai," "Matalino," and associated logos, designs, and trade dress are trademarks or service marks of Innovative Vision X LLC. You may not use these marks without our prior written permission.</p>
          <p className="mt-2">All other trademarks, service marks, and trade names appearing on the Site are the property of their respective owners.</p>
          
          <h3 className="font-semibold mt-4 mb-2">5.3 Limited Use Rights</h3>
          <p>Subject to these Terms, you may:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>View and temporarily cache copies of Site content for personal, non-commercial use only</li>
            <li>Print individual pages for personal, non-commercial reference only</li>
          </ul>
          <p className="mt-2">You may not otherwise reproduce, distribute, modify, publicly display, publicly perform, or create derivative works of any Site content without our express written permission.</p>
          
          <h3 className="font-semibold mt-4 mb-2">5.4 DMCA and Copyright Infringement</h3>
          <p>We respect intellectual property rights and expect users to do the same. If you believe content on the Site infringes your copyright, contact us with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your contact information and electronic signature</li>
            <li>Description of the copyrighted work claimed to be infringed</li>
            <li>Location of the allegedly infringing material on the Site</li>
            <li>Statement that you have a good faith belief the use is unauthorized</li>
            <li>Statement that the information in your notice is accurate and you are the copyright owner or authorized to act on their behalf</li>
          </ul>
          <p className="mt-3"><strong>Copyright Agent Contact:</strong><br />
          Email: jay.cadmus@innovixdynamix.com<br />
          Address: 953 Bentstation Ln #303, Lake Mary, FL 32746</p>
          <p className="mt-2">We may terminate accounts or access for repeat infringers.</p>
        </section>

        {/* 6. User Submissions and Communications */}
        <section aria-labelledby="submissions" className="glass-card p-6 rounded-xl">
          <h2 id="submissions" className="text-xl font-semibold mb-3">6. User Submissions and Communications</h2>
          <h3 className="font-semibold mt-4 mb-2">6.1 Contact Forms and Inquiries</h3>
          <p>When you submit information through our contact forms or send us communications:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and respond to your submission</li>
            <li>We may use your contact information to respond to your inquiry and for purposes described in our Privacy Policy</li>
            <li>We are under no obligation to maintain confidentiality unless a separate non-disclosure agreement is in place</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">6.2 Unsolicited Ideas</h3>
          <p>We do not accept unsolicited ideas, proposals, or materials. If you send us unsolicited ideas, proposals, suggestions, or materials ("Unsolicited Materials"), you acknowledge that:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>We have no obligation to review or consider them</li>
            <li>We have no obligation to maintain their confidentiality</li>
            <li>We may use them without restriction or compensation to you</li>
            <li>You waive any claim that our future products or services infringe on any rights in the Unsolicited Materials</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">6.3 Feedback</h3>
          <p>Any feedback, comments, or suggestions you provide about the Site or our business ("Feedback") will be considered non-confidential and non-proprietary. We may use Feedback without restriction or obligation to you.</p>
        </section>

        {/* 7. No Accounts, Purchases, or Transactions */}
        <section aria-labelledby="accounts" className="glass-card p-6 rounded-xl">
          <h2 id="accounts" className="text-xl font-semibold mb-3">7. No Accounts, Purchases, or Transactions</h2>
          <h3 className="font-semibold mt-4 mb-2">7.1 Informational Site Only</h3>
          <p>The Site does not offer:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>User accounts or registration</li>
            <li>E-commerce functionality or direct purchases</li>
            <li>Subscription services (except optional newsletter sign-ups)</li>
            <li>Any transactional features</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">7.2 Product Access</h3>
          <p>To access our products (JCAL.ai and Matalino), you must visit their respective websites and agree to their separate terms of service.</p>
          
          <h3 className="font-semibold mt-4 mb-2">7.3 Newsletter and Communications</h3>
          <p>If you choose to subscribe to our newsletter or mailing list:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You provide your contact information voluntarily</li>
            <li>You may unsubscribe at any time using the link in any email</li>
            <li>Your information is handled as described in our Privacy Policy</li>
          </ul>
        </section>

        {/* 8. Third-Party Links and Resources */}
        <section aria-labelledby="links" className="glass-card p-6 rounded-xl">
          <h2 id="links" className="text-xl font-semibold mb-3">8. Third-Party Links and Resources</h2>
          <h3 className="font-semibold mt-4 mb-2">8.1 External Links</h3>
          <p>The Site may contain links to third-party websites, services, applications, or resources ("Third-Party Links"). These links are provided for convenience only.</p>
          
          <h3 className="font-semibold mt-4 mb-2">8.2 No Endorsement</h3>
          <p>Inclusion of Third-Party Links does not imply:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Endorsement, sponsorship, or approval of those sites or their content</li>
            <li>Any relationship between us and the operators of those sites</li>
            <li>Any responsibility for the accuracy, legality, or appropriateness of content on those sites</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">8.3 No Responsibility</h3>
          <p>We are not responsible or liable for:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The content, products, services, or practices of third-party sites</li>
            <li>Any damage, loss, or harm resulting from your use of or reliance on third-party sites</li>
            <li>The privacy practices or data security of third-party sites</li>
          </ul>
          <p className="mt-2">You access and use Third-Party Links at your own risk. We encourage you to read the terms and privacy policies of any third-party sites you visit.</p>
        </section>

        {/* 9. Disclaimers and Warranties */}
        <section aria-labelledby="disclaimers" className="glass-card p-6 rounded-xl">
          <h2 id="disclaimers" className="text-xl font-semibold mb-3">9. Disclaimers and Warranties</h2>
          <h3 className="font-semibold mt-4 mb-2">9.1 "As Is" and "As Available"</h3>
          <p className="uppercase font-semibold">The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.</p>
          
          <h3 className="font-semibold mt-4 mb-2">9.2 Disclaimer of Warranties</h3>
          <p className="uppercase font-semibold">To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
            <li>Warranties regarding the accuracy, reliability, completeness, or timeliness of Site content</li>
            <li>Warranties that the Site will be uninterrupted, secure, or error-free</li>
            <li>Warranties that defects will be corrected or that the Site is free of viruses or harmful components</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">9.3 No Professional Advice</h3>
          <p>Content on the Site is for informational purposes only and does not constitute:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Professional, legal, financial, tax, or technical advice</li>
            <li>A recommendation to purchase any product or service</li>
            <li>A substitute for consultation with qualified professionals</li>
          </ul>
          <p className="mt-2">You should not rely on Site content as the sole basis for any decision. Seek independent professional advice where appropriate.</p>
          
          <h3 className="font-semibold mt-4 mb-2">9.4 No Guarantee of Results</h3>
          <p>We make no guarantees, representations, or warranties regarding:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Results you may achieve from using the Site or information obtained from it</li>
            <li>The suitability of the Site for your specific needs or purposes</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">9.5 Jurisdictional Variations</h3>
          <p>Some jurisdictions do not allow the exclusion of certain warranties. In such jurisdictions, the above exclusions may not apply to you, and you may have additional rights.</p>
        </section>

        {/* 10. Limitation of Liability */}
        <section aria-labelledby="liability" className="glass-card p-6 rounded-xl">
          <h2 id="liability" className="text-xl font-semibold mb-3">10. Limitation of Liability</h2>
          <h3 className="font-semibold mt-4 mb-2">10.1 Exclusion of Damages</h3>
          <p className="uppercase font-semibold">To the maximum extent permitted by applicable law, in no event shall Innovative Vision X LLC (DBA Innovix Dynamix), its officers, directors, employees, agents, affiliates, partners, or licensors be liable for:</p>
          
          <p className="font-semibold mt-3">Indirect, Incidental, or Consequential Damages:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
            <li>Business interruption or loss of business opportunities</li>
            <li>Damage to reputation or loss of customers</li>
            <li>Cost of substitute goods or services</li>
            <li>Any indirect, incidental, special, consequential, exemplary, or punitive damages</li>
          </ul>
          
          <p className="font-semibold mt-3">Regardless of:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The theory of liability (contract, tort, negligence, strict liability, or otherwise)</li>
            <li>Whether we were advised or should have known of the possibility of such damages</li>
            <li>Whether damages were foreseeable</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">10.2 Cap on Direct Damages</h3>
          <p className="uppercase font-semibold">To the maximum extent permitted by law, our total aggregate liability for any claims arising from or related to your use of the Site shall not exceed one hundred dollars ($100.00 USD).</p>
          
          <h3 className="font-semibold mt-4 mb-2">10.3 Basis of the Bargain</h3>
          <p>You acknowledge that this limitation of liability is a fundamental element of the basis of the bargain between you and us, and that we would not provide the Site without these limitations.</p>
          
          <h3 className="font-semibold mt-4 mb-2">10.4 Jurisdictional Variations</h3>
          <p>Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.</p>
        </section>

        {/* 11. Indemnification */}
        <section aria-labelledby="indemnification" className="glass-card p-6 rounded-xl">
          <h2 id="indemnification" className="text-xl font-semibold mb-3">11. Indemnification</h2>
          <h3 className="font-semibold mt-4 mb-2">11.1 Your Indemnification Obligation</h3>
          <p>You agree to indemnify, defend, and hold harmless Innovative Vision X LLC (DBA Innovix Dynamix), and its officers, directors, employees, agents, affiliates, partners, and licensors (collectively, the "Indemnified Parties") from and against any and all:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Claims, demands, actions, or proceedings</li>
            <li>Liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees and court costs)</li>
          </ul>
          
          <p className="mt-3">Arising from or related to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your use or misuse of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your violation of any third-party rights, including intellectual property, privacy, or publicity rights</li>
            <li>Any information you submit through the Site</li>
            <li>Your negligence or willful misconduct</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">11.2 Defense and Settlement</h3>
          <p>We reserve the right, at our own expense, to assume the exclusive defense and control of any matter subject to indemnification by you. You will cooperate fully with us in asserting any available defenses.</p>
        </section>

        {/* 12. Data Security, Infrastructure, and Handling Commitments */}
        <section aria-labelledby="data-security" className="glass-card p-6 rounded-xl">
          <h2 id="data-security" className="text-xl font-semibold mb-3">12. Data Security, Infrastructure, and Handling Commitments</h2>
          
          <h3 className="font-semibold mt-4 mb-2">12.1 US-Only Data Storage and Processing</h3>
          <p>All data collected through this Site is stored, processed, and maintained exclusively on servers physically located within the United States. This is a binding contractual commitment.</p>
          <p className="mt-3">We categorically prohibit and will never:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Store data on foreign, overseas, or non-US servers</li>
            <li>Transfer data to any entity located outside the United States</li>
            <li>Use offshore development teams or international subcontractors with access to user data</li>
            <li>Process data through international cloud regions or data centers</li>
          </ul>
          <p className="mt-3">All service providers and subprocessors used in connection with this Site:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Must be US-based entities</li>
            <li>Must store all data exclusively on US infrastructure</li>
            <li>Are contractually prohibited from foreign data transfers</li>
            <li>Are subject to US jurisdiction and privacy laws</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.2 Federal-Grade Security Standards</h3>
          <p>We implement security controls that meet or exceed federal government standards for the protection of sensitive information:</p>
          
          <p className="font-semibold mt-3">Frameworks and Standards:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>NIST SP 800-53 (Security and Privacy Controls for Information Systems)</li>
            <li>FISMA (Federal Information Security Management Act) compliance principles</li>
            <li>HIPAA Security Rule technical, physical, and administrative safeguards</li>
            <li>FedRAMP (Federal Risk and Authorization Management Program) baseline controls</li>
          </ul>
          
          <p className="font-semibold mt-3">Security Measures Include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Encryption in transit (TLS 1.3) and at rest (AES-256 or equivalent)</li>
            <li>Multi-factor authentication (MFA) for all administrative access</li>
            <li>Role-based access controls (RBAC) and principle of least privilege</li>
            <li>Continuous security monitoring and threat detection</li>
            <li>Regular vulnerability scanning and penetration testing</li>
            <li>Intrusion detection systems (IDS) and intrusion prevention systems (IPS)</li>
            <li>SOC 2 Type II certified data center facilities with 24/7 physical security</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.3 Data Sensitivity Classification</h3>
          <p>We treat all personal information collected through this Site with the same level of protection and care as:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Personally Identifiable Information (PII) under federal standards</li>
            <li>Controlled Unclassified Information (CUI) as defined by NIST SP 800-171</li>
            <li>Sensitive But Unclassified (SBU) information</li>
            <li>Protected Health Information (PHI) under HIPAA standards (though we do not process actual PHI)</li>
          </ul>
          <p className="mt-2">This means your data receives the highest standard of protection used by federal agencies and contractors handling sensitive government information.</p>
          
          <h3 className="font-semibold mt-4 mb-2">12.4 Data Jurisdiction and Legal Protection</h3>
          <p>By maintaining US-only infrastructure:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your data remains under US legal jurisdiction exclusively</li>
            <li>Protected by US federal and state privacy laws (CCPA, VCDPA, etc.)</li>
            <li>Subject only to US law enforcement oversight through proper legal channels</li>
            <li>Not subject to foreign government data access requests or laws (e.g., GDPR Article 48, CLOUD Act limitations)</li>
            <li>Enhanced protection from international data breach exposure</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.5 No Foreign Access</h3>
          <p>We maintain strict controls to prevent foreign access to your data:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Personnel screening:</strong> Only US-based employees access user data</li>
            <li><strong>Vendor requirements:</strong> All service providers must be US entities</li>
            <li><strong>Contractual prohibitions:</strong> Service agreements explicitly forbid foreign data transfers or access</li>
            <li><strong>Technical controls:</strong> Geofencing and access controls prevent connections from foreign IP ranges to administrative systems</li>
            <li><strong>Monitoring:</strong> Continuous logging and alerting for any unauthorized access attempts</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.6 Alignment with Privacy Policy</h3>
          <p>Complete details of our data handling, retention, security practices, and user rights are provided in our <a className="story-link" href="/privacy">Privacy Policy</a>. By using this Site, you acknowledge that:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>You have read and understood our Privacy Policy</li>
            <li>You consent to the data practices described therein</li>
            <li>You understand that data handling is governed by both these Terms and the Privacy Policy</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.7 Security Limitations and User Responsibilities</h3>
          <p className="font-semibold">Our Commitment:</p>
          <p>While we implement comprehensive security measures meeting federal standards, we acknowledge that:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>No internet transmission is 100% secure</li>
            <li>No electronic storage system is completely immune to breach</li>
            <li>We cannot guarantee absolute security against all possible threats</li>
          </ul>
          
          <p className="font-semibold mt-3">Your Responsibilities:</p>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Maintaining the confidentiality of any credentials or information you create</li>
            <li>Using secure devices and networks when accessing the Site</li>
            <li>Immediately notifying us of any suspected unauthorized access or security concerns</li>
            <li>Taking reasonable precautions on your end to protect your information</li>
          </ul>
          
          <p className="font-semibold mt-3">Incident Response:</p>
          <p>In the event of a data security incident:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>We will investigate and contain the incident promptly</li>
            <li>We will notify affected users in accordance with applicable breach notification laws</li>
            <li>We will provide information about steps being taken to address the incident</li>
            <li>We will cooperate with law enforcement as appropriate</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">12.8 Competitive Advantage and Market Positioning</h3>
          <p>Our US-only data infrastructure and federal-grade security standards represent:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>A core business principle and competitive differentiator</li>
            <li>Not merely a legal compliance measure but a strategic commitment</li>
            <li>Industry leadership in data sovereignty and protection</li>
            <li>Enhanced trust for government contractors, enterprise clients, and privacy-conscious users</li>
          </ul>
          <p className="mt-3">This commitment will not change. Any future modification to our US-only storage policy would require:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Prominent advance notice to all users</li>
            <li>Explicit opt-in consent from existing users</li>
            <li>Updated Terms of Service with clear disclosure</li>
          </ul>
          <p className="mt-2">We have no plans to deviate from our US-only infrastructure commitment.</p>
        </section>

        {/* 13. Termination */}
        <section aria-labelledby="termination" className="glass-card p-6 rounded-xl">
          <h2 id="termination" className="text-xl font-semibold mb-3">13. Termination</h2>
          <h3 className="font-semibold mt-4 mb-2">13.1 Termination by You</h3>
          <p>You may stop using the Site at any time. If you wish to be removed from our mailing lists, follow the unsubscribe instructions in any email.</p>
          
          <h3 className="font-semibold mt-4 mb-2">13.2 Termination by Us</h3>
          <p>We reserve the right, in our sole discretion, to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Terminate or suspend your access to the Site immediately, without prior notice or liability</li>
            <li>Remove or disable any content you have submitted</li>
            <li>Take any other action we deem necessary or appropriate</li>
          </ul>
          
          <p className="mt-3">Grounds for termination include, but are not limited to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Violation of these Terms</li>
            <li>Fraudulent, abusive, or illegal activity</li>
            <li>Actions that harm or could harm us, other users, or third parties</li>
            <li>At our discretion for any reason or no reason</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">13.3 Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your right to use the Site immediately ceases</li>
            <li>Sections of these Terms that by their nature should survive (including but not limited to Sections 5, 9, 10, 11, 12, and 14) will survive termination</li>
            <li>We are not required to retain, return, or delete any information you submitted</li>
          </ul>
        </section>

        {/* 14. Dispute Resolution */}
        <section aria-labelledby="disputes" className="glass-card p-6 rounded-xl">
          <h2 id="disputes" className="text-xl font-semibold mb-3">14. Dispute Resolution</h2>
          <h3 className="font-semibold mt-4 mb-2">14.1 Informal Resolution</h3>
          <p>Before filing any legal claim, you agree to first contact us at jay.cadmus@innovixdynamix.com to attempt to resolve the dispute informally. Provide:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your name and contact information</li>
            <li>Description of the dispute</li>
            <li>Proposed resolution</li>
          </ul>
          <p className="mt-2">We will attempt to resolve the dispute through good faith negotiations for at least 30 days.</p>
          
          <h3 className="font-semibold mt-4 mb-2">14.2 Governing Law</h3>
          <p>These Terms and any dispute arising from or related to your use of the Site shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.</p>
          
          <h3 className="font-semibold mt-4 mb-2">14.3 Venue and Jurisdiction</h3>
          <p>You agree that any legal action or proceeding arising from or related to these Terms or your use of the Site shall be brought exclusively in the state or federal courts located in Seminole County, Florida. You irrevocably consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.</p>
          
          <h3 className="font-semibold mt-4 mb-2">14.4 Waiver of Class Actions</h3>
          <p className="uppercase font-semibold">To the maximum extent permitted by law, you agree that any dispute will be resolved on an individual basis and not as a class action, consolidated action, or representative action.</p>
          <p className="mt-2">You waive any right to participate in a class action lawsuit or class-wide arbitration against us.</p>
          
          <h3 className="font-semibold mt-4 mb-2">14.5 Time Limitation</h3>
          <p>You agree that any claim or cause of action arising from or related to your use of the Site must be filed within one (1) year after the claim or cause of action arose, or be forever barred.</p>
        </section>

        {/* 15. Changes to the Site and Terms */}
        <section aria-labelledby="changes" className="glass-card p-6 rounded-xl">
          <h2 id="changes" className="text-xl font-semibold mb-3">15. Changes to the Site and Terms</h2>
          <h3 className="font-semibold mt-4 mb-2">15.1 Modifications</h3>
          <p>We reserve the right, in our sole discretion, to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Modify, suspend, or discontinue the Site (or any part thereof) at any time, with or without notice</li>
            <li>Update or revise these Terms at any time</li>
            <li>Change the features, functionality, or content of the Site</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">15.2 Notice of Material Changes</h3>
          <p>If we make material changes to these Terms:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>We will update the "Last Updated" date at the top of this page</li>
            <li>We may provide additional notice (such as a prominent announcement on the Site or email notification to newsletter subscribers)</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">15.3 Effect of Continued Use</h3>
          <p>Your continued use of the Site after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Site.</p>
          
          <h3 className="font-semibold mt-4 mb-2">15.4 Version Archival</h3>
          <p>We recommend reviewing these Terms periodically. Previous versions of these Terms are not archived or made publicly available.</p>
        </section>

        {/* 16. General Provisions */}
        <section aria-labelledby="general" className="glass-card p-6 rounded-xl">
          <h2 id="general" className="text-xl font-semibold mb-3">16. General Provisions</h2>
          <h3 className="font-semibold mt-4 mb-2">16.1 Entire Agreement</h3>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding your use of the Site and supersede all prior agreements, understandings, and representations.</p>
          
          <h3 className="font-semibold mt-4 mb-2">16.2 Severability</h3>
          <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>That provision shall be modified to the minimum extent necessary to make it enforceable</li>
            <li>If modification is not possible, the provision shall be severed from these Terms</li>
            <li>The remaining provisions shall continue in full force and effect</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">16.3 Waiver</h3>
          <p>Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision. No waiver shall be effective unless made in writing and signed by an authorized representative of Innovix Dynamix.</p>
          
          <h3 className="font-semibold mt-4 mb-2">16.4 Assignment</h3>
          <p>You may not assign, transfer, or delegate these Terms or your rights and obligations without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this section is void.</p>
          
          <h3 className="font-semibold mt-4 mb-2">16.5 No Third-Party Beneficiaries</h3>
          <p>These Terms do not and are not intended to confer any rights or remedies upon any person other than you and us.</p>
          
          <h3 className="font-semibold mt-4 mb-2">16.6 Force Majeure</h3>
          <p>We shall not be liable for any failure or delay in performing our obligations under these Terms due to causes beyond our reasonable control, including but not limited to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Acts of God, natural disasters, or extreme weather</li>
            <li>War, terrorism, civil unrest, or government actions</li>
            <li>Labor disputes or strikes</li>
            <li>Internet or telecommunications failures</li>
            <li>Cyberattacks or security incidents</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">16.7 Headings</h3>
          <p>Section headings in these Terms are for convenience only and do not affect their interpretation.</p>
          
          <h3 className="font-semibold mt-4 mb-2">16.8 Relationship</h3>
          <p>Nothing in these Terms creates a partnership, joint venture, employment, agency, or franchise relationship between you and us.</p>
        </section>

        {/* 17. Contact Information */}
        <section aria-labelledby="contact" className="glass-card p-6 rounded-xl">
          <h2 id="contact" className="text-xl font-semibold mb-3">17. Contact Information</h2>
          <p>If you have any questions, concerns, or disputes regarding these Terms or the Site, please contact us:</p>
          <div className="mt-3 space-y-2">
            <p><strong>Innovative Vision X LLC (DBA Innovix Dynamix)</strong></p>
            <p><strong>Email:</strong> jay.cadmus@innovixdynamix.com</p>
            <p><strong>Contact Form:</strong> <a className="story-link" href="/contact">https://innovixdynamix.com/contact</a></p>
            <p><strong>Physical Address:</strong><br />
            953 Bentstation Ln #303<br />
            Lake Mary, FL 32746<br />
            United States</p>
            <p><strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM EST</p>
          </div>
        </section>

        {/* 18. Acknowledgment */}
        <section aria-labelledby="acknowledgment" className="glass-card p-6 rounded-xl">
          <h2 id="acknowledgment" className="text-xl font-semibold mb-3">18. Acknowledgment</h2>
          <p className="uppercase font-semibold mb-3">By using the Site, you acknowledge that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You have read and understood these Terms</li>
            <li>You agree to be bound by these Terms</li>
            <li>You have read and understood our Privacy Policy</li>
            <li>You are at least 18 years of age</li>
            <li>You have the legal capacity to enter into these Terms</li>
            <li>If using the Site on behalf of an entity, you have authority to bind that entity</li>
            <li>You understand and agree to our US-only data storage and federal-grade security commitments as described in Section 12</li>
          </ul>
          <p className="mt-4 text-center font-semibold">These Terms were last updated on October 7, 2025.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
