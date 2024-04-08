import { createHtmlElement } from "./functions.js";

let totalGrid = 16; // meaning 16 * 16
let container = document.querySelector(".container");


for (let i = 0; i < totalGrid; i ++){

    let divRow = createHtmlElement('div', 'row');

    for (let j = 0; j < totalGrid; j++){
        
        let divColum = createHtmlElement('div', 'item');
        divRow.appendChild(divColum);

    }

    container.appendChild(divRow);

}

//Resize button handler
let resizeButton = document.querySelector("input[value='Resize']");
resizeButton.addEventListener("click", (e) =>{

})