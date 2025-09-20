// Main JavaScript for BakerFresh Cake Shop

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    
    // Create mobile menu overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        z-index: 100;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    `;
    
    // Add mobile menu links
    const menuLinks = [
        'HOME', 'SHOP', 'PAGES', 'BLOG', 'CONTACT'
    ];
    
    menuLinks.forEach(link => {
        const menuItem = document.createElement('a');
        menuItem.href = '#';
        menuItem.textContent = link;
        menuItem.style.cssText = `
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            transition: color 0.3s ease;
        `;
        menuItem.addEventListener('mouseenter', () => {
            menuItem.style.color = '#fbbf24';
        });
        menuItem.addEventListener('mouseleave', () => {
            menuItem.style.color = 'white';
        });
        mobileMenu.appendChild(menuItem);
    });
    
    // Add cart button to mobile menu
    const mobileCartBtn = document.createElement('button');
    mobileCartBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 4.68 11a2 2 0 0 0 2 1.31h9.72a2 2 0 0 0 2-1.66L23 6H6"></path>
        </svg>
        CART (3)
    `;
    mobileCartBtn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 2px solid #fbbf24;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    mobileCartBtn.addEventListener('mouseenter', () => {
        mobileCartBtn.style.background = '#fbbf24';
        mobileCartBtn.style.color = 'black';
    });
    mobileCartBtn.addEventListener('mouseleave', () => {
        mobileCartBtn.style.background = 'transparent';
        mobileCartBtn.style.color = 'white';
    });
    mobileMenu.appendChild(mobileCartBtn);
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    mobileMenu.appendChild(closeBtn);
    
    document.body.appendChild(mobileMenu);
    
    // Mobile menu toggle functionality
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    closeBtn.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
    
    function closeMobileMenu() {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cart functionality
    let cartCount = 0;
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElements = document.querySelectorAll('.cart-btn, .mobile-cart-btn');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            updateCartCount();
            
            // Add visual feedback
            this.style.background = '#059669';
            this.textContent = 'Added!';
            
            setTimeout(() => {
                this.style.background = '#d97706';
                this.textContent = 'Add to Cart';
            }, 1000);
            
            // Create floating animation
            const rect = this.getBoundingClientRect();
            const floatingText = document.createElement('div');
            floatingText.textContent = '+1';
            floatingText.style.cssText = `
                position: fixed;
                top: ${rect.top}px;
                left: ${rect.left + rect.width/2}px;
                color: #059669;
                font-weight: bold;
                font-size: 1.2rem;
                pointer-events: none;
                z-index: 1000;
                transform: translateX(-50%);
                animation: floatUp 1s ease-out forwards;
            `;
            
            // Add CSS animation
            if (!document.querySelector('#float-animation-style')) {
                const style = document.createElement('style');
                style.id = 'float-animation-style';
                style.textContent = `
                    @keyframes floatUp {
                        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
                        100% { opacity: 0; transform: translateX(-50%) translateY(-50px); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(floatingText);
            
            setTimeout(() => {
                floatingText.remove();
            }, 1000);
        });
    });
    
    function updateCartCount() {
        cartCountElements.forEach(element => {
            if (element.textContent.includes('CART')) {
                element.innerHTML = element.innerHTML.replace(/\(\d+\)/, `(${cartCount})`);
            }
        });
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cake cards for fade-in animation
    document.querySelectorAll('.cake-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe feature items
    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-30px)';
        feature.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(feature);
    });
    
    // Header background change on scroll
    const header = document.querySelector('.header');
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    header.style.transition = 'transform 0.3s ease, background 0.3s ease';
    
    // Form validation and contact functionality (if needed)
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#d1d5db';
                }
            });
            
            if (isValid) {
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.textContent = 'Thank you for your message! We\'ll get back to you soon.';
                successMsg.style.cssText = `
                    background: #10b981;
                    color: white;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 1rem;
                    text-align: center;
                `;
                form.appendChild(successMsg);
                
                // Reset form
                form.reset();
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 3000);
            }
        });
    });
    
    // Image lazy loading fallback
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236b7280"%3EImage not available%3C/text%3E%3C/svg%3E';
        });
    });
    
    // Console welcome message
    console.log('%c🍰 Welcome to BakerFresh! 🍰', 'color: #d97706; font-size: 20px; font-weight: bold;');
    console.log('%cSpread love and joy through every cake since 1995', 'color: #92400e; font-size: 14px;');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}