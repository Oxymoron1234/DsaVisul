let optionsCont = document.querySelector(".options-icon")
let toolCont = document.querySelector(".tools-cont")
let itemCont = document.querySelector(".item-cont")
let opFlag = true;
optionsCont.addEventListener("click", (e)=> {
    opFlag = !opFlag;
    if (opFlag) {
        openTool();
    }else{
        closeTool();
    }

})

function openTool() {
    let toolsBox = optionsCont.children[0];
    toolsBox.classList.remove("fa-times")
    toolsBox.classList.add("fa-bars")
    toolCont.style.display="flex"
    itemCont.style.display="flex"
}
function closeTool() {
    let toolsBox = optionsCont.children[0];
    toolsBox.classList.remove("fa-bars")
    toolsBox.classList.add("fa-times")
    toolCont.style.display="none"
    itemCont.style.display="none"
}