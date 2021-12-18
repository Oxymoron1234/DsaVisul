let canvas = document.getElementById("canvas");
let tool = canvas.getContext("2d");
let download = document.getElementById("save")
let clear  = document.getElementById("clear")
let square = document.querySelector("#square")
let circle = document.querySelector("#circle")
let pencil = document.querySelector("#pencil")
let line = document.querySelector("#line")
let redo = document.querySelector("#redo")
let undo = document.querySelector("#undo")
let pencolor_red = document.querySelector("#red");
let pencolor_blue = document.querySelector("#blue");
let pencolor_green = document.querySelector("#green");
let pencil_col_cont = document.querySelectorAll(".bacground-clr")
let pencil_size = document.querySelector("#sizing")


let penColor = "red"
let erasercolor = "white"
let penWidth = pencil_size.value;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

download.addEventListener("click", (e) =>{
    let a = document.createElement("a")
    a.href = canvas.toDataURL();
    a.download = "board.jpg";
    a.click();
})
clear.addEventListener("click", (e) =>{
    tool.clearRect(0, 0, canvas.width, canvas.height);
}) 

let mousedown = false;

tool.strokeStyle = "red";
// tool.lineWidth = "3";

//mouse cordination
canvas.addEventListener("mousedown", (e) => {
    mousedown = true;
    beginpath({
        x: e.clientX,
        y: e.clientY
    });
}
)
canvas.addEventListener("mousemove", (e) => {
    if (mousedown) {
        draw_stroke({
            x: e.clientX,
            y: e.clientY
        })
    }
})
canvas.addEventListener("mouseup", (e) => {
    mousedown = false;
})
function beginpath(strokeobj) {
    tool.beginPath();
    tool.moveTo(strokeobj.x, strokeobj.y);

}
function draw_stroke(strokeobj) {
    tool.lineTo(strokeobj.x, strokeobj.y);
    tool.stroke();
}
pencolor_red.addEventListener("click", (e) => {

    penColor = "red";
    tool.strokeStyle = penColor;
})

pencolor_blue.addEventListener("click", (e) => {

    penColor = "blue";
    tool.strokeStyle = penColor;
})
pencolor_green.addEventListener("click", (e) => {

    penColor = "green";
    tool.strokeStyle = penColor;
})
pencil_size.addEventListener("change", (e) => {
    penWidth = pencil_size.value;
    tool.lineWidth = penWidth;
})
eraser.addEventListener("click", (e) => {
    let color = "white";
    tool.strokeStyle = color;
    tool.lineWidth = penWidth;
})
square.addEventListener("click",(e) => {
    let mysquare = document.createElement("div");
    mysquare.setAttribute("class", "fortheSquare");
    mysquare.innerHTML = `<div class="iamsquare"></div>`;

    document.body.appendChild(mysquare);

    mysquare.onmousedown = function(event){
        dragAndDrop(mysquare, event)
    }
    mysquare.ondragstart = function() {
        return false;
      };
})
circle.addEventListener("click",(e) => {
    let mycircle = document.createElement("div");
    mycircle.setAttribute("class", "fortheSquare");
    mycircle.innerHTML = `<div class="iamcircle"></div>`;

    document.body.appendChild(mycircle);

    mycircle.onmousedown = function(event){
        dragAndDrop(mycircle, event)
    }
    mycircle.ondragstart = function() {
        return false;
      };
})



