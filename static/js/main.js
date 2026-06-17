// ---- TYPED TEXT ----
const roles = [
  "Python Full Stack Developer",
  "Django Expert",
  "FastAPI Engineer",
  "REST API Architect",
  "Open Source Contributor",
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[roleIdx];
  if (deleting) {
    typedEl.textContent = current.substring(0, charIdx--);
    if (charIdx < 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(type, 500); return; }
  } else {
    typedEl.textContent = current.substring(0, charIdx++);
    if (charIdx > current.length) { deleting = true; setTimeout(type, 1800); return; }
  }
  setTimeout(type, deleting ? 50 : 90);
}
if (typedEl) type();

// ---- SCROLL ANIMATIONS: skill bars ----
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = bar.dataset.width;
    bar.style.width = w + '%';
  });
}

// ---- INTERSECTION OBSERVER ----
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateSkillBars(); obs.disconnect(); } });
  }, { threshold: 0.2 });
  obs.observe(skillsSection);
}

// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- HAMBURGER ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- ACTIVE NAV LINK on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--green)' : '';
  });
});

// ---- FADE IN on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.highlight-card, .project-card, .timeline-item, .skill-group').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
// ---- DARK LIGHT TOGGLE ----

const toggle = document.getElementById('theme-toggle');

if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}