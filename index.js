import { createHtmlElement, getInputValuebyId, checkSize ,resizeGrid, msgLog, getRandomColor} from "./functions.js";

let totalGrid = 16; // meaning 16 * 16
let container = document.querySelector(".container");
//Random colors
let random = false;
let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", (e)=>{
    if (random) random = false;
    else random = true;
    msgLog("Random Color button clicked");
})
//Grid
createGrid(totalGrid, container);
let grids = document.querySelectorAll(".container div");
//Grid creating function
function createGrid(totalGrid, container){

    for (let i = 0; i < totalGrid; i ++){

        let divRow = createHtmlElement('div', 'row');
    
        for (let j = 0; j < totalGrid; j++){
            
            let divColum = createHtmlElement('div', 'item');
            divRow.appendChild(divColum);
    
        }
    
        container.appendChild(divRow);
    
    }
}

//Resize button handler

let resizeButton = document.querySelector("form");
resizeButton.addEventListener("submit", resizeGrid);

//adding Listener to mouseenter and mouseleave of the div
addMouseHoverEventListener(grids);
function addMouseHoverEventListener(element){
    element.forEach((item)=>{
        item.addEventListener("mouseenter", mouseEnterFunction);
        item.addEventListener("mouseleave", mouseLeaveFunction);
    })
}
function mouseEnterFunction(e){

    let element = e.target;

    if (random){
        let colors = getRandomColor();
        msgLog(colors);
        element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    }
}
function mouseLeaveFunction(e){
    msgLog(e.type);
}
//resetButton
let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", ()=>{

    if (grids) {
        grids.forEach((items)=>{
            items.remove();
        })
    }
    createGrid(16, container);
    msgLog("The sketch is reset.")
})