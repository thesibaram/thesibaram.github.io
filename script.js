document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    // Toggle navigation for mobile
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Prevent scrolling when mobile nav is open
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto'; // Re-enable scrolling
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('nav').offsetHeight; // Account for fixed navigation height
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    });

    // Add shadow to navigation bar on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        nav.style.boxShadow = window.scrollY > 0 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
    });

    // Close mobile menu on window resize if it becomes desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // --- Contact Form Submission Handler for Google Apps Script ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage'); // Get the message display area from index.html

    // Function to display dynamic messages to the user (info, success, error)
    function displayMessage(message, type) {
        if (!formMessage) { // Added a check to prevent errors if element is missing
            console.error("Error: formMessage element not found in HTML.");
            return;
        }
        formMessage.textContent = message;
        // Apply appropriate styling class
        formMessage.className = `message-area ${type}`;
        formMessage.style.display = 'block'; // Make the message area visible
        formMessage.style.opacity = '1'; // Ensure it fades in

        // Hide the message after 5 seconds with a fade-out effect
        setTimeout(() => {
            formMessage.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                formMessage.style.display = 'none'; // Hide completely after fade out
                formMessage.textContent = ''; // Clear message text
                formMessage.className = 'message-area'; // Reset class
            }, 500); // Match this duration with CSS transition-duration for opacity
        }, 5000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission to handle it with JavaScript

            const formData = new FormData(contactForm);

            // IMPORTANT: Replace this with YOUR deployed Google Apps Script Web App URL.
            // This URL is specific to your deployed script and is crucial for the form to work.
            const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbxZ6zL5sRQkuJ2TTc6Ms8RXQYF49jFChJwJ3umrTg-sZJ5DZx5Q3CaIRVK7h_6x6Af4/exec'; // <<< REPLACE WITH YOUR ACTUAL URL

            // Basic validation for the Apps Script URL
            if (!googleAppsScriptURL || googleAppsScriptURL.includes('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL')) {
                displayMessage('Error: Google Apps Script URL not configured. Please follow setup instructions for the backend.', 'error');
                return;
            }

            displayMessage('Sending message...', 'info');

            try {
                const response = await fetch(googleAppsScriptURL, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.text();
                // Log the raw response from Apps Script for debugging
                console.log('Raw response from Apps Script:', result);

                // Check for successful HTTP response AND if the response text contains 'success'
                // Use .trim() to remove any leading/trailing whitespace
                if (response.ok && result.trim().includes('success')) {
                    console.log('Success:', result);
                    displayMessage('Message sent successfully! Thank you for contacting me.', 'success');
                    contactForm.reset();
                } else {
                    console.error('Google Apps Script error:', result);
                    displayMessage(`Failed to send message: ${result || 'Unknown server error. Please try again.'}`, 'error');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                displayMessage('Network error: Please check your connection and try again.', 'error');
            }
        });
    }
});
