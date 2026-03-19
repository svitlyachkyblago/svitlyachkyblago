// js/main.js
tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#f59e0b',
          600: '#d97706'
        }
      }
    }
  }
};

// Hero Swiper
new Swiper('.hero-swiper', {
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});

// Gallery Swiper
new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});