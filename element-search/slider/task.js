const left = document.querySelector(".slider__arrow_prev");
const right = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");

let count = 0;
    right.onclick = () => {
        sliders[count +1].className = "slider__item_active";
        sliders[count].className = "slider__item";
        count++;
        if (count === 4) {
            count = 0;
        }
        }