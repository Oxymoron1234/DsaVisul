const colorPicker = document.querySelector('.js-color-picker');
const lineWidthRange = document.querySelector('.js-line-range');
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
let line = document.querySelector("#line")
let redo = document.querySelector("#redo")
let undo = document.querySelector("#undo")
let sticky = document.querySelector("#text")
const canvas = document.querySelector('.js-paint');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineCap = 'round';
var iscircle = false, isrect = false, isline = false;
const mouse = {
    x: undefined,
    y: undefined,
    radius: undefined
}
colorPicker.addEventListener('change', event => {
    context.strokeStyle = event.target.value;
});
lineWidthRange.addEventListener('input', event => {
    var width = event.target.value;
    context.lineWidth = width;
    mouse.radius = width
});
likho()
let tracker = []
let index = 0;
let url = undefined;
//================================================================pencile kicho ==============   
function likho() {
    context.globalCompositeOperation = 'source-over'
    iscircle = false;
    isrect = false; isline = false;
    context.strokeStyle = "black"
    let x = 0, y = 0;
    let isMouseDown = false;
    function stopDrawing() { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;
        [x, y] = [event.offsetX, event.offsetY];
    }
    const drawLine = event => {
        if (isMouseDown) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(newX, newY);
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
        }
    }
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', drawLine);
    canvas.addEventListener('mouseup', e => {
        stopDrawing()
        url = canvas.toDataURL()
        tracker.push(url)
        index = tracker.length - 1;
    });
    canvas.addEventListener('mouseout', stopDrawing);
}

pencil.addEventListener("click", likho)
//======================================circle bano===================================================

function circleBanao() {
    isrect = false; isline = false;
    context.strokeStyle = "black"
    canvas.addEventListener("click", e => {
        mouse.x = e.x;
        mouse.y = e.y;
        if (iscircle) {
            cir()
            url = canvas.toDataURL()
            tracker.push(url)
            index = tracker.length - 1;
        }

    })
    function cir() {
        context.lineWidth = 1;
        context.beginPath();
        context.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        context.stroke();

    }
}
circle.addEventListener("click", function () { circleBanao(), iscircle = true })
//======================================rectangle bano===================================================
function rectangleBanao() {
    iscircle = false; isline = false;
    context.strokeStyle = "black";
    canvas.addEventListener("click", e => {
        mouse.x = e.x;
        mouse.y = e.y;
        if (isrect) {
            rec()
            url = canvas.toDataURL()
            tracker.push(url)
            index = tracker.length - 1;
        }
    })
    function rec() {
        context.beginPath();
        context.lineWidth = 2;
        context.rect(mouse.x, mouse.y, mouse.radius * 4, mouse.radius * 2);
        context.stroke();
    }
}
square.addEventListener("click", function () { rectangleBanao(), isrect = true })
//======================================line bano===================================================
function lineBanao() {
    context.strokeStyle = "black";
    let x = 0, y = 0;
    let isMouseDown = false;
    isrect = false; iscircle = false;
    const stopDrawing = () => { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;
        [x, y] = [event.offsetX, event.offsetY];
        context.beginPath();
        context.moveTo(x, y);
    }
    const drawLine = event => {
        if (isMouseDown) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.lineTo(newX, newY);
            context.stroke();
            //[x, y] = [newX, newY];
            // x = newX;
            // y = newY;
        }
    }

    canvas.addEventListener('mousedown', startDrawing);
    // canvas.addEventListener( 'mousemove', drawLine );
    canvas.addEventListener('mouseup', e => {
        drawLine
        url = canvas.toDataURL()
        tracker.push(url)
        index = tracker.length - 1;
    });
    canvas.addEventListener('mouseout', stopDrawing);
}
line.addEventListener("click", function () { lineBanao() })


//====================================ab bus undo redo kr doo ==========================
undo.addEventListener("click", (e) => {
    if (index > 0) {
        index--;
    }
    let trackerObj = {
        trackValue: index,
        tracker
    }
    undoRedoTracker(trackerObj)
})
redo.addEventListener("click", (e) => {
    if (index < tracker.length - 1) {
        index++;
    }
    let trackerObj = {
        trackValue: index,
        tracker
    }
    undoRedoTracker(trackerObj)
})

function undoRedoTracker(trackerObj) {
    index = trackerObj.trackValue
    tracker = trackerObj.tracker
    let img = new Image();
    let url = tracker[index];
    img.src = url;
    img.onload = (e) => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
}
//============================Abc likh k dikhao =============================
function abcLikho() {
    iscircle = false, isrect = false, isline = false;
    var mouseX = 0;
    var mouseY = 0;
    var startingX = 0;
    var undoList = [];
    var recentWord = [];
    function saveStatus() {
        undoList.push(canvas.toDataURL())
    }
    saveStatus();
    function undo() {
        undoList.pop()
        var imgData = undoList[undoList.length - 1]
        var image = new Image();
        image.src = imgData
        image.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(image, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height)
        }
    }

    canvas.addEventListener("click", function (e) {
        mouseX = e.pageX - canvas.offsetLeft;
        mouseY = e.pageY - canvas.offsetTop;
        startingX = mouseX;
        recentWord = []
        return false
    }, false);
    document.addEventListener("keydown", function (e) {
        context.font = `${mouse.radius}px Arial`;
        context.font.color = context.strokeStyle.color;
        console.log(e.keyCode)
        if (e.keyCode === 8) {
            if (undoList.length > 0) {
                undo()
                recentWord = recentWord[recentWord.length - 1];
                mouseX -= context.measureText(recentWord).width;
                recentWord.pop();
            }

        }
        else if (e.keyCode === 13) {    //enter pressed
            mouseX = startingX;
            mouseY += 20;
        } else {
            context.fillText(e.key, mouseX, mouseY);
            mouseX += context.measureText(e.key).width;
            saveStatus();
            recentWord.push(e.key);
        }

    }, false);
}
sticky.addEventListener("click", (e) => {
    abcLikho()
})
