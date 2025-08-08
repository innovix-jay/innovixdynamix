import React, { useEffect, useRef, useState } from "react";

const PALETTE = ["#4CC9F0", "#F72585", "#FF8A00"]; // accent colors

const CONFIG = {
  variant: 'lattice' as const,
  intensity: 0.6, // medium
  parallax: true,
  palette: PALETTE,
};

function hexToHsla(hex: string, alpha = 1) {
  // simple hex to hsla parser
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return `hsla(${(h*360).toFixed(1)}, ${(s*100).toFixed(1)}%, ${(l*100).toFixed(1)}%, ${alpha})`;
}

const prefersReduced = () => globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const shouldDisableAnim = () => {
  const qp = new URLSearchParams(window.location.search);
  if (qp.get('anim') === 'off') return true;
  if (document.body.dataset.anim === 'off') return true;
  return prefersReduced();
};

const HeroMotionLattice: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [debug, setDebug] = useState(false);
  const [active, setActive] = useState(false);

  // Effect 1: set debug + decide activation only
  useEffect(() => {
    const qp = new URLSearchParams(window.location.search);
    setDebug(qp.get('anim') === 'debug');
    if (shouldDisableAnim()) return; // respect reduced motion / toggles
    setActive(true);
  }, []);

  // Effect 2: initialize canvas only when mounted & active
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return; // wait for mount
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // environment without 2d ctx

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const points: {x:number;y:number;ox:number;oy:number;z:number;}[] = [];
    const createPoints = () => {
      points.length = 0;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const spacing = 42; // tuned for perf
      for (let y = -spacing; y < h + spacing; y += spacing) {
        for (let x = -spacing; x < w + spacing; x += spacing) {
          const jitter = (n:number)=> (Math.random()-0.5)*n;
          points.push({ x: x + jitter(8), y: y + jitter(8), ox: x, oy: y, z: Math.random() });
        }
      }
    };

    let mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMouse, { passive: true });

    let running = true;
    let raf = 0;
    let last = performance.now();
    let fps = 60;

    const near = 80, far = 150; // link distance in px
    const palette = CONFIG.palette.slice();
    const intensity = CONFIG.intensity;

    const tick = (t:number) => {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min(32, now - last);
      last = now;
      fps = fps * 0.9 + (1000 / (dt||16)) * 0.1;
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0,0,w,h);
      // base bg near-black
      ctx.fillStyle = hexToHsla('#0B0B0C', 1);
      ctx.fillRect(0,0,w,h);

      // parallax strength and depth-based motion
      const baseParallax = CONFIG.parallax ? 28 * intensity : 0;

      // animate points with gentle drift using sin noise and depth
      for (const p of points) {
        const s = 0.6 + p.z * 0.8; // depth scale
        const n = Math.sin((p.ox + now*0.02)*0.002) + Math.cos((p.oy + now*0.018)*0.002);
        const amp = 6 + 16*intensity*s;
        const px = (mouse.x - w/2) * 0.002 * baseParallax * s;
        const py = (mouse.y - h/2) * 0.002 * baseParallax * s;
        p.x = p.ox + n*amp + px;
        p.y = p.oy + n*amp + py;
      }

      // draw links with depth cues
      for (let i=0;i<points.length;i++){
        const a = points[i];
        for (let j=i+1;j<i+8 && j<points.length;j++){
          const b = points[j];
          const dx=a.x-b.x, dy=a.y-b.y; const d=Math.hypot(dx,dy);
          if (d<far){
            const t = (d - near) / (far - near);
            if (t<=1){
              const zmix = (a.z + b.z) * 0.5;
              const color = palette[(i+j)%palette.length];
              const alpha = Math.max(0, 1 - Math.max(0,t)) * (0.35 + zmix*0.65);
              const width = Math.max(0.4, 0.5 + zmix*1.2 - Math.max(0,t) * 0.8);
              ctx.strokeStyle = hexToHsla(color, alpha*0.8);
              ctx.lineWidth = width;
              ctx.shadowColor = hexToHsla(color, 0.15 * zmix);
              ctx.shadowBlur = 6 * zmix;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // draw nodes
      for (const p of points){
        const color = palette[(Math.floor(p.x+p.y))%palette.length];
        ctx.fillStyle = hexToHsla(color, 0.8);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI*2);
        ctx.fill();
      }

      if (debug) {
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = '12px system-ui, -apple-system, Segoe UI, Roboto';
        const mem = (performance as any).memory?.usedJSHeapSize || 0;
        const mb = mem ? (mem/1048576).toFixed(1)+' MB' : 'n/a';
        ctx.fillText(`FPS: ${fps.toFixed(0)}  MEM: ${mb}`, 12, 20);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    }, { threshold: 0.01 });

    const init = () => {
      resize();
      createPoints();
      io.observe(canvas);
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); resize(); createPoints(); };
    window.addEventListener('resize', onResize);
    init();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse as any);
      io.disconnect();
    };
  }, [active]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
      {active ? (
        <canvas ref={canvasRef} className="w-full h-full" />
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-background to-muted/20" />
      )}
    </div>
  );
};

export default HeroMotionLattice;
