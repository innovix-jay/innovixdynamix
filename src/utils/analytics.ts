export const initAnalytics = (debug = false) => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function(){ (window as any).dataLayer.push(arguments); };
  if (debug) console.info('[analytics] debug mode on');
};

export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  const qp = new URLSearchParams(window.location.search);
  const debug = qp.get('debug') === '1';
  if (debug) console.log('[analytics] event', name, params);
  (window as any).gtag?.('event', name, params);
};

export const setupGlobalAnalytics = (debug = false) => {
  // CTA clicks
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-cta]') as HTMLElement | null;
    if (target) {
      const label = target.getAttribute('data-cta') || 'unknown';
      trackEvent('cta_click', { label });
    }
  });

  // Outbound to product routes
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null;
    if (a && (a.getAttribute('href') === '/jcal' || a.getAttribute('href') === '/matalino')) {
      const dest = a.getAttribute('href')!.replace('/','');
      trackEvent('outbound_click', { destination: dest });
    }
  });

  // Scroll depth
  const thresholds = [25,50,75,100];
  const fired = new Set<number>();
  const onScroll = () => {
    const y = window.scrollY + window.innerHeight;
    const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const pct = Math.min(100, Math.round((y / h) * 100));
    thresholds.forEach(t => {
      if (pct >= t && !fired.has(t)) { fired.add(t); trackEvent('scroll_depth', { percent: t }); }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};
