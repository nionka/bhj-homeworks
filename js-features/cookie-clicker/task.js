const img = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");

function getClick() {
    count.textContent++;
     if (count.textContent%2 != 0) {
         this.width = 250;
     } else {
         this.width = 200;
     }
}

img.onclick = getClick;