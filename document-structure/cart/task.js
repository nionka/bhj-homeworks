const controls = Array.from(document.querySelectorAll(".product__quantity-controls"));
const products = Array.from(document.querySelectorAll(".product"));
const cart = document.querySelector(".cart__products");

controls.forEach(value => {
    let count = value.querySelector(".product__quantity-value");
    
    value.querySelector(".product__quantity-control_inc").addEventListener("click", () => {
        count.textContent ++;
    })

    value.querySelector(".product__quantity-control_dec").addEventListener("click", () => {
        if (count.textContent > 1) {
            count.textContent --;
        }
    })
})

products.forEach(value => {
    value.querySelector(".product__add").addEventListener("click", () => {
        const cartProduct = Array.from(document.querySelectorAll(".cart__product"));
        
        if (cartProduct.length != 0 && cartProduct.some(elem => elem.dataset.id === value.dataset.id)) { 
            cartProduct.forEach(elem => {
                if (elem.dataset.id === value.dataset.id) {
                    elem.querySelector(".cart__product-count").textContent = Number(elem.querySelector(".cart__product-count").textContent) + Number(value.querySelector(".product__quantity-value").textContent);
                }
            })   
        } else {
            makeProduct(value);    
        }
    })
})

function makeProduct(value) {
    let newCartProduct = `<div class="cart__product" data-id="${value.dataset.id}">
                                <img class="cart__product-image" src="${value.querySelector(".product__image").src}">
                                <div class="cart__product-count">${value.querySelector(".product__quantity-value").textContent}</div>        
                        </div>`

    cart.insertAdjacentHTML("beforeEnd", newCartProduct);
}

