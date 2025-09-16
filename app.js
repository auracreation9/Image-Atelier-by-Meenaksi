// Premium Image Atelier JavaScript with Advanced Scroll Triggers
class PremiumImageAtelier {
    constructor() {
        this.isLoaded = false;
        this.cursor = null;
        this.scrollProgress = null;
        this.animations = new Map();
        this.parallaxElements = [];
        this.counters = new Map();
        this.activeSection = 'hero';
        this.init();
    }

    init() {
        this.setupPageLoader();
        this.setupLuxuryCursor();
        this.setupScrollProgress();
        this.setupAdvancedScrollTriggers();
        this.setupParallaxEffects();
        this.setupHeaderTransitions();
        this.setupNavigationHighlight();
        this.setupBackgroundTransitions();
        this.setupCounterAnimations();
        this.setupPremiumButtons();
        this.setupServiceCardInteractions();
        this.setupSocialLinkEffects();
        this.setupTypewriterEffects();
        this.setupSmoothScrolling();
        this.setupPerformanceOptimizations();
        this.setupContactButtons();
    }

    // Premium Page Loader with Progress
    setupPageLoader() {
        const loader = document.querySelector('.page-loader');
        const loaderText = document.querySelector('.loader-text');
        
        if (loaderText) {
            const text = loaderText.textContent;
            loaderText.innerHTML = '';
            
            // Create animated letters
            [...text].forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter === ' ' ? '\u00A0' : letter;
                span.style.animationDelay = `${index * 0.1}s`;
                span.style.opacity = '0';
                span.style.animation = 'fadeInUp 0.8s ease forwards';
                loaderText.appendChild(span);
            });
        }

        // Simulate loading with progress
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                setTimeout(() => {
                    if (loader) {
                        loader.classList.add('hidden');
                        this.isLoaded = true;
                        this.triggerEntranceAnimations();
                    }
                }, 500);
            }
        }, 100);

        // Add loader animation styles
        this.addLoaderStyles();
    }

    addLoaderStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Premium Cursor with Gold Glow
    setupLuxuryCursor() {
        this.cursor = document.querySelector('.luxury-cursor');
        if (!this.cursor || window.innerWidth <= 768) return;

        let mouse = { x: 0, y: 0 };
        let pos = { x: 0, y: 0 };
        const speed = 0.15;

        const updateCursor = () => {
            pos.x += (mouse.x - pos.x) * speed;
            pos.y += (mouse.y - pos.y) * speed;
            this.cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        };

        const cursorLoop = () => {
            updateCursor();
            requestAnimationFrame(cursorLoop);
        };
        cursorLoop();

        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Enhanced cursor interactions
        const interactiveElements = document.querySelectorAll('a, button, .service__card, .luxury-card, .luxury-quote-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform += ' scale(3)';
                this.cursor.style.background = 'var(--gradient-gold)';
                this.cursor.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.6)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = this.cursor.style.transform.replace(' scale(3)', '');
                this.cursor.style.background = 'var(--gradient-gold)';
                this.cursor.style.boxShadow = 'var(--shadow-gold)';
            });
        });
    }

    // Advanced Scroll Progress with Gold Effect
    setupScrollProgress() {
        this.scrollProgress = document.querySelector('.scroll-progress');
        if (!this.scrollProgress) return;

        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            
            this.scrollProgress.style.width = `${progress}%`;
        };

        window.addEventListener('scroll', this.throttle(updateProgress, 10));
    }

    // Sophisticated Scroll Triggers with Intersection Observer
    setupAdvancedScrollTriggers() {
        const observerOptions = {
            threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
            rootMargin: '0px 0px -100px 0px'
        };

        const triggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const trigger = element.dataset.scrollTrigger;
                    const delay = parseInt(element.dataset.delay) || 0;
                    
                    setTimeout(() => {
                        this.executeAnimation(element, trigger);
                    }, delay);
                }
            });
        }, observerOptions);

        // Observe all elements with scroll triggers
        const triggerElements = document.querySelectorAll('[data-scroll-trigger]');
        triggerElements.forEach(el => {
            triggerObserver.observe(el);
        });

        // Staggered animations observer
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.handleStaggeredAnimations(entry.target);
                }
            });
        }, { threshold: 0.2 });

        // Observe stagger containers
        const staggerContainers = document.querySelectorAll('.services__grid, .expertise__grid, .philosophy__quotes');
        staggerContainers.forEach(container => {
            staggerObserver.observe(container);
        });
    }

    executeAnimation(element, trigger) {
        element.classList.add('animate-in');
        
        switch (trigger) {
            case 'fade-up':
                this.animateFadeUp(element);
                break;
            case 'slide-up':
                this.animateSlideUp(element);
                break;
            case 'slide-right':
                this.animateSlideRight(element);
                break;
            case 'slide-left':
                this.animateSlideLeft(element);
                break;
            case 'scale-in':
                this.animateScaleIn(element);
                break;
            case 'rotate-in':
                this.animateRotateIn(element);
                break;
            case 'float-in':
                this.animateFloatIn(element);
                break;
            case 'counter':
                this.startCounter(element);
                break;
            case 'stagger-up':
                this.animateStaggerUp(element);
                break;
            case 'stagger-left':
                this.animateStaggerLeft(element);
                break;
            default:
                this.animateFadeUp(element);
        }

        // Add sparkle effect for premium elements
        if (element.classList.contains('luxury-badge') || element.classList.contains('section__title')) {
            this.addSparkleEffect(element);
        }
    }

    // Animation Methods
    animateFadeUp(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    animateSlideUp(element) {
        element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    animateSlideRight(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }

    animateSlideLeft(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }

    animateScaleIn(element) {
        element.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }

    animateRotateIn(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'rotateY(0deg)';
    }

    animateFloatIn(element) {
        element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        // Add floating animation
        setTimeout(() => {
            element.style.animation = 'float 6s ease-in-out infinite';
        }, 1000);
    }

    // Staggered Animations
    handleStaggeredAnimations(container) {
        const children = container.querySelectorAll('[data-scroll-trigger*="stagger"]');
        children.forEach((child, index) => {
            setTimeout(() => {
                const trigger = child.dataset.scrollTrigger;
                this.executeAnimation(child, trigger.replace('stagger-', ''));
            }, index * 150);
        });
    }

    animateStaggerUp(element) {
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    animateStaggerLeft(element) {
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }

    // Multi-layer Parallax Effects
    setupParallaxEffects() {
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            
            parallaxLayers.forEach((layer, index) => {
                const speed = parseFloat(layer.dataset.speed) || 0.5;
                const yPos = -(scrolled * speed);
                layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });

            // Hero section parallax
            const hero = document.querySelector('.hero');
            if (hero) {
                const heroOffset = scrolled * 0.3;
                hero.style.transform = `translate3d(0, ${heroOffset}px, 0)`;
            }
        };

        window.addEventListener('scroll', this.throttle(handleParallax, 16));
    }

    // Dynamic Header Transitions
    setupHeaderTransitions() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeader = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide/show header based on scroll direction
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = scrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Navigation Highlighting
    setupNavigationHighlight() {
        const navLinks = document.querySelectorAll('.nav__link');
        const sections = document.querySelectorAll('section[id]');

        const highlightObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.id;
                    this.activeSection = activeId;
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.dataset.scroll === activeId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => {
            highlightObserver.observe(section);
        });
    }

    // Dynamic Background Transitions
    setupBackgroundTransitions() {
        const sections = document.querySelectorAll('[data-bg-change]');
        
        const bgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bgType = entry.target.dataset.bgChange;
                    this.changeBodyBackground(bgType);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            bgObserver.observe(section);
        });
    }

    changeBodyBackground(type) {
        const body = document.body;
        body.classList.remove('bg-light', 'bg-dark');
        
        if (type === 'light') {
            body.style.background = 'var(--gradient-light)';
        } else if (type === 'dark') {
            body.style.background = 'var(--gradient-dark)';
        }
        
        body.style.transition = 'background 1s ease-in-out';
    }

    // Animated Counters
    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-count]');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.counters.has(entry.target)) {
                    this.startCounter(entry.target);
                    this.counters.set(entry.target, true);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    startCounter(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.textContent.includes('+') ? '+' : '';
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;

        // Add glow effect during animation
        element.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Remove glow effect
                setTimeout(() => {
                    element.style.textShadow = 'none';
                }, 1000);
            }
            element.textContent = Math.floor(current) + suffix;
        }, stepTime);
    }

    // Premium Button Interactions
    setupPremiumButtons() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Magnetic effect
            button.addEventListener('mousemove', (e) => {
                if (!button.classList.contains('btn--luxury')) return;
                
                const rect = button.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) * 0.15;
                const deltaY = (e.clientY - centerY) * 0.15;
                
                button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0) scale(1)';
            });

            // Ripple effect
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 215, 0, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation
        this.addRippleStyles();
    }

    addRippleStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Service Card 3D Effects
    setupServiceCardInteractions() {
        const serviceCards = document.querySelectorAll('.service__card, .luxury-glass-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const rotateX = (e.clientY - centerY) / 15;
                const rotateY = (centerX - e.clientX) / 15;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(20px) 
                    scale(1.02)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
            });

            // Golden glow effect
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = `
                    var(--shadow-luxury-hover), 
                    0 0 40px rgba(255, 215, 0, 0.3),
                    inset 0 0 40px rgba(255, 215, 0, 0.1)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
            });
        });
    }

    // Enhanced Social Link Effects
    setupSocialLinkEffects() {
        const socialLinks = document.querySelectorAll('.luxury-social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateX(20px) scale(1.1)';
                link.style.boxShadow = '0 15px 40px rgba(255, 215, 0, 0.4)';
                
                // Animate the shimmer
                const shimmer = link.querySelector('.social__shimmer');
                if (shimmer) {
                    shimmer.style.left = '100%';
                }
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateX(0) scale(1)';
                link.style.boxShadow = '';
                
                const shimmer = link.querySelector('.social__shimmer');
                if (shimmer) {
                    shimmer.style.left = '-100%';
                }
            });
        });
    }

    // Advanced Typewriter Effect
    setupTypewriterEffects() {
        const titleLines = document.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
            
            const typeText = () => {
                let i = 0;
                const timer = setInterval(() => {
                    if (i < text.length) {
                        line.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(timer);
                        // Add golden glow effect when complete
                        line.style.textShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
                        setTimeout(() => {
                            line.style.textShadow = 'none';
                        }, 2000);
                    }
                }, 80);
            };
            
            setTimeout(typeText, (index * 1200) + 3000);
        });
    }

    // Smooth Scrolling with Easing
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav__link, .footer__link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.smoothScrollTo(targetId);
            });
        });
    }

    smoothScrollTo(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 100;
            const elementPosition = element.offsetTop - headerHeight;
            
            // Custom smooth scroll with easing
            const startPosition = window.pageYOffset;
            const distance = elementPosition - startPosition;
            const duration = 1200;
            let start = null;
            
            const easeInOutCubic = (t) => {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            };
            
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const ease = easeInOutCubic(progress);
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            
            window.requestAnimationFrame(step);
        }
    }

    // Contact Button Setup
    setupContactButtons() {
        // Handle all button clicks for contact actions
        document.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const buttonText = button.textContent.toLowerCase();

            if (buttonText.includes('consultation') || buttonText.includes('contact') || buttonText.includes('instagram')) {
                e.preventDefault();
                this.handleContactAction();
            } else if (buttonText.includes('discover') || buttonText.includes('excellence') || buttonText.includes('services')) {
                e.preventDefault();
                this.smoothScrollTo('services');
            } else if (buttonText.includes('learn more')) {
                e.preventDefault();
                this.smoothScrollTo('contact');
            }
        });

        // Handle onclick attributes specifically
        const consultationButtons = document.querySelectorAll('button[onclick*="contact"], button[onclick*="scrollToSection"]');
        consultationButtons.forEach(button => {
            button.removeAttribute('onclick');
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const text = button.textContent.toLowerCase();
                if (text.includes('consultation') || text.includes('instagram')) {
                    this.handleContactAction();
                } else if (text.includes('discover') || text.includes('services')) {
                    this.smoothScrollTo('services');
                }
            });
        });
    }

    handleContactAction() {
        // Create a premium notification
        this.showPremiumNotification();
        
        // Open Instagram after a brief delay
        setTimeout(() => {
            window.open('https://www.instagram.com/minnakshi_tiwari', '_blank');
        }, 800);
    }

    showPremiumNotification() {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: var(--gradient-gold);
            color: var(--color-charcoal);
            padding: 30px 40px;
            border-radius: 20px;
            box-shadow: var(--shadow-luxury);
            z-index: 10001;
            text-align: center;
            font-family: var(--font-luxury-sans);
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 1px;
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        
        notification.innerHTML = `
            <div style="margin-bottom: 10px; font-size: 1.5rem;">✨</div>
            <div>Connecting you to excellence...</div>
            <div style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">Opening Instagram profile</div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
        
        // Animate out
        setTimeout(() => {
            notification.style.transform = 'translate(-50%, -50%) scale(0)';
            setTimeout(() => {
                notification.remove();
            }, 600);
        }, 2000);
    }

    // Sparkle Effects
    addSparkleEffect(element) {
        const sparkles = [];
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: 1.2rem;
                pointer-events: none;
                animation: sparkle 2.5s ease-in-out ${i * 0.3}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                z-index: 10;
            `;
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            sparkles.push(sparkle);
        }
        
        setTimeout(() => {
            sparkles.forEach(sparkle => sparkle.remove());
        }, 3000);
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Throttle function for scroll events
        this.throttle = (func, limit) => {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };

        // Debounce function for resize events
        this.debounce = (func, delay) => {
            let timeoutId;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(context, args), delay);
            };
        };

        // Optimize animations for mobile
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-optimized');
        }

        // Reduce animations on slow devices
        const fps = 60;
        let lastTime = performance.now();
        const checkPerformance = () => {
            const currentTime = performance.now();
            const delta = currentTime - lastTime;
            if (delta > 1000 / fps * 2) {
                document.body.classList.add('reduced-motion');
            }
            lastTime = currentTime;
            requestAnimationFrame(checkPerformance);
        };
        checkPerformance();
    }

    // Entrance Animations after Page Load
    triggerEntranceAnimations() {
        // Hero elements entrance with stagger
        const heroElements = [
            '.luxury-badge',
            '.hero__subtitle', 
            '.hero__stats',
            '.hero__cta'
        ];
        
        heroElements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                setTimeout(() => {
                    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, (index * 300) + 2000);
            }
        });

        // Hero image entrance
        const heroImage = document.querySelector('.hero__image');
        if (heroImage) {
            setTimeout(() => {
                heroImage.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateY(0)';
            }, 3500);
        }

        // Add sparkle effects to key elements
        setTimeout(() => {
            const sparkleTargets = document.querySelectorAll('.brand-text, .section__title');
            sparkleTargets.forEach(target => {
                target.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
            });
        }, 4000);
    }

    // Public method for external scroll calls
    scrollToSection(sectionId) {
        this.smoothScrollTo(sectionId);
    }
}

// Global scroll function for backward compatibility
window.scrollToSection = function(sectionId) {
    if (window.premiumSite) {
        window.premiumSite.scrollToSection(sectionId);
    }
};

// Initialize the premium website
document.addEventListener('DOMContentLoaded', () => {
    window.premiumSite = new PremiumImageAtelier();
    
    // Add sparkle animation styles
    const sparkleStyles = document.createElement('style');
    sparkleStyles.textContent = `
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
        }
        
        .mobile-optimized * {
            animation-duration: 0.3s !important;
            transition-duration: 0.3s !important;
        }
        
        .reduced-motion * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
        }
        
        /* Enhanced hover states */
        .expertise__item:hover {
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }
        
        .luxury-quote-card:hover,
        .quote__card:hover {
            box-shadow: var(--shadow-luxury), 0 0 40px rgba(255, 215, 0, 0.2);
        }
        
        /* Floating animation for hero particles */
        .hero-particles {
            animation: float-particles 8s ease-in-out infinite;
        }
    `;
    document.head.appendChild(sparkleStyles);
    
    console.log('🌟 Premium Image Atelier loaded with advanced scroll triggers and luxury animations');
});

// Performance monitoring and cleanup
let performanceId;
const monitorPerformance = () => {
    let lastTime = performance.now();
    
    const monitor = (currentTime) => {
        const delta = currentTime - lastTime;
        if (delta > 1000 / 30) { // If below 30 FPS
            document.body.classList.add('performance-mode');
        }
        lastTime = currentTime;
        performanceId = requestAnimationFrame(monitor);
    };
    
    if (window.innerWidth > 768) {
        performanceId = requestAnimationFrame(monitor);
    }
};

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (performanceId) {
        cancelAnimationFrame(performanceId);
    }
});

// Start performance monitoring
monitorPerformance();