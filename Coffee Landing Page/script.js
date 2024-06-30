let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slider = document.querySelector('.slider');
let items = document.querySelectorAll('.slider .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

prev.onclick = () => {
    slider.classList.remove('next');
    slider.classList.add('prev');

    if (active - 1 < 0) {
        active = countItem - 1;
    } else {
        active = active - 1;
    }

    if (active + 1 >= countItem) {
        other_1 = 0;
    } else {
        other_1 = active + 1;
    }

    if (other_1 + 1 >= countItem) {
        other_2 = 0;
    } else {
        other_2 = other_1 + 1;
    }
    changeSlider();
}

next.onclick = () => {
    slider.classList.remove('prev');
    slider.classList.add('next');

    if (active + 1 >= countItem) {
        active = 0;
    } else {
        active = active + 1;
    }

    if (active - 1 < 0) {
        other_1 = countItem - 1;
    } else {
        other_1 = active - 1;
    }

    if (active + 1 >= countItem) {
        other_2 = 0;
    } else {
        other_2 = active + 1;
    }

    changeSlider();
}

const changeSlider = () => {
    let oldItemActive = document.querySelector(".slider .item.active");
    if (oldItemActive) {
        oldItemActive.classList.remove('active');
    }

    let oldItemOther_1 = document.querySelector(".slider .item.other_1");
    if(oldItemOther_1){
        oldItemOther_1.classList.remove("other_1")
    }

    let oldItemOther_2 = document.querySelector(".slider .item.other_2");
    if(oldItemOther_2){
        oldItemOther_2.classList.remove('other_2');
    }

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    afterInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}

let autoPlay = setInterval(() => {
    next.click();
}, 5000);

