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

// Событие иконок

const footerLink = document.querySelectorAll('footer__contact_link');

footerLink.mousemove = function () {
    document.querySelector('.footer__icon_tel').addClassList('.')
}