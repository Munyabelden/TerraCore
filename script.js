document.addEventListener('DOMContentLoaded', function() {

    /* ==============================
     * Mobile Navigation Toggle
     * ============================== */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    /* ==============================
     * Fade-in on Scroll Animation
     * ============================== */
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% of the item must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* ==============================
     * Contact Form Validation (Demo)
     * ============================== */
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the form from actually submitting
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields (Name, Email, Message).');
        } else {
            // This is for demonstration.
            alert('Thank you for your inquiry, ' + name + '! \n(This is a demo and the form was not actually sent.)');
            contactForm.reset(); // Clear the form
        }
    });

});
