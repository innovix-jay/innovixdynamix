import React from "react";
import { Shield, Globe, Award, Zap } from "lucide-react";

const TrustBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center mt-6">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
        <Award className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium">Service-Disabled Veteran-Owned Small Business</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
        <Shield className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium">US-Only Infrastructure | Zero Foreign Access</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
        <Globe className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium">OMB M-24-10 & NIST AI RMF Aligned</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
        <Zap className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium">Rapid Deployment | Production-Ready in 1-3 Weeks</span>
      </div>
    </div>
  );
};

export default TrustBadges;
