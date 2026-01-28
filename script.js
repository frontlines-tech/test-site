// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Button click interaction
    const clickButton = document.getElementById('clickButton');
    const messageElement = document.getElementById('message');
    let clickCount = 0;
    
    if (clickButton) {
        clickButton.addEventListener('click', function() {
            clickCount++;
            messageElement.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
            
            // Add a fun animation effect
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.style.opacity = '1';
            }, 100);
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message-input').value;
            
            // Simulate form submission
            formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
            formMessage.style.color = '#28a745';
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Log to console that everything is loaded
    console.log('Test Site JavaScript loaded successfully!');
    console.log('Interactive features initialized:');
    console.log('- Button click counter');
    console.log('- Contact form submission');
    console.log('- Smooth scrolling navigation');
});
