import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CalloutBanner: React.FC = () => {
  return (
    <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">Two products. One mission. Build and ship faster.</h3>
      </div>
      <div className="mt-4 md:mt-0 flex gap-2">
        <Button asChild data-cta="see-jcal"><Link to="/jcal" aria-label="See JCAL.ai">See JCAL.ai</Link></Button>
        <Button asChild variant="outline" data-cta="see-matalino"><Link to="/matalino" aria-label="See Matalino">See Matalino</Link></Button>
      </div>
    </div>
  );
};

export default CalloutBanner;
