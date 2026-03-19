// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-xmark');
});

// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-xmark');
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Если это секция со статистикой - запускаем счетчики
            if (entry.target.classList.contains('stat-card')) {
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('counted')) {
                    animateCounter(counter);
                    counter.classList.add('counted');
                }
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Анимация счетчиков чисел
function animateCounter(counterElement) {
    const target = +counterElement.getAttribute('data-target');
    const duration = 2000; // 2 секунды
    const increment = target / (duration / 16); // 16мс = ~60fps

    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counterElement.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.innerText = target;
        }
    };

    updateCounter();
}