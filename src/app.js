const NAVBAR = document.querySelector('nav');

/* ---------------------------------- */
/* BEGIN DARKMODE TOGGLE */
/* ---------------------------------- */

window.onload = function() {

    var darkmodeToggle = document.querySelector('#darkmode-toggle');
    var darkmodeBall = document.querySelector('#darkmode-toggle .ball');
    var darkmodeState = localStorage.getItem('darkmode');
    
    if(darkmodeState === 'true') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    
        darkmodeBall.style.left = '35px';
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    
        darkmodeBall.style.left = '1px';
    }
    
    darkmodeToggle.addEventListener('click', () => {
    
        /* if darkmode is enabled */
        if(darkmodeBall.style.left == '35px') {
            darkmodeBall.style.left = '1px';
            darkmodeBall.style.transition = ".2s linear";
    
            document.documentElement.classList.toggle('dark')
            document.documentElement.classList.toggle('light')
    
            localStorage.setItem('darkmode', 'false');
        } else {
            /* if darkmode is disabled */
            darkmodeBall.style.left = '35px';
            darkmodeBall.style.transition = ".2s linear";
    
            document.documentElement.classList.toggle('dark')
            document.documentElement.classList.toggle('light')
    
            localStorage.setItem('darkmode', 'true');
        }
    
    
        console.log(darkmodeBall.style.left)
    })
    
}
/* ---------------------------------- */
/* END DARKMODE TOGGLE */
/* ---------------------------------- */




/* ---------------------------------- */
/* BEGIN TOGGLE MENU MOBILE */
/* ---------------------------------- */
function toggleMenu() {
    const fullMenu = document.querySelector('.full-menu');

    fullMenu.classList.toggle('show');
}
/* ---------------------------------- */
/* END TOGGLE MENU MOBILE */
/* ---------------------------------- */
