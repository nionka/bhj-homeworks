const modalMain = document.querySelector("#modal_main");
const showSuccess = document.querySelector("#modal_success");

modalMain.classList.add("modal_active");

const modalClose = document.getElementsByClassName("modal__close");

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        if (modalClose[i].classList.contains("show-success")) {
            showSuccess.classList.add("modal_active");
            modalMain.classList.remove("modal_active");
        } else {
            // modalMain.classList.remove("modal_active");
            // showSuccess.classList.remove("modal_active");
            
            modalClose[i].closest(".modal_active").classList.remove("modal_active");
        }
    }
}
