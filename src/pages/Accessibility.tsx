import React from "react";
import { Helmet } from "react-helmet-async";

const Accessibility: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/accessibility` : 'https://www.innovixdynamix.com/accessibility';
  
  return (
    <div className="container py-16">
      <Helmet>
        <title>Accessibility Statement | Innovix Dynamix</title>
        <meta name="description" content="Our commitment to making our digital services accessible to people with disabilities. Learn about our conformance status, features, and known limitations." />
        <link rel="canonical" href={canonical} />
        <meta property="og:image" content="/assets/share.jpg" />
      </Helmet>

      <header className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
        <p className="text-lg text-muted-foreground">Last Updated: October 7, 2025</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-6">
        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
          <p className="text-muted-foreground leading-relaxed">
            Innovative Vision X LLC, operating as Innovix Dynamix (including our products JCAL and Matalino), is committed to making our digital services accessible to people with disabilities. We strive to provide equal access to all users to the best of our ability.
          </p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
          <p className="mb-3"><strong className="text-primary">Current Status:</strong> Partially conformant with WCAG 2.1 Level AA</p>
          <p className="text-muted-foreground leading-relaxed">
            "Partially conformant" means that some portions of the content do not fully conform to the accessibility standard. We have implemented accessibility features where feasible within our platform capabilities, but recognize there are areas that could be improved.
          </p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">How Our Sites Are Built</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our websites and products are built using modern low-code/no-code development platforms and frameworks. While these platforms provide built-in accessibility features, we acknowledge that they may not cover all accessibility scenarios.
          </p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Accessibility Features We've Implemented</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-3">Visual Accessibility</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High contrast design elements</li>
                <li>Scalable text that works with browser zoom</li>
                <li>Responsive design for various screen sizes</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-3">Keyboard Navigation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keyboard accessibility for navigation and interactive elements</li>
                <li>Visible focus indicators on clickable items</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-3">Screen Reader Support</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Semantic HTML structure where supported by our platforms</li>
                <li>Alternative text for meaningful images</li>
                <li>Proper form labels</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-3">Content</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Clear, straightforward language</li>
                <li>Descriptive link text</li>
                <li>Logical page structure</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
          <p className="text-muted-foreground mb-6">We want to be transparent about areas where accessibility may be limited:</p>
          
          <div className="space-y-6">
            <div className="bg-background/50 p-5 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">AI Chat Interfaces (JCAL, Matalino)</h3>
              <p className="text-muted-foreground">Dynamic content generated by AI may not be immediately accessible to screen readers. Content becomes accessible once generation completes.</p>
            </div>

            <div className="bg-background/50 p-5 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Code Editor (JCAL)</h3>
              <p className="text-muted-foreground">The code editing interface may have limited screen reader support due to its complexity. A simpler text editing option may be available.</p>
            </div>

            <div className="bg-background/50 p-5 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">File Uploads</h3>
              <p className="text-muted-foreground">Drag-and-drop functionality may not be fully keyboard accessible. Click-to-upload buttons are provided as an alternative.</p>
            </div>

            <div className="bg-background/50 p-5 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Third-Party Services</h3>
              <p className="text-muted-foreground">Payment processing, authentication, and other integrated services are provided by third-party vendors and may have their own accessibility limitations.</p>
            </div>

            <div className="bg-background/50 p-5 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Platform Constraints</h3>
              <p className="text-muted-foreground">As we use low-code/no-code platforms to build our products, some accessibility features are dependent on those platforms' built-in capabilities.</p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Browser and Technology Compatibility</h2>
          <p className="text-muted-foreground mb-4">Our sites work best with current versions of:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
              <p className="font-semibold">Google Chrome</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
              <p className="font-semibold">Mozilla Firefox</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
              <p className="font-semibold">Apple Safari</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-center">
              <p className="font-semibold">Microsoft Edge</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-2">We recommend using the latest version of your browser and operating system for the best experience.</p>
          <p className="text-muted-foreground">Our sites require JavaScript to be enabled for full functionality.</p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Feedback</h2>
          <p className="text-muted-foreground mb-6">If you encounter accessibility barriers or have difficulty accessing any part of our sites or products, please let us know:</p>
          
          <div className="bg-background/50 p-6 rounded-lg border border-border/50 space-y-3 mb-6">
            <p><strong>Email:</strong> <a href="mailto:jay.cadmus@innovixdynamix.com" className="story-link text-primary">jay.cadmus@innovixdynamix.com</a></p>
            <p><strong>Contact Form:</strong> <a href="https://innovixdynamix.com/contact" className="story-link text-primary">https://innovixdynamix.com/contact</a></p>
            <div>
              <p className="font-semibold mb-1">Mail:</p>
              <p className="text-muted-foreground">Innovative Vision X LLC<br />
              953 Bentstation Ln #303<br />
              Lake Mary, FL 32746</p>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-3">When reporting an issue, please include:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The URL or page where you encountered difficulty</li>
            <li>A description of the problem</li>
            <li>The browser and assistive technology you're using (if applicable)</li>
          </ul>
          <p className="text-muted-foreground mt-4">We'll do our best to address accessibility concerns as resources allow.</p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground mb-4">We approach accessibility as:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Testing keyboard navigation on key user flows</li>
            <li>Reviewing color contrast and text sizing</li>
            <li>Checking that form fields have labels</li>
            <li>Ensuring images have alternative text where needed</li>
            <li>Making improvements when we become aware of issues</li>
          </ul>
          <p className="text-muted-foreground">We're a small business doing our best to accommodate users with disabilities within the constraints of our development platforms and resources.</p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">VPAT Availability</h2>
          <p className="text-muted-foreground">We do not currently maintain a Voluntary Product Accessibility Template (VPAT). If formal accessibility documentation becomes necessary for government or enterprise requirements, we will evaluate creating one at that time.</p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Updates to This Statement</h2>
          <p className="text-muted-foreground">This statement will be updated when we make significant changes to our accessibility features or become aware of important limitations.</p>
        </section>

        <section className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <p className="text-muted-foreground mb-4">For more information about web accessibility:</p>
          <div className="space-y-3">
            <div className="bg-background/50 p-4 rounded-lg border border-border/50">
              <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="story-link text-primary font-semibold" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-border/50">
              <a href="https://webaim.org/" className="story-link text-primary font-semibold" target="_blank" rel="noopener noreferrer">WebAIM (Web Accessibility In Mind)</a>
            </div>
          </div>
        </section>

        <footer className="glass-card p-8 rounded-xl text-center">
          <p className="text-muted-foreground italic">We appreciate your patience as we continue working to improve accessibility across our digital properties.</p>
        </footer>
      </div>
    </div>
  );
};

export default Accessibility;
