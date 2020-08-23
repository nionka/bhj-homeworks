const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");

window.addEventListener("load", () => {
    if (localStorage.getItem("id")) {
        document.getElementById("welcome").classList.add("welcome_active");
        document.getElementById("user_id").textContent = localStorage.getItem("id");
    } else {
        signin.classList.add("signin_active");
    }
})

signinForm.addEventListener("submit", () => {
    event.preventDefault();
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);
            
            if (data.success) {
                signin.classList.remove("signin_active");
                document.getElementById("welcome").classList.add("welcome_active");
                document.getElementById("user_id").textContent = data.user_id;

                localStorage.setItem("id", data.user_id);

            } else {
                alert("Hеверный логин или пароль");
            }
        }
        
    }
})
