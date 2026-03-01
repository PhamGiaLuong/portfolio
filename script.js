document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for slide-up animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up').forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero shapes
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');

    if (hero && shapes.length > 0) {
        document.addEventListener('mousemove', (e) => {
            // Only calculate parallax if hero is somewhat in view
            if (window.scrollY > window.innerHeight) return;

            const x = (window.innerWidth / 2 - e.clientX) / 25;
            const y = (window.innerHeight / 2 - e.clientY) / 25;

            shapes.forEach((shape, index) => {
                const speed = index === 0 ? 2 : index === 1 ? 4 : 3;
                shape.style.setProperty('--px', `${x * speed}px`);
                shape.style.setProperty('--py', `${y * speed}px`);
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Modal Script
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalPdf = document.getElementById('modalPdf');
    const noPdfMessage = document.getElementById('noPdfMessage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDomain = document.getElementById('modalDomain');
    const modalDesc = document.getElementById('modalDesc');
    const modalGithub = document.getElementById('modalGithub');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent default behavior if clicking on the original link inside the card
            if (e.target.closest('.project-link')) {
                e.preventDefault();
            }

            const pdf = card.getAttribute('data-pdf');
            const title = card.getAttribute('data-title');
            const domain = card.getAttribute('data-domain');
            const shortDesc = card.getAttribute('data-desc');
            const detailedDescEl = card.querySelector('.project-detailed-desc');
            const github = card.getAttribute('data-github');

            modalTitle.textContent = title;
            modalDomain.textContent = domain;
            if (detailedDescEl) {
                modalDesc.innerHTML = detailedDescEl.innerHTML;
            } else {
                modalDesc.textContent = shortDesc;
            }
            modalGithub.href = github;

            // Simple check if pdf exists in real life. Here we just set src.
            // Since pdfs are not actually in the folder yet, we show a mock or handle it.
            if (pdf && pdf !== '#' && pdf !== '') {
                modalPdf.src = pdf;
                modalPdf.style.display = 'block';
                noPdfMessage.style.display = 'none';
            } else {
                modalPdf.style.display = 'none';
                noPdfMessage.style.display = 'flex';
            }

            modal.style.display = 'flex';
            // slight delay needed for transition to work correctly when changing from display: none
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.style.display = 'none';
            modalPdf.src = '';
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
