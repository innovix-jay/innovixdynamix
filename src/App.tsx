import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Jcal from "./pages/Jcal";
import Matalino from "./pages/Matalino";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroAurora from "./components/hero/HeroAurora";

import { initAnalytics, setupGlobalAnalytics } from "./utils/analytics";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AnalyticsHead = () => (
  <Helmet>
    {/* GA4 placeholder */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
    <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX', { 'anonymize_ip': true });
    `}</script>
    {/* Search Console verification placeholder */}
    <meta name="google-site-verification" content="verify-innovix" />
  </Helmet>
);

const AppShell = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    const params = new URLSearchParams(window.location.search);
    const debug = params.get('debug') === '1';
    initAnalytics(debug);
    setupGlobalAnalytics(debug);
  }, []);

  return (
    <div className="min-h-screen text-foreground relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <HeroAurora />
      </div>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md z-50">Skip to content</a>
      <Header id="hdr" />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/jcal" element={<Jcal />} />
          <Route path="/matalino" element={<Matalino />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer id="ftr" />
      
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <AnalyticsHead />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppShell />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
