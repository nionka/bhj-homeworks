const chatWidget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const answers = ["Оператор ответит вам через 15 минут!", "Подождите еще немного!!!", "Какой же вы нетерпеливый!!!", "Нет никого, уехали все", "Все ушли на фронт", "Сейчас всё будет!"];
let timeSec;
let count = setInterval(checkTime, 1000);


chatWidget.addEventListener("click", showChat);

function showChat() {
    this.classList.add("chat-widget_active");

//     messages.innerHTML += `
//     <div class="message">
//       <div class="message__time">${showDate()}</div>
//       <div class="message__text">
//         Добрый день! Чем могу помочь?
//       </div>
//     </div>
//   `;
  timeSec = new Date().getTime();
}

function getAnswer() {
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${showDate()}</div>
      <div class="message__text">
        ${randomAnswer}
      </div>
    </div>
  `;
    timeSec = new Date().getTime();
    messages.lastElementChild.scrollIntoView(top);    
}

function showDate() {
    const date = new Date();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hours}:${minutes}`
}

function checkTime() {
    if ((new Date().getTime() - timeSec) > 30000 && chatWidget.classList.contains("chat-widget_active")) {
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${showDate()}</div>
          <div class="message__text">
            Просыпайтесь!!!
          </div>
        </div>
      `;
      clearInterval(count);
      timeSec = new Date().getTime();
      setInterval(checkTime, 1000);
      messages.lastElementChild.scrollIntoView(top);
    }
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value != "") {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${showDate()}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>
      `;
      input.value = "";
      getAnswer();
      timeSec = new Date().getTime();
    }
})