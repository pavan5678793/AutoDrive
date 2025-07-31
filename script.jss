AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true
    });
    
    
    window.addEventListener('scroll', () => {
      const header = document.getElementById('navbar');
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      mobileMenuBtn.innerHTML = menu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, 
            behavior: 'smooth'
          });
        }
      });
    });
    document.getElementById('sellForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! We will contact you shortly with your car valuation.');
      this.reset();
    });
