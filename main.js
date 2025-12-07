// ================================================================================
// PORTFOLIO SITE - MAIN JAVASCRIPT
// ================================================================================

// --------------------------------------------------------------------------------
// 1. INITIALIZE LUCIDE ICONS
// --------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// --------------------------------------------------------------------------------
// 2. MOBILE MENU TOGGLE
// --------------------------------------------------------------------------------
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        
        // Toggle menu visibility
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-full');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('w-full');
        navMenu.classList.toggle('bg-gray-900');
        navMenu.classList.toggle('p-4');
        navMenu.classList.toggle('space-x-0');
        navMenu.classList.toggle('space-y-4');
        
        // Update ARIA attribute
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!navMenu.classList.contains('md:flex')) {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-gray-900', 'p-4', 'space-x-0', 'space-y-4');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// --------------------------------------------------------------------------------
// 3. STICKY NAVBAR ON SCROLL
// --------------------------------------------------------------------------------
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-xl');
        } else {
            navbar.classList.remove('shadow-xl');
        }
    });
}

// --------------------------------------------------------------------------------
// 4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
// --------------------------------------------------------------------------------
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// --------------------------------------------------------------------------------
// 5. ANIMATED SKILL PROGRESS BARS
// --------------------------------------------------------------------------------
const skillsSection = document.getElementById('about');

if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                
                skillItems.forEach(item => {
                    const progressBar = item.querySelector('[data-level]');
                    const levelDisplay = item.querySelector('.skill-level');
                    const targetLevel = parseInt(progressBar.dataset.level);

                    // Animate progress bar width
                    setTimeout(() => {
                        progressBar.style.width = `${targetLevel}%`;
                    }, 100);

                    // Animate percentage counter
                    animateCounter(levelDisplay, 0, targetLevel, 1000);
                });
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    skillObserver.observe(skillsSection);
}

/**
 * Animates a counter from start to end value
 * @param {HTMLElement} element - Element to update
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        element.textContent = `${current}%`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// --------------------------------------------------------------------------------
// 6. CONTACT FORM HANDLING
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// 6. CONTACT FORM HANDLING
// --------------------------------------------------------------------------------
const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const buttonText = document.getElementById('buttonText');
const loadingIcon = document.getElementById('loadingIcon');
const sendIcon = document.getElementById('sendIcon');
const formMessage = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        buttonText.textContent = 'Sending...';
        sendIcon.classList.add('hidden');
        loadingIcon.classList.remove('hidden');
        submitButton.disabled = true;
        formMessage.classList.add('hidden');

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        try {
            // TODO: Replace this with your actual backend endpoint
            // Example options:
            // - Formspree: https://formspree.io/
            // - EmailJS: https://www.emailjs.com/
            // - Your own backend API
            
            // Simulated API call (replace with actual endpoint)
            const response = await simulateFormSubmission(data);
            
            if (response.success) {
                showMessage('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Error sending message. Please try again later or contact me directly via email.', 'error');
        } finally {
            // Reset button state
            buttonText.textContent = 'Send Message';
            sendIcon.classList.remove('hidden');
            loadingIcon.classList.add('hidden');
            submitButton.disabled = false;
        }
    });
}

/**
 * Display form submission message
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.remove('hidden', 'text-green-500', 'text-red-500');
    formMessage.classList.add(type === 'success' ? 'text-green-500' : 'text-red-500');
}

/**
 * Sends form submission to Formspree to receive emails
 * @param {Object} data - Form data
 * @returns {Promise<Object>} Response object
 */
async function simulateFormSubmission(data) {
    // Formspree endpoint configured - emails will be sent to your address
    // Form ID: myzrdyky
    
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzrdyky';
    
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            return { success: true };
        } else {
            const errorData = await response.json();
            console.error('Formspree error:', errorData);
            return { success: false, error: errorData };
        }
    } catch (error) {
        console.error('Network error:', error);
        return { success: false, error: error.message };
    }
}

// --------------------------------------------------------------------------------
// 7. SMOOTH SCROLL FOR ANCHOR LINKS
// --------------------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

console.log('Portfolio initialized successfully!');