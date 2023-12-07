const layout = document.querySelector(".layout");
const main = document.querySelector("main");
const H2 = document.querySelector("h2");

layout.addEventListener("click", function() {
   
    main.classList.toggle('main1');
    H2.style.color = H2.style.color === 'var(--main)' ? 'var(--tertiary)' : 'var(--main)';
}) 

const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

rightButton.addEventListener('click', function() {
   
    slide1.style.display = 'none';
    slide2.style.display = 'grid';
    leftButton.style.visibility = 'visible';
});

leftButton.addEventListener('click', function() {
   
    slide1.style.display = 'grid';
    slide2.style.display = 'none';
    leftButton.style.visibility = 'hidden';
});