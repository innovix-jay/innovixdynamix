import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CalloutBanner: React.FC = () => {
  return (
    <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">See the products in action</h3>
        <p className="text-sm text-muted-foreground">Pick a path and explore a focused demo.</p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-2">
        <Button asChild data-cta="explore-jcal"><Link to="/jcal">Explore JCAL</Link></Button>
        <Button asChild variant="outline" data-cta="see-matalino"><Link to="/matalino">See Matalino</Link></Button>
      </div>
    </div>
  );
};

export default CalloutBanner;
