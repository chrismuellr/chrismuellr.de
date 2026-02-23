/* ============================================================
   Chris Müller – main.js
   ============================================================ */

// ---------- NAV: active on scroll ----------
const nav      = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.getElementById('navLinks');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ---------- NAV: mobile toggle ----------
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---------- SCROLL REVEAL ----------
const revealTargets = document.querySelectorAll(
  '.about-grid, .video-item, .section-title, .contact-email, .contact-socials, .impressum-grid > div'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealTargets.forEach(el => revealObserver.observe(el));

// Stagger video items
document.querySelectorAll('.video-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});
