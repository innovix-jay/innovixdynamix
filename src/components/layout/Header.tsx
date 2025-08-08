import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const [compressed, setCompressed] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 2) {
        setCompressed(y > 8);
        last = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-ring",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header
      aria-label="Main navigation"
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[height,padding]",
        compressed ? "h-12" : "h-16",
        className
      )}
      {...props}
    >
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight hover-scale" aria-label="Innovix home">
          Innovix
        </Link>
        <nav className="flex items-center gap-1" aria-label="Primary">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <NavLink to="/products" className={linkCls}>Products</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/resources" className={linkCls}>Resources</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          <Button asChild size="sm" className="ml-2" data-cta="explore-jcal">
            <Link to="/jcal">Explore JCAL</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="ml-1" data-cta="see-matalino">
            <Link to="/matalino">See Matalino</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
