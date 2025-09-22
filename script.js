//Variabler

const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const sortPriceBtn = document.getElementById("sortPriceBtn");
const sortNameBtn = document.getElementById("sortNameBtn");
const itemList = document.getElementById("itemList");
const totalPrice = document.getElementById("totalPrice");

let item = []; //liste kommer her i array'et efterhånden som varer bliver tilføjet

addBtn.addEventListener("click", () => {
    const name = itemName.value.trim();
    const price = parseFloat(itemPrice.value);

    if (name && !isNaN(price)) {
        itemList.push({ navn: name, pris: price});
        itemName.value = "";
        itemPrice.value = "";
    } else {
        alert("Varer skal være med bogstaver og pris med tal")
    }
});