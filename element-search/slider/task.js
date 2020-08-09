const left = document.querySelector(".slider__arrow_prev");
const right = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");

let count = 0;
right.onclick = function() {
    sliders[count].classList.remove("slider__item_active");
    count = ((count + 1) + sliders.length)%sliders.length;
    sliders[count].classList.add("slider__item_active");
}

left.onclick = function() {
    sliders[count].classList.remove("slider__item_active");
    count = ((count - 1) + sliders.length)%sliders.length;
    sliders[count].classList.add("slider__item_active");
}