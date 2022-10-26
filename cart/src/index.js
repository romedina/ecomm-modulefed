import faker from "faker";

const cartText = `<div>You have <span style='color:red'>${faker.random.number()}</span> items in your cart</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
