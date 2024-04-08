import { createHtmlElement, getInputValuebyId, checkSize ,resizeGrid, msgLog, getRandomColor} from "./functions.js";

let totalGrid = 16; // meaning 16 * 16
let container = document.querySelector(".container");

//Random colors
let random = false;
let randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", (e)=>{
    if (random) {
        random = false;
        msgLog("Random color off");
    }
    else {
        random = true;
        msgLog("Random color on");
    }
   
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

//If the mouse is clicked and move
let isMouseDown = false;
mouseDownListener(grids);
function mouseDownListener(element){
    element.forEach((item)=>{
        item.addEventListener("mouseenter", mouseEnterFunction);
        item.addEventListener("mousedown", (e)=>{
            isMouseDown = true;
        })
        item.addEventListener("mousemove", (e)=>{
            if (isMouseDown){
            }
        })
        item.addEventListener("mouseup", (e)=>{
            isMouseDown = false;
            msgLog("mouse up")
            item.removeEventListener("mouseenter", mouseEnterFunction)
        })
    })

    element.forEach((item)=>{
        if(isMouseDown){
            item.addEventListener("mouseenter", mouseEnterFunction);
        }
    })
}
//adding Listener to mouseenter and mouseleave of the div

function mouseEnterFunction(e){
    if (isMouseDown){
        msgLog("Mousedown");
        let element = e.target;
    if (random){
        let colors = getRandomColor();
        element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    }
    else{
        element.style.backgroundColor = "black";
    }
    }
    else{msgLog("Mouse not down")}
    
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
    let grid = document.querySelectorAll(".container div");
    mouseDownListener(grid);
    msgLog("The sketch is reset.")
})