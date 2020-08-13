const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

fontSize.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        value.classList.add("font-size_active");

        if (book.classList.contains("book_fs-small") || book.classList.contains("book_fs-big")) {
            book.classList.remove("book_fs-small", "book_fs-big");
        }

        if (value.classList.contains("font-size_small")) {
            book.classList.add("book_fs-small");
        } else if (value.classList.contains("font-size_big")) {
            book.classList.add("book_fs-big")
        }
    })
})

const colorText = Array.from(document.querySelectorAll(".book__control_color .color"));
const colorBG = Array.from(document.querySelectorAll(".book__control_background .color"));

colorText.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();
        document.querySelector(".book__control_color .color_active").classList.remove("color_active");
        value.classList.add("color_active");

        if (book.classList.contains("book_color-gray") || book.classList.contains("book_color-whitesmoke")) {
            book.classList.remove("book_color-gray", "book_color-whitesmoke");
        }

        if (value.classList.contains("color_gray")) {
            book.classList.add("book_color-gray");
        } else if (value.classList.contains("color_whitesmoke")) {
            book.classList.add("book_color-whitesmoke");
        }
    })
})

colorBG.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();
        document.querySelector(".book__control_background .color_active").classList.remove("color_active");
        value.classList.add("color_active");

        if (book.classList.contains("book_bg-gray") || book.classList.contains("book_bg-black")) {
            book.classList.remove("book_bg-gray", "book_bg-black");
        }

        if (value.classList.contains("color_gray")) {
            book.classList.add("book_bg-gray");
        } else if (value.classList.contains("color_black")) {
            book.classList.add("book_bg-black");
        }
    })
})


