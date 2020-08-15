const checkbox = Array.from(document.querySelectorAll(".interest__check"));

checkbox.forEach(value => {
    value.addEventListener("click", () => {
        
        const children = Array.from(value.closest(".interest").querySelectorAll(".interest__check"));
        
        if (value.checked) {
            children.forEach(val => {
                val.checked = true;
            })
        } else {
            children.forEach(val => {
                val.checked = false;
            })
        }
        
    })
})
