let optionsCont = document.querySelector(".options-icon")
let toolCont = document.querySelector(".tools-cont")
let itemCont = document.querySelector(".item-cont")
let resizable = document.querySelector("#sizing")
let resizeBar = document.querySelector("#resize1")
let bgColor = document.querySelector(".bacground-clr")
let borderBar = document.querySelector("#border")
let sticky = document.querySelector("#text")
let colourSelector = document.querySelector(".js-color-picker")
let download = document.getElementById("save")
let clear = document.getElementById("clear")
let eraser = document.getElementById("eraser")
let opFlag = true;
let resizeFlag = false;
let bgColorFlag = false;
optionsCont.addEventListener("click", (e)=> {
    opFlag = !opFlag;
    if (opFlag) {
        openTool();
    }else{
        closeTool();
    }
})
//for opening and closing of the toolbar items 
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
    resizable.style.display= "none"
    bgColor.style.display="none"
}
//resize and border k icon ka aana jana 
resizeBar.addEventListener("click", (e) =>{
    resizeFlag = !resizeFlag;
    if (resizeFlag) {
        resizable.style.display = "block"
      //  colourSelector.style.display = "block"
    }else{
        resizable.style.display = "none"
       // colourSelector.style.display = "none"
    }
} )
borderBar.addEventListener("click", (e) =>{
    bgColorFlag = !bgColorFlag;
    if(bgColorFlag){
        bgColor.style.display="flex"
        //colourSelector.style.display = "block"
    }else{
       bgColor.style.display = "none"
       //colourSelector.style.display = "none"
    }
} )

sticky.addEventListener("click", (e) =>{
    let stickyCont  = document.createElement("div")
    stickyCont.setAttribute("class", "notes")
    stickyCont.innerHTML = `
    <div class="notes-header-cont">
        <div class="mini"></div>
        <div class="removeNotes"></div>
    </div>
    <div class="notes-cont">
            <textarea name="" id="" ></textarea>
    </div>
    `
    let mini = stickyCont.querySelector(".mini")
    let rem = stickyCont.querySelector(".removeNotes")
    noteActions(mini, rem, stickyCont);
    document.body.appendChild(stickyCont)
    stickyCont.onmousedown = function(event){
        dragAndDrop(stickyCont , event)
    }
    stickyCont.ondragstart = function() {
        return false;
      };
})
//================================================================
    function noteActions(mini, rem, stickyCont) {
         rem.addEventListener("click", e => {stickyCont.remove()})
         mini.addEventListener("click" , (e)=>{
                let noteCont = stickyCont.querySelector(".notes-cont")
                let disp = getComputedStyle(noteCont).getPropertyValue("display")
                if (disp === "none") {
                    noteCont.style.display = "block"
                     
                }else{
                    noteCont.style.display = "none"
                    
                }
         })
    }  
 
function dragAndDrop(ele , event) {
     
        let shiftX = event.clientX - ele.getBoundingClientRect().left;
        let shiftY = event.clientY - ele.getBoundingClientRect().top;
      
        ele.style.position = 'absolute';
        ele.style.zIndex = 1000;
        
      
        moveAt(event.pageX, event.pageY);
      
        // moves the ball at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          ele.style.left = pageX - shiftX + 'px';
          ele.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the ball, remove unneeded handlers
        ele.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          ele.onmouseup = null;
        };        
}

//===========================canvas suru =================================================================
download.addEventListener("click", (e) => {
    let a = document.createElement("a")
    a.href = document.toDataURL();
    a.download = "board.jpg";
    a.click();
})
clear.addEventListener("click", (e) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // mycircle.style.display = "none";
    // mysquare.style.display = "none"
})
eraser.addEventListener("click", (e) => {
    let color = "white";
    context.strokeStyle = color;
    context.lineWidth = lineWidthRange.value;
    // context.lineWidth = "50";
})

