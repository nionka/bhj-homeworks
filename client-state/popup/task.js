const modal = document.getElementById("subscribe-modal");
const closeModal = document.querySelector(".modal__close");

if (!getCookie("modal")) {
modal.classList.add("modal_active");
}

closeModal.addEventListener("click", () => {
    modal.classList.remove("modal_active");

    document.cookie = "modal=close";
})

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}