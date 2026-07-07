/* ==========================================================================
   AICTE IDEA LAB CLUB — script.js
   Vanilla JS only. No dependencies.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initSmoothAnchors();
  initCursorGlow();
  initParticles();
  initReveal();
  initTimelineFill();
  initCounters();
  initMasonryGallery();
  initLightbox();
  initFacilitiesCarousel();
  initButtonRipples();
  initScrollIndicator();
});

/* ---------------------------------- */
/* Footer year                        */
/* ---------------------------------- */
function setYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------- */
/* Scroll progress bar                */
/* ---------------------------------- */
function initScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = pct + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------------------------------- */
/* Navbar: solid on scroll + active link */
/* ---------------------------------- */
function initNavbar(){
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link highlighting via IntersectionObserver
  const sections = ['home','about','facilities','gallery','contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = Array.from(document.querySelectorAll('.nav-link'));

  const setActive = (id) => {
    links.forEach(l => {
      l.classList.toggle('active-link', l.getAttribute('href') === '#' + id);
    });
  };

  if ('IntersectionObserver' in window && sections.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(sec => observer.observe(sec));
  }
}

/* ---------------------------------- */
/* Mobile menu                        */
/* ---------------------------------- */
function initMobileMenu(){
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  const close = () => {
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  const open = () => {
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  burger.addEventListener('click', () => {
    menu.classList.contains('is-open') ? close() : open();
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------------------------------- */
/* Smooth scroll for in-page anchors  */
/* ---------------------------------- */
function initSmoothAnchors(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function initScrollIndicator(){
  const btn = document.getElementById('scrollIndicator');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ---------------------------------- */
/* Cursor glow (desktop only)          */
/* ---------------------------------- */
function initCursorGlow(){
  const glow = document.getElementById('cursorGlow');
  if (!glow || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  let raf = null;
  document.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      raf = null;
    });
  });
}

/* ---------------------------------- */
/* Hero particle field (canvas)       */
/* ---------------------------------- */
function initParticles(){
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = canvas.closest('.hero');
  let particles = [];
  let width, height;
  let animId;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles(){
    const count = Math.min(70, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.25 + 0.05,
      vx: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function draw(){
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
  }

  resize();
  createParticles();
  if (!reducedMotion){
    draw();
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden){ cancelAnimationFrame(animId); }
    else if (!reducedMotion){ draw(); }
  });
}

/* ---------------------------------- */
/* Scroll reveal (IntersectionObserver) */
/* ---------------------------------- */
function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        const el = entry.target;
        const siblings = Array.from(el.parentElement ? el.parentElement.children : []);
        const delayIndex = siblings.indexOf(el);
        const delay = Math.min(delayIndex, 6) * 70;
        setTimeout(() => el.classList.add('is-visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => observer.observe(el));
}

/* ---------------------------------- */
/* Timeline progress fill on scroll   */
/* ---------------------------------- */
function initTimelineFill(){
  const wrap = document.querySelector('.timeline');
  const fill = document.getElementById('timelineFill');
  const steps = document.querySelectorAll('.timeline__step');
  if (!wrap || !fill) return;

  const onScroll = () => {
    const rect = wrap.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const total = rect.height;
    const visibleTop = viewportH * 0.75;
    let progressPx = visibleTop - rect.top;
    progressPx = Math.max(0, Math.min(progressPx, total));
    const pct = total > 0 ? (progressPx / total) * 100 : 0;
    fill.style.height = pct + '%';

    steps.forEach(step => {
      const r = step.getBoundingClientRect();
      if (r.top < viewportH * 0.8) step.classList.add('is-visible');
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

/* ---------------------------------- */
/* Animated counters                  */
/* ---------------------------------- */
function initCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const startVal = 0;

    const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    function step(now){
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const value = Math.floor(startVal + (target - startVal) * eased);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)){
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ---------------------------------- */
/* Masonry gallery (generated)        */
/* ---------------------------------- */
const GALLERY_ITEMS = [
  { seed: 'idea-workshop-1', caption: 'Embedded systems workshop' },
  { seed: 'idea-workshop-2', caption: 'CAD design review session' },
  { seed: 'idea-workshop-3', caption: '3D printing in progress' },
  { seed: 'idea-workshop-4', caption: 'Student hackathon sprint' },
  { seed: 'idea-workshop-5', caption: 'Robotics testbed' },
  { seed: 'idea-workshop-6', caption: 'PCB soldering bench' },
  { seed: 'idea-workshop-7', caption: 'Mentor project review' },
  { seed: 'idea-workshop-8', caption: 'Prototype demo day' },
  { seed: 'idea-workshop-9', caption: 'CNC machining floor' },
  { seed: 'idea-workshop-10', caption: 'Team brainstorm wall' },
  { seed: 'idea-workshop-11', caption: 'Laser cutting station' },
  { seed: 'idea-workshop-12', caption: 'Innovation showcase' }
];

function initMasonryGallery(){
  const grid = document.getElementById('masonryGrid');
  if (!grid) return;

  // Varying heights for a natural masonry rhythm
  const heights = [280, 340, 240, 380, 260, 320, 300, 250, 360, 270, 330, 290];

  const fragment = document.createDocumentFragment();
  GALLERY_ITEMS.forEach((item, i) => {
    const height = heights[i % heights.length];
    const wrapper = document.createElement('div');
    wrapper.className = 'masonry__item';
    wrapper.setAttribute('data-index', i);
    // Placeholder images — replace src with real IDEA Lab photography later
    wrapper.innerHTML = `
      <img src="https://picsum.photos/seed/${item.seed}/600/${height}" alt="${item.caption}" loading="lazy" width="600" height="${height}">
      <div class="masonry__overlay"><span>${item.caption}</span></div>
    `;
    fragment.appendChild(wrapper);
  });
  grid.appendChild(fragment);
}

/* ---------------------------------- */
/* Lightbox                           */
/* ---------------------------------- */
function initLightbox(){
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const grid = document.getElementById('masonryGrid');
  if (!lightbox || !grid) return;

  let currentIndex = 0;

  const openAt = (index) => {
    const total = GALLERY_ITEMS.length;
    currentIndex = (index + total) % total;
    const item = GALLERY_ITEMS[currentIndex];
    const heights = [280, 340, 240, 380, 260, 320, 300, 250, 360, 270, 330, 290];
    img.src = `https://picsum.photos/seed/${item.seed}/1200/${heights[currentIndex % heights.length] * 2}`;
    img.alt = item.caption;
    caption.textContent = item.caption;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry__item');
    if (!item) return;
    openAt(parseInt(item.getAttribute('data-index'), 10));
  });

  closeBtn.addEventListener('click', close);
  nextBtn.addEventListener('click', () => openAt(currentIndex + 1));
  prevBtn.addEventListener('click', () => openAt(currentIndex - 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') openAt(currentIndex + 1);
    if (e.key === 'ArrowLeft') openAt(currentIndex - 1);
  });
}

/* ---------------------------------- */
/* Facilities: infinite horizontal carousel */
/* Custom build — drag, wheel, touch, arrows, keyboard, autoscroll, inertia */
/* ---------------------------------- */
const MACHINES = [
  { name: '3D Printer (FDM)', tag: 'Fabrication', desc: 'Rapid prototyping of functional plastic parts and enclosures.', seed: 'machine-3dprinter' },
  { name: 'CNC Router', tag: 'Fabrication', desc: 'Precision subtractive machining for wood, acrylic and soft metals.', seed: 'machine-cnc' },
  { name: 'Laser Cutter', tag: 'Fabrication', desc: 'Clean, fast cutting and engraving for sheet materials.', seed: 'machine-laser' },
  { name: 'PCB Prototyping Rig', tag: 'Electronics', desc: 'In-house circuit board milling for rapid electronics iteration.', seed: 'machine-pcb' },
  { name: 'Oscilloscope Bench', tag: 'Electronics', desc: 'Signal analysis and debugging for embedded systems projects.', seed: 'machine-oscilloscope' },
  { name: 'Soldering Workstations', tag: 'Electronics', desc: 'Individual benches for fine electronics assembly and repair.', seed: 'machine-soldering' },
  { name: 'Robotics Arm', tag: 'Robotics', desc: 'A 6-axis arm used for automation and manipulation research.', seed: 'machine-roboarm' },
  { name: 'Drone Test Rig', tag: 'Robotics', desc: 'Tethered flight-testing frame for UAV control experiments.', seed: 'machine-drone' },
  { name: 'IoT Sensor Lab', tag: 'Embedded', desc: 'Modular sensor kits for connected-device prototyping.', seed: 'machine-iot' },
  { name: '3D Scanner', tag: 'Fabrication', desc: 'High-resolution scanning for reverse engineering and CAD reference.', seed: 'machine-scanner' },
  { name: 'Vacuum Forming Unit', tag: 'Fabrication', desc: 'Fast, low-cost forming for casings and moulded components.', seed: 'machine-vacuum' },
  { name: 'Materials Testing Rig', tag: 'Research', desc: 'Stress and load testing for student material-science projects.', seed: 'machine-materials' }
];

function initFacilitiesCarousel(){
  const viewport = document.getElementById('carouselViewport');
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  if (!viewport || !track) return;

  // Build cards twice for a seamless loop (set A + set B)
  const buildCard = (m) => {
    const el = document.createElement('div');
    el.className = 'machine-card';
    el.innerHTML = `
      <div class="machine-card__media">
        <span class="machine-card__tag">${m.tag}</span>
        <img src="https://picsum.photos/seed/${m.seed}/500/400" alt="${m.name}" loading="lazy">
      </div>
      <div class="machine-card__body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
      </div>
    `;
    // subtle 3D tilt on mouse move (desktop only)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches){
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-6px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    }
    return el;
  };

  const setA = MACHINES.map(buildCard);
  const setB = MACHINES.map(buildCard);
  setA.forEach(c => track.appendChild(c));
  setB.forEach(c => track.appendChild(c));

  let singleSetWidth = 0;
  let offset = 0;         // current translateX (negative moves left)
  let autoSpeed = 0.45;   // px per frame, autoplay speed
  let velocity = 0;       // drag inertia velocity
  let isDragging = false;
  let isHovering = false;
  let startX = 0;
  let startOffset = 0;
  let lastX = 0;
  let lastTime = 0;
  let rafId = null;

  function measure(){
    // Width of one full set (12 cards + gaps)
    const cards = Array.from(track.children).slice(0, MACHINES.length);
    const gap = 26;
    singleSetWidth = cards.reduce((sum, c) => sum + c.offsetWidth + gap, 0);
  }

  function wrapOffset(){
    // Keep offset within [-singleSetWidth, 0) for a seamless illusion
    if (offset <= -singleSetWidth) offset += singleSetWidth;
    if (offset > 0) offset -= singleSetWidth;
  }

  function apply(){
    track.style.transform = `translate3d(${offset}px,0,0)`;
  }

  function frame(){
    if (!isDragging){
      if (Math.abs(velocity) > 0.01){
        offset += velocity;
        velocity *= 0.94; // inertia friction
      } else if (!isHovering){
        offset -= autoSpeed; // gentle autoplay
      }
    }
    wrapOffset();
    apply();
    rafId = requestAnimationFrame(frame);
  }

  function goToStep(direction){
    // Move by roughly one card width for arrow/keyboard navigation
    const card = track.querySelector('.machine-card');
    const step = card ? card.offsetWidth + 26 : 320;
    velocity = 0;
    offset += direction * -step;
    wrapOffset();
  }

  // Pointer / drag support (mouse + touch unified via Pointer Events)
  function onPointerDown(e){
    isDragging = true;
    velocity = 0;
    viewport.classList.add('is-dragging');
    startX = e.clientX ?? (e.touches && e.touches[0].clientX);
    lastX = startX;
    startOffset = offset;
    lastTime = performance.now();
    if (e.pointerId !== undefined) viewport.setPointerCapture?.(e.pointerId);
  }
  function onPointerMove(e){
    if (!isDragging) return;
    const x = e.clientX ?? (e.touches && e.touches[0].clientX);
    if (x === undefined) return;
    const dx = x - startX;
    offset = startOffset + dx;

    const now = performance.now();
    const dt = now - lastTime || 16;
    velocity = ((x - lastX) / dt) * 16; // px per frame approximation
    lastX = x;
    lastTime = now;
  }
  function onPointerUp(){
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
  }

  viewport.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Touch fallback for older browsers
  viewport.addEventListener('touchstart', onPointerDown, { passive: true });
  viewport.addEventListener('touchmove', onPointerMove, { passive: true });
  viewport.addEventListener('touchend', onPointerUp);

  // Mouse wheel support (vertical wheel scrolls the track horizontally)
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    offset -= delta * 0.6;
    velocity = 0;
  }, { passive: false });

  // Pause on hover, resume automatically
  viewport.addEventListener('mouseenter', () => { isHovering = true; });
  viewport.addEventListener('mouseleave', () => { isHovering = false; });

  // Arrow buttons
  prevBtn?.addEventListener('click', () => goToStep(-1));
  nextBtn?.addEventListener('click', () => goToStep(1));

  // Keyboard support
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight'){ e.preventDefault(); goToStep(1); }
    if (e.key === 'ArrowLeft'){ e.preventDefault(); goToStep(-1); }
  });

  // Recalculate on resize / image load
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  // Give images a moment to lay out before first measurement
  setTimeout(measure, 300);
  measure();

  frame();
}

/* ---------------------------------- */
/* Button ripple effect                */
/* ---------------------------------- */
function initButtonRipples(){
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.position = btn.style.position || 'relative';
    btn.addEventListener('click', function(e){
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}