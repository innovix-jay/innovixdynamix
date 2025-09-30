import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CalloutBanner: React.FC = () => {
  return (
    <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-semibold">One mission. We build. We train. We ship fast.</h3>
      </div>
      <div className="mt-4 md:mt-0 flex flex-wrap gap-2 justify-center md:justify-end">
        <Button asChild data-cta="explore-jcal"><Link to="/jcal" aria-label="Explore JCAL.ai">Explore JCAL.ai</Link></Button>
        <Button asChild variant="outline" data-cta="explore-matalino"><Link to="/matalino" aria-label="Explore Matalino">Explore Matalino</Link></Button>
        <Button asChild variant="outline" data-cta="view-capabilities"><Link to="/capabilities" aria-label="View Capabilities Statement">Capabilities Statement</Link></Button>
        <Button asChild variant="outline" data-cta="contact-us"><Link to="/contact" aria-label="Contact us">Contact</Link></Button>
      </div>
    </div>
  );
};

export default CalloutBanner;
