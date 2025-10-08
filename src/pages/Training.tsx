import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, CheckCircle, FileText, TrendingUp } from "lucide-react";

const Training: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/training` : 
    'https://www.innovixdynamix.com/training';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Training for Government & Enterprise | Innovix Dynamix</title>
        <meta name="description" content="Professional AI training and enablement for government contractors and enterprise teams. Standards-aligned with OMB M-24-10 & NIST AI RMF. Role-based learning, workflow automation, and prompt engineering. Deployment in 1-3 weeks." />
        <meta name="keywords" content="AI training, government AI training, enterprise AI enablement, OMB M-24-10 compliance, NIST AI RMF training, federal AI contracts, AI workflow automation training, prompt engineering, cybersecurity AI training, government contractor training, federal staffing contracts" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content="AI Training for Government & Enterprise | Innovix Dynamix" />
        <meta property="og:description" content="Professional AI training portal for government and enterprise. OMB M-24-10 & NIST AI RMF aligned. Ready in 1-3 weeks." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Training for Government & Enterprise" />
        <meta name="twitter:description" content="Standards-aligned AI training for government contractors and enterprise teams. Deployment in 1-3 weeks." />
        <meta name="twitter:image" content="https://www.innovixdynamix.com/assets/share.jpg" />
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Training & Enablement",
          "description": "Standards-aligned AI training portal for government and enterprise teams with role-based learning paths",
          "provider": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
          },
          "areaServed": "US",
          "audience": {
            "@type": "Audience",
            "audienceType": [
              "Government Contractors",
              "Enterprise IT Teams",
              "Cybersecurity Professionals",
              "Federal Agencies"
            ]
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "description": "Hosted AI training portal with role-based learning, standards compliance, and rapid deployment"
          },
          "serviceType": "AI Training",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Training Features",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hosted Training Portal",
                  "description": "No infrastructure required, fully managed hosting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Role-Based Learning Paths",
                  "description": "Tailored training for cybersecurity, project management, IT support, and engineering roles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Standards Compliance",
                  "description": "Aligned to OMB M-24-10 and NIST AI RMF specifications"
                }
              }
            ]
          }
        })}</script>
        
        {/* Structured Data - Course */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AI Training & Enablement for Government and Enterprise",
          "description": "Comprehensive AI training covering prompt engineering, workflow automation, and safe AI adoption",
          "provider": {
            "@type": "Organization",
            "name": "Innovix Dynamix LLC"
          },
          "educationalLevel": "Professional",
          "coursePrerequisites": "IT or cybersecurity role in government or enterprise organization",
          "availableLanguage": "en",
          "isAccessibleForFree": false,
          "teaches": [
            "Prompt Engineering",
            "AI Workflow Automation",
            "Safe AI Adoption",
            "OMB M-24-10 Compliance",
            "NIST AI RMF Implementation"
          ]
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight max-w-4xl leading-tight">
          AI Training & Enablement for Government and Enterprise Teams
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl">
          Standards-aligned training portal that equips IT and cybersecurity personnel with practical AI skills. Hosted, secure, and ready in 1-3 weeks.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" data-cta="request-partnership-training-hero">
            <Link to="/contact?inquiry=partnership" aria-label="Request partnership discussion">Request Partnership Discussion</Link>
          </Button>
          <Button asChild variant="outline" size="lg" data-cta="download-capabilities-training-hero">
            <Link to="/capabilities" aria-label="Download Capabilities Statement">Download Capabilities Statement</Link>
          </Button>
        </div>
      </section>

      {/* What's Included */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What's Included</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <div className="glass-card p-6">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Hosted Training Portal</h3>
            <p className="text-sm text-muted-foreground">No infrastructure required from your team. We handle hosting, updates, and maintenance.</p>
          </div>
          <div className="glass-card p-6">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Role-Based Learning Paths</h3>
            <p className="text-sm text-muted-foreground">Tailored training for cybersecurity analysts, project managers, IT support, and engineers.</p>
          </div>
          <div className="glass-card p-6">
            <Zap className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Practical Prompt Engineering</h3>
            <p className="text-sm text-muted-foreground">Real-world patterns and techniques your team can apply immediately.</p>
          </div>
          <div className="glass-card p-6">
            <CheckCircle className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Section 508 Accessible</h3>
            <p className="text-sm text-muted-foreground">Fully compliant with federal accessibility standards.</p>
          </div>
          <div className="glass-card p-6">
            <TrendingUp className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Monthly Reporting</h3>
            <p className="text-sm text-muted-foreground">Compliance scoring and adoption metrics delivered monthly.</p>
          </div>
          <div className="glass-card p-6">
            <FileText className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Standards Aligned</h3>
            <p className="text-sm text-muted-foreground">Built to OMB M-24-10 and NIST AI RMF specifications.</p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Who It's For</h2>
        <div className="grid gap-4 md:grid-cols-2 mt-6 max-w-4xl">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-semibold mb-1">Government Contractors</h3>
            <p className="text-sm text-muted-foreground">Pursuing federal IT staffing contracts and need AI-ready personnel.</p>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-semibold mb-1">Prime Contractors</h3>
            <p className="text-sm text-muted-foreground">Seeking AI differentiators for RFPs and teaming opportunities.</p>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-semibold mb-1">Enterprise IT Teams</h3>
            <p className="text-sm text-muted-foreground">Adopting AI safely across technical and operational roles.</p>
          </div>
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-semibold mb-1">Regulated Industries</h3>
            <p className="text-sm text-muted-foreground">Organizations requiring standards-aligned AI adoption.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Our engagement approach is straightforward and fast:</p>
        <div className="mt-6 space-y-4 max-w-3xl">
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">1</div>
              <div>
                <h3 className="font-semibold mb-1">Discovery & Kickoff</h3>
                <p className="text-sm text-muted-foreground">SOW review, roster and role mapping. We align on objectives and timeline.</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">2</div>
              <div>
                <h3 className="font-semibold mb-1">Hosted Setup (Week 1)</h3>
                <p className="text-sm text-muted-foreground">Portal configuration, user provisioning, and initial access granted.</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">3</div>
              <div>
                <h3 className="font-semibold mb-1">Onboarding Sprint (Weeks 1-2)</h3>
                <p className="text-sm text-muted-foreground">Baseline training, role-specific resources, and initial check-ins.</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">4</div>
              <div>
                <h3 className="font-semibold mb-1">Ongoing Delivery</h3>
                <p className="text-sm text-muted-foreground">Monthly metrics, quarterly updates, and dedicated help channel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Security */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Standards & Security</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">OMB M-24-10 Aligned</p>
          </div>
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">NIST AI RMF Integrated</p>
          </div>
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">US-Only Infrastructure</p>
          </div>
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">Federal-Grade Security</p>
          </div>
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">NIST, FISMA, HIPAA-Equivalent</p>
          </div>
          <div className="glass-card p-4">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">Zero Foreign Access</p>
          </div>
        </div>
      </section>

      {/* Perfect for Teaming */}
      <section className="container py-12">
        <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Perfect for Teaming</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Integrate as a subcontractor on federal contracts. Add "AI-trained FTEs" to your proposals without additional agency burden.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Integrate as subcontractor</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">1-3 week deployment</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">No agency infrastructure required</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Measurable outcomes & reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Ready to Discuss Partnership?</h2>
          <p className="text-muted-foreground mt-3">
            Let's talk about how we can support your team or integrate into your next RFP.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" data-cta="request-partnership-training-bottom">
              <Link to="/contact?inquiry=partnership" aria-label="Request partnership discussion">Request Partnership Discussion</Link>
            </Button>
            <Button asChild variant="outline" size="lg" data-cta="download-capabilities-training-bottom">
              <Link to="/capabilities" aria-label="Download Capabilities Statement">Download Capabilities Statement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
