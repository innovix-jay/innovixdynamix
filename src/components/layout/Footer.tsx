import React from "react";
import { Link } from "react-router-dom";
import { downloadCapabilitiesPDF } from "@/utils/capabilities-pdf";
import innovixDynamixLogo from "@/assets/innovix-dynamix-logo.png";

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <footer id="ftr" className="border-t bg-background" {...props}>
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <img src={innovixDynamixLogo} alt="Innovix Dynamix logo" className="h-10 w-auto" />
          </h3>
          <p className="text-sm text-muted-foreground mt-2">Production-ready AI solutions built for teams that ship. Veteran-owned. US-only infrastructure.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link className="story-link" to="/about">About</Link></li>
            <li><Link className="story-link" to="/resources">Resources</Link></li>
            <li><Link className="story-link" to="/contact">Contact</Link></li>
            <li><Link className="story-link" to="/capabilities">Capabilities Statement</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Products</h4>
          <ul className="space-y-1 text-sm">
            <li><Link className="story-link" to="/training">AI Training</Link></li>
            <li><Link className="story-link" to="/jcal">JCAL</Link></li>
            <li><Link className="story-link" to="/matalino">Matalino</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Innovative Vision X LLC, operating as Innovix Dynamix</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
