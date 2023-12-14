const layout = document.querySelector(".layout");
const main = document.querySelector("main");
const sections = document.querySelectorAll("main section");
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
// let word gebruikt omdat de current slide nooit altijd op index nr. 0 blijft
let currentSlide = 0;
const H2 = document.querySelectorAll("h2");
const P = document.querySelectorAll("p");
const menu = document.querySelector('.menu-button');
const selection = document.querySelector('.menu-selection')

// burger menu function
menu.addEventListener("click", function() {
    const filter = document.querySelector('div:nth-of-type(1)');
    filter.classList.toggle('menu-background');
    menu.style.zIndex = menu.style.zIndex === '3' ? '1' : '3';
    menu.style.filter = menu.style.filter === 'brightness(0) saturate(100%) invert(71%) sepia(15%) saturate(1789%) hue-rotate(76deg) brightness(95%) contrast(85%)' ? 'none' : 'brightness(0) saturate(100%) invert(71%) sepia(15%) saturate(1789%) hue-rotate(76deg) brightness(95%) contrast(85%)';
    selection.style.zIndex = selection.style.zIndex === '4' ? '0' : '4';
    selection.style.opacity = selection.style.opacity === '1' ? '0' : '1';
});

// functie die je naar de slide brengt naar keuze wanneer je op 1 van de buttons klikt in de menu
document.addEventListener('mousedown', function () {
    const menuLinks = document.querySelectorAll('.menu-selection a');

    // in deze situation zegt forEach dat de volgende functie meetelt voor elke link
    menuLinks.forEach(function (link, index) {
        link.addEventListener('click', function () { 
            
            const filter = document.querySelector('div:nth-of-type(1)');
            const menu = document.querySelector('.menu-button');
            const selection = document.querySelector('.menu-selection');

            // hier haalt hij alles weg die normaal tevoorschijn komt als je op de menu button klikt
            filter.classList.remove('menu-background');
            menu.style.zIndex = '1';
            menu.style.filter = 'none';
            selection.style.zIndex = '0';
            selection.style.opacity = '0';

            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

//functie die de layout en de achtergrond veranderd

// waneer je op de layout button klikt krijgt de main element een class genaamd .main1.
layout.addEventListener("click", function() {
    main.classList.toggle('main1');
    layout.style.zIndex = '1';
    menu.style.zIndex = '1';

// ook word de h2 text wit van kleur. => is een korte manier voor function
    H2.forEach(h2 => {
        h2.style.color = h2.style.color === 'var(--main)' ? 'var(--tertiary)' : 'var(--main)';
    });
});

// functie als je op de pijl knoppen klikt naar de volgende of vorige dia gaat
// i = current index. alle slides hebben een soort van index nummer. 
function showSlide(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.style.opacity = '1';
        } else {
            section.style.opacity = '0';
        }
    });

    // als index groter dan 0 is is hij hidden if-else is de left button weer zichtbaar?
    leftButton.style.visibility = index > 0 ? 'visible' : 'hidden';
     // als index kleiner dan sections index length is dan gaat hij een index nummer omlaag en word de vorige index zichtbaar een de rightbutton gaat dan weer weg
    rightButton.style.visibility = index < sections.length - 1 ? 'visible' : 'hidden';
}


// kleine h2 transform effect. als je op een nieuwe slide komt voert de h2 dit uit. hij komt tevoorschijn met een kleine van rechts naar links effect
function showSlide(index) {
    sections.forEach((section, i) => {
        const h2 = section.querySelector('h2');

        if (i === index) {
            section.style.opacity = '1';
            h2.style.opacity = '1';
            h2.style.transform = 'translateX(0)'; 
        } else {
            section.style.opacity = '0';
            h2.style.opacity = '0';
            h2.style.transform = 'translateX(-20px)'; 
        }
    });

    
    leftButton.style.visibility = index > 0 ? 'visible' : 'hidden';
    rightButton.style.visibility = index < sections.length - 1 ? 'visible' : 'hidden';
}


// er zijn 8 slides dan zijn er dus 8 index nummers, maar bij index nummers begint het altijd bij 0. slide 1 = index 0 en slide 8 is dus 7
rightButton.addEventListener('click', function() {
    if (currentSlide < sections.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

leftButton.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});


// pijltjes rechts en links event

showSlide(currentSlide);

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && currentSlide < sections.length - 1) {
        
        currentSlide++;
        showSlide(currentSlide);
    } else if (event.key === 'ArrowLeft' && currentSlide > 0) {
     
        currentSlide--;
        showSlide(currentSlide);
    }
});

// swipe event voor mobile en tablet users

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; 

    if (touchEndX < touchStartX - swipeThreshold && currentSlide < sections.length - 1) {
        
        currentSlide++;
        showSlide(currentSlide);
    } else if (touchEndX > touchStartX + swipeThreshold && currentSlide > 0) {
      
        currentSlide--;
        showSlide(currentSlide);
    }
}

