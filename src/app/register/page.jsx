'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterPage from '../../components/RegisterPage';
import { navItems } from '../../data/content';

export default function RegisterPageRoute() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Reset scroll position on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // 2. Cursor Glow Track
  useEffect(() => {
    const glow = document.getElementById('cursorGlow');
    if (!glow || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = null;
    const onMove = (event) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
        raf = null;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // 3. Scroll Progress and Header scroll state
  useEffect(() => {
    const scrollProgress = document.getElementById('scrollProgress');
    const updateScrollProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0;
      if (scrollProgress) scrollProgress.style.width = `${pct}%`;
      setIsScrolled(window.scrollY > 40);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // 4. Mobile Menu Overflow toggle
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // 5. Register Particles Animation Loop
  useEffect(() => {
    const canvas = document.getElementById('registerParticleCanvas');
    let animId;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const container = canvas.closest('.register-page');
      if (ctx && container) {
        let particles = [];
        let width, height;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const resize = () => {
          width = canvas.width = container.offsetWidth;
          height = canvas.height = container.offsetHeight;
        };

        const createParticles = () => {
          const count = Math.min(70, Math.floor((width * height) / 18000));
          particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.6 + 0.4,
            vy: Math.random() * 0.25 + 0.05,
            vx: (Math.random() - 0.5) * 0.15,
            alpha: Math.random() * 0.5 + 0.15
          }));
        };

        const draw = () => {
          ctx.clearRect(0, 0, width, height);
          particles.forEach(p => {
            p.y -= p.vy;
            p.x += p.vx;
            if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230,199,103,${p.alpha})`;
            ctx.fill();
          });
          animId = requestAnimationFrame(draw);
        };

        resize();
        createParticles();
        if (!reducedMotion) {
          draw();
        }

        window.addEventListener('resize', () => {
          resize();
          createParticles();
        });
      }
    }
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const handleBack = () => {
    router.push('/');
  };

  const handleAnchorClick = (event, href) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      setMenuOpen(false);
      router.push('/' + href);
    }
  };

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />

      <Header
        navItems={navItems}
        activeSection=""
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleAnchorClick={handleAnchorClick}
        onNavigateToRegister={() => {}}
      />

      <RegisterPage onBack={handleBack} />

      <Footer handleAnchorClick={handleAnchorClick} onNavigateToRegister={() => {}} />
    </>
  );
}
