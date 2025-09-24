//Variabler

const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const sortPriceBtn = document.getElementById("sortPriceBtn");
const sortNameBtn = document.getElementById("sortNameBtn");
const itemList = document.getElementById("itemList");
const totalPrice = document.getElementById("totalPrice");

let item = []; //liste kommer her i array'et efterhånden som varer bliver tilføjet, så ændres hele tiden

addBtn.addEventListener("click", () => {
    //Trim er med for at fjerne mellemrum foran og bagved det indtastet ord i varer
    const name = itemName.value.trim();
    //Sørger for at det er tal der står i feltet
    const price = parseFloat(itemPrice.value);

    if (name && !isNaN(price)) {
        item.push({ navn: name, pris: price}); //bliver brugt til at tilføje varerne til listen
        //tømmer felterne efter der er trykket tilføj
        itemName.value = "";
        itemPrice.value = "";
        updateList(); //tilføjer varer til listen
    } else {

    //hvis der er tal/ikke noget i varer feltet eller tekst/ikke noget i pris feltet kommer det her frem
        alert("Varer skal være med bogstaver og pris med tal")
    }
});

sortPriceBtn.addEventListener("click", () => {
    item.sort((a, b) => a.pris - b.pris); 
    updateList(); //gør listen synlig
});

sortNameBtn.addEventListener("click", () => {
    item.sort((a, b) => a.navn.localeCompare(b.navn)); //localeCompare er for at den alfabetiske sortering også kan læse æ,ø,å
    updateList();
});

//function til at opdatere listen på siden

function updateList() {
    itemList.innerHTML = ""; //Rydder listen, så varerne ikke bliver skrevet dobbelt
    let total = 0; //Starter samlet pris ved 0

    item.forEach((varer, index) => { //går igennem alle varer i arrayet én gang
        total += varer.pris; //lægger pris sammen

        const li = document.createElement("li"); //tilføjer til listen(li)
        li.textContent = `${varer.navn} - ${varer.pris} kr`;

        //fjern knap
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Fjern";
        removeBtn.addEventListener("click", () => {
            item.splice(index, 1); //fjerner varer fra listen
            updateList(); //opdaterer listen
        });

        li.appendChild(removeBtn); //tilføjer fjernknappen til listen
        itemList.appendChild(li); //tilføjer li til ul, så det bliver synligt på siden
    });

    totalPrice.textContent = total; //viser samlet pris
}