let pencil = document.querySelector("#pencil")
let line = document.querySelector("#line")
let redo = document.querySelector("#redo")
let undo = document.querySelector("#undo")
let kheecho = document.querySelector("#kheecho")
let pencolor_red = document.querySelector("#red");
let pencolor_blue = document.querySelector("#blue");
let pencolor_green = document.querySelector("#green");
let pencil_col_cont = document.querySelectorAll(".bacground-clr")
let pencil_size = document.querySelector("#sizing")
// let penColor = "red"
// let erasercolor = "white"
// let penWidth = pencil_size.value;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let mousedown = false;

// context.strokeStyle = "black";
// // context.lineWidth = "3";

// //mouse cordination

// kheecho.addEventListener("click", e => {
//      mysquare.style.width = mysquare.style.width*1.5;
// })
// pencil.addEventListener("click", (e) => {
//     context.strokeStyle = "black";
//     context.lineWidth = "1";
// })
// canvas.addEventListener("mousedown", (e) => {
//     mousedown = true;
      
     
//     beginpath({
//         x: e.clientX,
//         y: e.clientY 
//     });
// }
// )
// canvas.addEventListener("mousemove", (e) => {
//     if (mousedown) {
//         draw_stroke({
//             x: e.clientX ,
//             y: e.clientY 
//         })
//     }
// })
// canvas.addEventListener("mouseup", (e) => {
//     mousedown = false;
// })
// function beginpath(strokeobj) {
//     context.beginPath();
//     context.moveTo(strokeobj.x, strokeobj.y);

// }
// function draw_stroke(strokeobj) {
//     context.lineTo(strokeobj.x, strokeobj.y);
//     context.stroke();
// }
// pencolor_red.addEventListener("click", (e) => {

//     penColor = "red";
//     context.strokeStyle = penColor;
// })

// pencolor_blue.addEventListener("click", (e) => {

//     penColor = "blue";
//     context.strokeStyle = penColor;
// })
// pencolor_green.addEventListener("click", (e) => {

//     penColor = "green";
//     context.strokeStyle = penColor;
// })
// pencil_size.addEventListener("change", (e) => {
//     penWidth = pencil_size.value;
//     context.lineWidth = penWidth;
// })
// eraser.addEventListener("click", (e) => {
//     let color = "white";
//     context.strokeStyle = color;
//     context.lineWidth = penWidth * 5;
//     // context.lineWidth = "50";
// })
// let mysquare = document.createElement("div");
// square.addEventListener("click", (e) => {

//     mysquare.setAttribute("class", "fortheSquare");
//     mysquare.innerHTML = `<div class="iamsquare"></div>`;

//     document.body.appendChild(mysquare);
    

//     mysquare.onmousedown = function (event) {
//         dragAndDrop(mysquare, event)
//     }
//     mysquare.ondragstart = function () {
//         return false;
//     };
// })
// let mycircle = document.createElement("div");
// circle.addEventListener("click", (e) => {

//     mycircle.setAttribute("class", "fortheSquare");
//     mycircle.innerHTML = `<div class="iamcircle"></div>`;

//     document.body.appendChild(mycircle);

//     mycircle.onmousedown = function (event) {
//         dragAndDrop(mycircle, event)
//     }
//     mycircle.ondragstart = function () {
//         return false;
//     };
// })

