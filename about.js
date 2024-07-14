document.addEventListener('DOMContentLoaded', () => {
    const mobMenu = document.querySelector('.menu-svg')
    const mainMenu = document.querySelector('.mob-menu')
    const crossSvg = document.querySelector('.cross-svg')
    const mobOrderButton = document.querySelectorAll('.order-button-mob')

    mobMenu.addEventListener('click', () => {
        mainMenu.style.visibility = 'visible';
        mainMenu.style.opacity = '1';
    });

    crossSvg.addEventListener('click', () => {
        mainMenu.style.visibility = 'hidden';
        mainMenu.style.opacity = '0';
    });

    mobOrderButton.forEach((mobOrderButton) => {
        mobOrderButton.addEventListener('click', () => {
            window.location.href = mobOrderButton.getAttribute('url');
        })
    });
});