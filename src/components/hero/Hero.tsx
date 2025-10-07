import React from "react";
// Aurora moved to global background
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { downloadCapabilitiesPDF } from "@/utils/capabilities-pdf";
import TrustBadges from "@/components/home/TrustBadges";
import trainingDashboard from "@/assets/training-dashboard-mockup.png";

const Hero: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section id="hero" className="relative overflow-hidden">
      
      <div className="container relative z-10 py-28 md:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="mt-5 text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight animate-fade-in">
              AI Training & Products That Move at Your Speed.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 animate-fade-in">
              Innovix Dynamix delivers expert AI enablement and production-ready solutions—from standards-aligned training programs to specialized products like JCAL and Matalino. We equip teams to adopt AI safely and productively, with guidance anchored in OMB M-24-10 and the NIST AI Risk Management Framework. Built for regulated environments and commercial teams ready to move fast.
            </p>
            <TrustBadges />
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
              <Button asChild size="lg" data-cta="request-discovery-call">
                <Link to="/contact" aria-label="Request a discovery call">Request a discovery call</Link>
              </Button>
              <Button asChild
                variant="outline" 
                size="lg" 
                data-cta="download-capabilities"
                aria-label="Download Capabilities Statement"
              >
                <Link to="/capabilities">Download Capabilities Statement</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Dashboard Mockup (Desktop only) */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-2 via-brand-1 to-brand-3 rounded-xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Dashboard image */}
              <div className="relative glass-card p-2 rounded-xl transform hover:scale-[1.02] transition-all duration-500">
                <img 
                  src={trainingDashboard} 
                  alt="AI Training Dashboard Interface showing role-based learning paths and progress tracking" 
                  className="rounded-lg w-full h-auto shadow-2xl"
                />
              </div>

              {/* Floating accent elements with more movement */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-1/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-3/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-brand-2/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
