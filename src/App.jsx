import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import FacilitiesSection from './components/FacilitiesSection';
import WorkflowSection from './components/WorkflowSection';
import GallerySection from './components/GallerySection';
import StatsSection from './components/StatsSection';
import WhyJoinSection from './components/WhyJoinSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import { aboutCards, featureCards, facilities, galleryItems, heroImage, navItems, stats, workflowSteps, whyJoinCards } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const carouselTrackRef = useRef(null);

  const heroImg = useMemo(() => heroImage, []);

  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const scrollProgress = document.getElementById('scrollProgress');
    const updateScrollProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0;
      if (scrollProgress) scrollProgress.style.width = `${pct}%`;
      setIsScrolled(window.scrollY > 40);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealItems = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const parentChildren = Array.from(el.parentElement ? el.parentElement.children : []);
            const delayIndex = parentChildren.indexOf(el);
            const delay = Math.min(delayIndex, 6) * 70;
            setTimeout(() => el.classList.add('is-visible'), delay);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = Number(el.getAttribute('data-count')) || 0;
            const duration = 1600;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              el.textContent = Math.floor(target * eased).toLocaleString();
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target.toLocaleString();
            };
            requestAnimationFrame(step);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));

    const timeline = document.querySelector('.timeline');
    const timelineFill = document.getElementById('timelineFill');
    const timelineSteps = document.querySelectorAll('.timeline__step');

    const updateTimeline = () => {
      if (!timeline || !timelineFill) return;
      const rect = timeline.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height;
      const progressPx = Math.max(0, Math.min(viewportH * 0.75 - rect.top, total));
      const pct = total > 0 ? (progressPx / total) * 100 : 0;
      timelineFill.style.height = `${pct}%`;

      timelineSteps.forEach((step) => {
        const r = step.getBoundingClientRect();
        if (r.top < viewportH * 0.8) step.classList.add('is-visible');
      });
    };

    updateTimeline();
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
      sectionObserver.disconnect();
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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

  const handleAnchorClick = (event, href) => {
    if (!href.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight + 1;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollCarousel = (direction) => {
    if (carouselTrackRef.current) {
      carouselTrackRef.current.scrollBy({ left: direction * 320, behavior: 'smooth' });
    }
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const goToRegister = () => {
    setCurrentView('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'register') {
    return (
      <>
        <div className="scroll-progress" id="scrollProgress" />
        <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
        <RegisterPage onBack={goToHome} />
      </>
    );
  }

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />

      <Header navItems={navItems} activeSection={activeSection} isScrolled={isScrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleAnchorClick={handleAnchorClick} onNavigateToRegister={goToRegister} />
      <HeroSection heroImage={heroImg} handleAnchorClick={handleAnchorClick} onNavigateToRegister={goToRegister} />
      <AboutSection aboutCards={aboutCards} />
      <FeaturesSection featureCards={featureCards} />
      <FacilitiesSection facilities={facilities} scrollCarousel={scrollCarousel} />
      <WorkflowSection workflowSteps={workflowSteps} />
      <GallerySection galleryItems={galleryItems} openLightbox={openLightbox} />
      {lightboxOpen && (
        <div className="lightbox is-open" aria-hidden="false">
          <button className="lightbox__close" aria-label="Close gallery image" onClick={() => setLightboxOpen(false)}><i className="fa-solid fa-xmark" /></button>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={() => setCurrentImage((value) => (value + galleryItems.length - 1) % galleryItems.length)}><i className="fa-solid fa-chevron-left" /></button>
          <img src={`https://picsum.photos/seed/${galleryItems[currentImage].seed}/1200/900`} alt={galleryItems[currentImage].caption} className="lightbox__img" />
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={() => setCurrentImage((value) => (value + 1) % galleryItems.length)}><i className="fa-solid fa-chevron-right" /></button>
          <div className="lightbox__caption">{galleryItems[currentImage].caption}</div>
        </div>
      )}
      <StatsSection stats={stats} />
      <WhyJoinSection whyJoinCards={whyJoinCards} />
      <ContactSection />
      <Footer handleAnchorClick={handleAnchorClick} />
    </>
  );
}

export default App;
