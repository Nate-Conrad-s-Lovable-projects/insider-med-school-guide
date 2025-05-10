
document.addEventListener('DOMContentLoaded', function() {
  // Update current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = event.target.closest('#main-nav');
    if (!isClickInsideNav && navLinks && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });

  // Form submission handler
  const signupForm = document.getElementById('signup-form');
  const footerForm = document.querySelector('.footer-form');
  
  const handleFormSubmit = function(event) {
    event.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const nameInput = this.querySelector('input[type="text"]');
    
    if (emailInput && nameInput) {
      // Here you would typically send this data to your server
      console.log('Form submitted:', {
        email: emailInput.value,
        name: nameInput.value
      });
      
      // Clear form fields
      emailInput.value = '';
      nameInput.value = '';
      
      // Show success message
      alert('Thank you for signing up! You will receive your first email shortly.');
    }
  };
  
  if (signupForm) {
    signupForm.addEventListener('submit', handleFormSubmit);
  }
  
  if (footerForm) {
    footerForm.addEventListener('submit', handleFormSubmit);
  }

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks2 = document.querySelectorAll('.nav-links a');
  
  navLinks2.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
});
