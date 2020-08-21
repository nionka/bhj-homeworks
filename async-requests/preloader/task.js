const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove("loader_active");
        
        const answer = JSON.parse(xhr.responseText);
        const valutes = answer.response.Valute;
        
        for (let key in valutes) {

            // первый вариант

            // let tabloid = ` <div class="item">
            //                 <div class="item__code">${valutes[key].CharCode}</div>
            //                 <div class="item__value">${valutes[key].Value}</div>
            //                 <div class="item__currency">руб.</div>
            //                 </div>
            //                 `
            // items.insertAdjacentHTML("beforeEnd", tabloid);

            // второй вариант

            let item = document.createElement("div");
            item.className = "item";
            let itemCode = document.createElement("div");
            itemCode.className = "item__code";
            itemCode.append(`${valutes[key].CharCode}`);
            let itemValue = document.createElement("div");
            itemValue.className = "item__value";
            itemValue.append(`${valutes[key].Value}`);
            let itemCurrency = document.createElement("div");
            itemCurrency.className = "item__currensy";
            itemCurrency.append("руб.");

            item.appendChild(itemCode);
            item.appendChild(itemValue);
            item.appendChild(itemCurrency);

            items.appendChild(item);

            // какой вариант лучше использовать первый или второй???
        }
    }
}

