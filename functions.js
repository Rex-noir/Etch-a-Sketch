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
    else {
        return 30;
    }
    return size;
}
export {createHtmlElement, getInputValuebyId, checkSize}