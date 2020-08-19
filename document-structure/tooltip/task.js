const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(value => {
    value.addEventListener("click", () => {
        event.preventDefault();

        let hint = document.createElement("div");
          hint.append(`${value.title}`);
          hint.classList.add("tooltip", "tooltip_active");

          let coords = value.getBoundingClientRect();
          hint.style.left = coords.left + "px";
        
        if (value.nextElementSibling === null || !value.nextElementSibling.classList.contains("tooltip")) {
            if (document.querySelector(".tooltip")) {
                document.querySelector(".tooltip").remove();
            }
            
            value.insertAdjacentElement("afterend", hint);    
        } else {
            value.nextElementSibling.remove(hint);
        }
    })
})