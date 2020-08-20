const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const btnAdd = document.getElementById("tasks__add");

function makeTask(input) {
    let newTask = `<div class="task">
                            <div class="task__title">
                                ${input.value}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;

    tasksList.insertAdjacentHTML("beforeend", newTask);

    tasksList.lastElementChild.querySelector(".task__remove").addEventListener("click", (e) => {
        e.target.closest(".task").remove();
    })

    input.value = ""; 
}

function check(input) {
    if (input.value != "") {
        makeTask(input);
    } else {
        alert("Заполните поле!");
    }
}

btnAdd.addEventListener("click", () => {
    event.preventDefault();
    check(input);
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        event.preventDefault();
        check(input);     
    }
})
