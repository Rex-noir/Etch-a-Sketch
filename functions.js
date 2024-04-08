//creating elements
function createHtmlElement(tagName, className, tagId){
    
    if (!tagName) return console.log("TagName not provided");
    
    let node = document.createElement(tagName);

    if (className) node.className = className;
    if(tagId) node.id = tagId;

    return node;
}
//getInputValue
function getInputValuebyId(id){
    let value = document.querySelector(`#${id}`).value;
    document.querySelector(`#${id}`).value = '';
    return value;
}
//checkSize 
function checkSize(size){

    if (size > 70){
        size = 70;
    }
    else if(size < 30){
        size = 30
    }

    return size;
}
//createMsg Log
function msgLog(text = 'something happened'){
    
    let tempPra = document.querySelector('.msgLog');
    if (tempPra) tempPra.remove();

    let msgContainer = document.querySelector('.message');

    let para = createHtmlElement('p', 'msgLog');
    para.textContent = text;
    msgContainer.appendChild(para);
}
//Resize
function resizeGrid (e){
    e.preventDefault();

    let sizeValue = getInputValuebyId('size');
    let items = document.querySelectorAll(".item");

    let size = checkSize(sizeValue);

    items.forEach(item => {

        item.style.width = `${size}px`;
        item.style.height = `${size}px`;

    })
    msgLog(`The Grids are resized to ${size}px * ${size}px.`);
}

//return random color
function getRandomColor(){

    let colors = [];
    
    for (let i = 0; i < 3; i++){

        let color = Math.floor(Math.random() * 256);
        colors.push(color);

    }

    return colors;
}

export {createHtmlElement, getInputValuebyId, checkSize, resizeGrid, msgLog, getRandomColor}