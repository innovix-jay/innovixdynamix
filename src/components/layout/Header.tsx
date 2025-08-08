import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/common/BrandLogo";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

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
          <BrandLogo src={["/lovable-uploads/22eb7bdf-ddea-4ea0-af45-54ebbe7df6f9.png", "/lovable-uploads/innovix-logo.png","/lovable-uploads/innovix-logo.jpg","/lovable-uploads/innovix.svg","/lovable-uploads/innovix.png","/lovable-uploads/innovix.jpg"]} alt="Innovix logo" className="h-6 w-auto" eager />
        </Link>
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          <NavLink to="/" end className={linkCls}>Home</NavLink>
          <NavLink to="/products" className={linkCls}>Products</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          <Button asChild size="sm" className="ml-2" data-cta="explore-jcal">
            <Link to="/jcal">Explore JCAL</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="ml-1" data-cta="see-matalino">
            <Link to="/matalino">See Matalino</Link>
          </Button>
          <Link to="/" aria-label="Innovix home" className="ml-3 hidden md:block">
            <BrandLogo src={["/lovable-uploads/72554a38-f8c3-4d22-a0ba-0a7fd173f7be.png"]} alt="Innovix logo mark" className="h-6 w-auto" />
          </Link>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild><Link to="/">Home</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/products">Products</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/about">About</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/contact">Contact</Link></DropdownMenuItem>
              <div className="px-2 py-1.5">
                <Button asChild className="w-full mb-2" data-cta="explore-jcal"><Link to="/jcal">Explore JCAL</Link></Button>
                <Button asChild variant="outline" className="w-full" data-cta="see-matalino"><Link to="/matalino">See Matalino</Link></Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
