const menuToggle = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');

if (menuToggle && globalNav) {
  menuToggle.hidden = false;
  globalNav.classList.add('is-collapsible');
  const closeMenu = () => {
    globalNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && globalNav.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryCards = document.querySelectorAll('button[data-full]');

if (lightbox && lightboxImage && lightboxCaption) {
  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const full = card.getAttribute('data-full');
      const title = card.getAttribute('data-title') || '';
      if (!full) return;
      lightboxImage.src = full;
      lightboxImage.alt = title;
      lightboxCaption.textContent = title;
      lightbox.showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.close();
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    const rect = lightbox.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) closeLightbox();
  });

  lightbox.addEventListener('close', () => {
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.open) {
      closeLightbox();
    }
  });
}
