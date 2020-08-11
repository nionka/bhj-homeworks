const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("dropdown__list_active");
})

dropdownItem.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();
        dropdownValue.textContent = value.textContent;
        dropdownValue.nextElementSibling.classList.remove("dropdown__list_active");
    })
})