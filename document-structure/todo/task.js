const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

input.addEventListener("keydown", (e) => {
    
    if (e.key === "Enter" && e.target.value != "") {
        event.preventDefault();

         let newTask = `<div class="task">
                            <div class="task__title">
                                ${e.target.value}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;

        tasksList.insertAdjacentHTML("beforeend", newTask);

        tasksList.lastElementChild.querySelector(".task__remove").addEventListener("click", (e) => {
            e.target.closest(".task").remove();
        })

        e.target.value = "";    
    }
})
