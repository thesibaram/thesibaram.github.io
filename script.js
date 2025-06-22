document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    // Toggle navigation
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        });
    });

    // Navigation shadow on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        nav.style.boxShadow = window.scrollY > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
    });

    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // Add form submission handler for JSON post
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            fetch('https://formspree.io/f/yourformid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('There was an error sending your message.');
                }
            })
            .catch(() => {
                alert('There was an error sending your message.');
            });
        });
    }
});
