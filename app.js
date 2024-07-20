let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
let other_2 = active + 1 >= countItem ? 0 : active + 1;

const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    });

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}

next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}

prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}

let autoPlay = setInterval(() => {
    next.click();
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    changeSlider();
});

// Set the countdown date for each offer card
const countdown1 = new Date().getTime() + 3600000; // 1 hour from now
const countdown2 = new Date().getTime() + 7200000; // 2 hours from now
const countdown3 = new Date().getTime() + 14400000; // 2 hours from now
const countdown4 = new Date().getTime() + 14400000; // 2 hours from now
// Update the countdown every 1 second
const interval = setInterval(() => {
    const now = new Date().getTime();

    // Calculate the time remaining for countdown1
    const distance1 = countdown1 - now;
    const hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

    document.getElementById("countdown1").innerHTML = `${hours1}h ${minutes1}m ${seconds1}s`;

    // Calculate the time remaining for countdown2
    const distance2 = countdown2 - now;
    const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    document.getElementById("countdown2").innerHTML = `${hours2}h ${minutes2}m ${seconds2}s`;

    const distance3 = countdown3 - now;
    const hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

    document.getElementById("countdown3").innerHTML = `${hours3}h ${minutes3}m ${seconds3}s`;

    const distance4 = countdown4 - now;
    const hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

    document.getElementById("countdown4").innerHTML = `${hours4}h ${minutes4}m ${seconds4}s`;

    // If the countdown is over, display a message
    if (distance1 < 0) {
        document.getElementById("countdown1").innerHTML = "EXPIRED";
    }
    if (distance2 < 0) {
        document.getElementById("countdown2").innerHTML = "EXPIRED";
    }
    if (distance3 < 0) {
        document.getElementById("countdown3").innerHTML = "EXPIRED";
    }
    if (distance4 < 0) {
        document.getElementById("countdown4").innerHTML = "EXPIRED";
    }
}, 1000);
