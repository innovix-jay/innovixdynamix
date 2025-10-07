import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import innovixEmblem from "@/assets/innovix-emblem.png";

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
        <Link to="/" className="font-semibold tracking-tight hover-scale" aria-label="Innovix Dynamix home">
          <img src={innovixEmblem} alt="Innovix Dynamix emblem" className="h-16 w-auto" />
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
