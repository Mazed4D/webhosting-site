const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plans__article button');
const modalYes = document.querySelector('.modal__action');
const modalNo = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

selectPlanButton.forEach((button) => {
    button.addEventListener('click', () => {
        backdrop.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('open');
            backdrop.classList.add('open');
        }, 200);
    });
});

if (modal) {
    modalYes.addEventListener('click', () => {
        console.log('okay');
    });

    modalNo.addEventListener('click', () => {
        setTimeout(() => {
            modal.classList.remove('open');
            backdrop.classList.remove('open');
        }, 200);
        backdrop.style.display = 'none';
    });
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');

    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
    if (modal) {
        modal.classList.remove('open');
    }
});

toggleButton.addEventListener('click', () => {
    backdrop.style.display = 'block';

    setTimeout(() => {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    }, 200);
});

// ctaButton.addEventListener('animationstart', (event) => {
// 	console.log('Animation started', event);
// });

// ctaButton.addEventListener('animationend', (event) => {
// 	console.log('Animation end', event);
// });

// ctaButton.addEventListener('animationiteration', (event) => {
// 	console.log('Animation iteration', event);
// });