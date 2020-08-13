  const rotator = Array.from(document.querySelectorAll(".rotator__case"));
  rotator.forEach((value) => {
      value.style.color = value.dataset.color;
  })
  
  const showRotator = function() {
    const elem = document.querySelector(".rotator__case_active");
    const nextElem = elem.nextElementSibling;
    let delay = elem.dataset.speed;

    if (nextElem) {
        elem.classList.remove("rotator__case_active");
        nextElem.classList.add("rotator__case_active");
    } else {
        const parentElem = elem.parentElement;
        parentElem.firstElementChild.classList.add("rotator__case_active");
        parentElem.lastElementChild.classList.remove("rotator__case_active");
    }

    setTimeout(showRotator, delay);
}

showRotator();

// setInterval(showRotator, 1000);
