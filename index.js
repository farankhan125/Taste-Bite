document.addEventListener('DOMContentLoaded', () => {
    const mobMenu = document.querySelector('.menu-svg')
    const mainMenu = document.querySelector('.mob-menu')
    const crossSvg = document.querySelector('.cross-svg')
    const end = document.querySelector('.cr')
    const homeButton = document.querySelector('.home')
    const aboutButton = document.querySelector('.about')
    const locationsButton = document.querySelectorAll('.locations-b')
    const contactButton = document.querySelectorAll('.contact-b')
    const mobOrderButton = document.querySelectorAll('.order-button-mob')
    const contactNumberValidate = document.querySelector('.num-validate')
    const strValidate = document.querySelectorAll('.str-validate')

    mobMenu.addEventListener('click', () => {
        mainMenu.style.visibility = 'visible';
        mainMenu.style.opacity = '1';
    });

    crossSvg.addEventListener('click', () => {
        mainMenu.style.visibility = 'hidden';
        mainMenu.style.opacity = '0';
    });

    homeButton.addEventListener('click', () => {
        mainMenu.style.visibility = 'hidden';
        mainMenu.style.opacity = '0';
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    });

    locationsButton.forEach((locationsButton) => {
        locationsButton.addEventListener('click', () => {
            mainMenu.style.visibility = 'hidden';
            mainMenu.style.opacity = '0';
            end.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        });
    });

    contactButton.forEach((contactButton) => {
        contactButton.addEventListener('click', () => {
            mainMenu.style.visibility = 'hidden';
            mainMenu.style.opacity = '0';
            end.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        });
    });

    mobOrderButton.forEach((mobOrderButton) => {
        mobOrderButton.addEventListener('click', () => {
            mainMenu.style.visibility = 'hidden';
            mainMenu.style.opacity = '0';
            document.querySelector('footer').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        });
    });

    contactNumberValidate.onkeydown = function (event) {
        if (isNaN(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    strValidate.forEach((inputField) => {
        inputField.onkeydown = function (event) {
            if (!isNaN(event.key) && event.key !== ' ') {
                event.preventDefault();
            }
        };
    });
});

