const editor = document.getElementById("editor");
const btn = document.getElementById("button");

editor.addEventListener("input", () => {
    localStorage.setItem("userText", editor.value);
})

editor.value = localStorage.getItem("userText");

btn.addEventListener("click", () => {
    localStorage.removeItem("userText");
    editor.value = "";
})