// Header

const navLinks = document.querySelectorAll('.header__nav_link');
 
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
    event.preventDefault();

    const section = this.getAttribute('data-section');

    const sections = document.querySelectorAll('section');

    sections.forEach(sectionElement => {
        if (sectionElement.id === section) {
            sectionElement.classList.remove('none');
        } else {
            sectionElement.classList.add('none');
        }
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.header__nav_link ').forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0
  }
);

  
document.querySelectorAll('.section').forEach(section => { observer.observe(section)} );

// Portfolio

const portfolioLinks = document.querySelectorAll('.portfolio__nav_link');
 
portfolioLinks.forEach(link => {
    link.addEventListener('click', function (event) {
    event.preventDefault();

    const section = this.getAttribute('data-section');

    const sections = document.querySelectorAll('.portfolio__items');

    sections.forEach(sectionElement => {
        if (sectionElement.id === section) {
            sectionElement.classList.remove('none');
        } else {
            sectionElement.classList.add('none');
        }
        });
    });
});

const portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.portfolio__nav_link ').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('portfolio__active');
        } else {
          link.classList.remove('portfolio__active');
        }
      });
    }
  });
}, {
  threshold: 0
}
);

document.querySelectorAll('.portfolio__section').forEach(section => { portfolioObserver.observe(section)} );

//   Footer

const footerLinks = document.querySelectorAll('.footer__nav_link');
 
footerLinks.forEach(link => {
    link.addEventListener('click', function (event) {
    event.preventDefault();

    const section = this.getAttribute('data-section');

    const sections = document.querySelectorAll('section');

    sections.forEach(sectionElement => {
        if (sectionElement.id === section) {
            sectionElement.classList.remove('none');
        } else {
            sectionElement.classList.add('none');
        }
        });
    });
});

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.footer__nav_link ').forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0
  });

  
  document.querySelectorAll('.section').forEach(section => { footerObserver.observe(section)} );

  