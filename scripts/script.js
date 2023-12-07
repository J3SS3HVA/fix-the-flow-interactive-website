const layout = document.querySelector(".layout");
const main = document.querySelector("main");
const sections = document.querySelectorAll("main section");
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
let currentSlide = 0;
const H2 = document.querySelectorAll("h2");

layout.addEventListener("click", function() {
    main.classList.toggle('main1');

    H2.forEach(h2 => {
        h2.style.color = h2.style.color === 'var(--main)' ? 'var(--tertiary)' : 'var(--main)';
    });
});

function showSlide(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.style.display = 'grid';
        } else {
            section.style.display = 'none';
        }
    });

    leftButton.style.visibility = index > 0 ? 'visible' : 'hidden';
    rightButton.style.visibility = index < sections.length - 1 ? 'visible' : 'hidden';
}

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


// pijltjes van rechts naar links

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