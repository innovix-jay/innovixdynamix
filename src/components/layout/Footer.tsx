import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { downloadCapabilitiesPDF } from "@/utils/capabilities-pdf";

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <footer id="ftr" className="border-t bg-background" {...props}>
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BrandLogo src={["/lovable-uploads/22eb7bdf-ddea-4ea0-af45-54ebbe7df6f9.png","/lovable-uploads/innovix-logo.png","/lovable-uploads/innovix-logo.jpg","/lovable-uploads/innovix.svg","/lovable-uploads/innovix.png","/lovable-uploads/innovix.jpg"]} alt="Innovix logo" className="h-6 w-auto" />
          </h3>
          <p className="text-sm text-muted-foreground mt-2">Focused AI tools that make operations faster, clearer, and more reliable.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link className="story-link" to="/about">About</Link></li>
            <li><Link className="story-link" to="/resources">Resources</Link></li>
            <li><Link className="story-link" to="/contact">Contact</Link></li>
            <li><Link className="story-link" to="/capabilities">Capabilities Statement</Link></li>
            <li>
              <button 
                onClick={() => downloadCapabilitiesPDF()} 
                className="story-link text-left"
              >
                Capabilities Statement (PDF)
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Products</h4>
          <ul className="space-y-1 text-sm">
            <li><Link className="story-link" to="/jcal">JCAL</Link></li>
            <li><Link className="story-link" to="/matalino">Matalino</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Innovix LLC</div>
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
