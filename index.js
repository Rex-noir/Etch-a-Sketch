import { createHtmlElement, getInputValuebyId, checkSize ,resizeGrid, msgLog, getRandomColor} from "./functions.js";

let erase = false;
let originalDimensions = 30;
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
            divColum.style.width = `${originalDimensions}px`; // Set width to original size
            divColum.style.height = `${originalDimensions}px`; // Set height to original size
            divRow.appendChild(divColum);
    
        }
        container.appendChild(divRow);
    }
}

//Resize button handler

let resizeButton = document.querySelector("form");
resizeButton.addEventListener("submit", (e)=>{
    originalDimensions = resizeGrid(e);
});

//If the mouse is clicked and move
let isMouseDown = false;
mouseDownListener(grids);
function mouseDownListener(element){
    element.forEach((item)=>{
        item.addEventListener("mouseenter", mouseEnterFunction);
        item.addEventListener("dblclick", mouseEnterFunction);

        item.addEventListener("mousedown", (e)=>{
            isMouseDown = true;
        })
        item.addEventListener("mouseup", (e)=>{
            isMouseDown = false;
            msgLog("mouse up")
            item.removeEventListener("mouseenter", mouseEnterFunction)
        })
    })
    container.addEventListener("mouseleave", (e)=>{
        isMouseDown = false;
    })
}
//adding Listener to mouseenter and mouseleave of the div

function mouseEnterFunction(e){
    if (isMouseDown || e.type == 'dblclick'){
        msgLog("Mousedown");
        if (e.type == 'dblclick') {
            isMouseDown = true;
        }

        let element = e.target;
        if (erase) element.style.backgroundColor = "white";
        else{
            if (random){
                let colors = getRandomColor();
                element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
            }
            else {
                element.style.backgroundColor = "black";
            }
        }
    }
    else{msgLog("Mouse not down")}
    
}
//resetButton
let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", ()=>{
    console.log(originalDimensions);
    if (grids) {
        grids.forEach((item)=>{
            item.removeEventListener("mouseenter", mouseEnterFunction);
            item.removeEventListener("mousedown", mouseEnterFunction);
            item.removeEventListener("mouseup", mouseEnterFunction);
            item.removeEventListener("mousemove", mouseEnterFunction);
        })

        container.innerHTML = '';
    }
    createGrid(totalGrid, container);
    let grid = document.querySelectorAll(".container div");
    mouseDownListener(grid);
    // msgLog("The sketch is reset.")
})

//erase BUtton 
let eraseButton =document.querySelector("#eraseButton");
eraseButton.addEventListener("click", (e)=>{
    
    if (erase){
        erase = false;
        msgLog("Erase Button is disabled")
    }
    else {
        erase = true;
        msgLog("Erase Button is enabled")
    }
})