document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Logic ---
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Toggle icon between bars and times (X)
        if (nav.classList.contains('active')) {
            nav.style.display = 'flex'; // Make visible before sliding in
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            icon.style.color = 'var(--text-dark)';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            icon.style.color = header.classList.contains('scrolled') ? 'var(--text-dark)' : 'var(--white)';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.color = header.classList.contains('scrolled') ? 'var(--text-dark)' : 'var(--white)';
            }
        });
    });

    // Adjust icon color on scroll when menu is closed
    window.addEventListener('scroll', () => {
        if (!nav.classList.contains('active')) {
            icon.style.color = header.classList.contains('scrolled') ? 'var(--text-dark)' : 'var(--white)';
        }
    });

    // --- Accordion Logic (FAQ) ---
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close other open accordions (optional, but good UX)
            accordions.forEach(item => {
                if (item !== accordion && item.classList.contains('active')) {
                    item.classList.remove('active');
                    const content = item.querySelector('.accordion-content');
                    content.style.maxHeight = null;
                    content.style.paddingTop = '0';
                }
            });

            // Toggle current accordion
            accordion.classList.toggle('active');
            const content = accordion.querySelector('.accordion-content');
            
            if (accordion.classList.contains('active')) {
                // Expanding
                content.style.maxHeight = content.scrollHeight + 40 + "px"; // + padding
                content.style.paddingTop = "1.5rem";
            } else {
                // Collapsing
                content.style.maxHeight = null;
                content.style.paddingTop = '0';
            }
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjusted for fixed header height
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Radostný průvodce (Scroll Tracker) Logic ---
    const scrollGuide = document.getElementById('scrollGuide');
    const scrollDot = document.getElementById('scrollDot');
    
    if (scrollGuide && scrollDot) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            
            // Show guide after hero section (500px or so)
            if (scrollTop > 500) {
                scrollGuide.classList.add('show');
            } else {
                scrollGuide.classList.remove('show');
            }
            
            // Update dot position
            scrollDot.style.top = scrollPercent + '%';
        });
        
        // Scroll to top when clicking the dot
        scrollDot.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Intersection Observer for Reveal Animations ---
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // --- Contact Form Submission Handler ---
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-message-success');
    const formError = document.getElementById('form-message-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                if (btnText) btnText.textContent = 'Odesílám...';
                submitBtn.style.opacity = '0.7';
            }

            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'flex';
                    contactForm.reset();
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Chyba serveru');
                }
            } catch (error) {
                contactForm.style.display = 'none';
                formError.style.display = 'flex';
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    if (btnText) btnText.textContent = 'Odeslat zprávu';
                    submitBtn.style.opacity = '1';
                }
            }
        });
    }


    // --- Cookie Consent Logic ---
    const cookieBar = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBar && acceptCookiesBtn) {
        // Zkontrolujte, zda uživatel již souhlas udělil
        if (!localStorage.getItem('cookieConsent')) {
            // Pokud ne, zobrazte lištu po krátké pauze
            setTimeout(() => {
                cookieBar.classList.add('show');
            }, 1500);
        }

        // Akce po kliknutí na tlačítko "Rozumím"
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            cookieBar.classList.remove('show');
        });
    }

    // --- Dynamic Copyright Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Initialize reveals items (ensure the array exists from index.html reveal classes)
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));
});

