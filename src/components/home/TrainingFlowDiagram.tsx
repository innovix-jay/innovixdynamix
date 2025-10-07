import React from "react";
import { UserCircle, BookOpen, Sparkles, TrendingUp } from "lucide-react";

const TrainingFlowDiagram: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Your AI Training Journey
        </h2>
        
        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-2 via-brand-1 to-brand-3 opacity-30 -translate-y-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-2 via-brand-1 to-brand-3 animate-pulse"></div>
          </div>
          
          {/* Flow steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            {/* Step 1: Discovery */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-2 to-brand-1 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative glass-card w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <UserCircle className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-xs text-muted-foreground">
                Role mapping & objectives alignment
              </p>
              <div className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Phase 1
              </div>
            </div>

            {/* Animated arrow for mobile */}
            <div className="flex justify-center md:hidden">
              <div className="h-8 w-0.5 bg-gradient-to-b from-brand-2 to-brand-1 animate-pulse"></div>
            </div>

            {/* Step 2: Setup */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-1 to-brand-2 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="relative glass-card w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Setup</h3>
              <p className="text-xs text-muted-foreground">
                Configuration & user provisioning
              </p>
              <div className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Phase 1
              </div>
            </div>

            {/* Animated arrow for mobile */}
            <div className="flex justify-center md:hidden">
              <div className="h-8 w-0.5 bg-gradient-to-b from-brand-1 to-brand-3 animate-pulse"></div>
            </div>

            {/* Step 3: Training */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-2 to-brand-3 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="relative glass-card w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">AI Enablement</h3>
              <p className="text-xs text-muted-foreground">
                Role-based learning & prompt engineering
              </p>
              <div className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Phase 2
              </div>
            </div>

            {/* Animated arrow for mobile */}
            <div className="flex justify-center md:hidden">
              <div className="h-8 w-0.5 bg-gradient-to-b from-brand-3 to-brand-1 animate-pulse"></div>
            </div>

            {/* Step 4: Results */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-3 to-brand-1 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="relative glass-card w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Measurable Results</h3>
              <p className="text-xs text-muted-foreground">
                Monthly metrics & ongoing support
              </p>
              <div className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Ongoing
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            From discovery to deployment with speed
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingFlowDiagram;
