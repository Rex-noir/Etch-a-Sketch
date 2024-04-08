//creating elements
function createHtmlElement(tagName, className, tagId){
    
    if (!tagName) return console.log("TagName not provided");
    
    let node = document.createElement(tagName);

    if (className) node.className = className;
    if(tagId) node.id = tagId;

    return node;
}
//selecting elements

export {createHtmlElement}