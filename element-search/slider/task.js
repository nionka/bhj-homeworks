const left = document.querySelector(".slider__arrow_prev");
const right = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");

let count = 0;
    right.onclick = function() {
        sliders[count].className = "slider__item";
        count = ((count + 1) + sliders.length)%sliders.length;
        console.log(count)
        sliders[count].className = "slider__item_active";
    }

    left.onclick = function() {
        sliders[count].className = "slider__item";
        count = ((count - 1) + sliders.length)%sliders.length;
        console.log(count)
        sliders[count].className = "slider__item_active";
    }

// function nextSlide() {
//     goToSlide(count + 1);
// } 

// function prevSlide() {
//     goToSlide(count - 1);
// }

// function goToSlide(n) {
//     sliders[count].className = "slider__item";
//     count = (n + sliders.length)%sliders.length;
//     sliders[count].className = "slider__item_active";
// }

// right.onclick = function() {
//     nextSlide()
// }

// left.onclick = function() {
//     prevSlide();
// }