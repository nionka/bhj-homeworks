const reveal = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", function() {
    reveal.forEach((value => {
        const valueBottom = value.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (viewportHeight > valueBottom && valueBottom > 0) {
            value.classList.add("reveal_active");
        } else {
            value.classList.remove("reveal_active");
        }
    }))
})
