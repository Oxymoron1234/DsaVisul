const canvas = document.querySelector( '.js-paint' );
const context = canvas.getContext( '2d' );
const colorPicker = document.querySelector( '.js-color-picker');
const lineWidthRange = document.querySelector( '.js-line-range' );
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineCap = 'round';
    likho()
 //================================================================pencile kicho ==============   
    function likho(){
        context.strokeStyle = "black";
        colorPicker.addEventListener( 'change', event => {
            context.strokeStyle = event.target.value; 
        } );
        lineWidthRange.addEventListener( 'input', event => {
            var width = event.target.value;
            context.lineWidth = width;
        } );
        let x = 0, y = 0;
        let isMouseDown = false;
        const stopDrawing = () => { isMouseDown = false; }
        const startDrawing = event => {
            isMouseDown = true;   
           [x, y] = [event.offsetX, event.offsetY];  
        }
        const drawLine = event => {
            if ( isMouseDown ) {
                const newX = event.offsetX;
                const newY = event.offsetY;
                context.beginPath();
                context.moveTo( x, y );
                context.lineTo( newX, newY );
                context.stroke();
                //[x, y] = [newX, newY];
                x = newX;
                y = newY;
            }
        }
        canvas.addEventListener( 'mousedown', startDrawing );
        canvas.addEventListener( 'mousemove', drawLine );
        canvas.addEventListener( 'mouseup', stopDrawing );
        canvas.addEventListener( 'mouseout', stopDrawing );
    }

pencil.addEventListener("click", likho )
//======================================circle bano===================================================
function circleBanao(){
    colorPicker.addEventListener( 'change', event => {
        context.strokeStyle = event.target.value; 
    } );
    lineWidthRange.addEventListener( 'input', event => {
        const width = event.target.value;
        context.lineWidth = width;
    } );
    let x = 0, y = 0;
    let isMouseDown = false;
    const stopDrawing = () => { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;   
       [x, y] = [event.offsetX, event.offsetY];  
    }
    const drawLine = event => {
        if ( isMouseDown ) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo( x, y );
            context.lineTo( newX, newY );
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
        }
    }
    canvas.addEventListener( 'mousedown', startDrawing );
    canvas.addEventListener( 'mousemove', drawLine );
    canvas.addEventListener( 'mouseup', stopDrawing );
    canvas.addEventListener( 'mouseout', stopDrawing );
}
//======================================rectangle bano===================================================
function rectangleBanao(){
    colorPicker.addEventListener( 'change', event => {
        context.strokeStyle = event.target.value; 
    } );
    lineWidthRange.addEventListener( 'input', event => {
        const width = event.target.value;
        context.lineWidth = width;
    } );
    let x = 0, y = 0;
    let isMouseDown = false;
    const stopDrawing = () => { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;   
       [x, y] = [event.offsetX, event.offsetY];  
    }
    const drawLine = event => {
        if ( isMouseDown ) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo( x, y );
            context.lineTo( newX, newY );
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
        }
    }
    canvas.addEventListener( 'mousedown', startDrawing );
    canvas.addEventListener( 'mousemove', drawLine );
    canvas.addEventListener( 'mouseup', stopDrawing );
    canvas.addEventListener( 'mouseout', stopDrawing );
}
//======================================line bano===================================================
function lineBanao(){
    colorPicker.addEventListener( 'change', event => {
        context.strokeStyle = event.target.value; 
    } );
    lineWidthRange.addEventListener( 'input', event => {
        const width = event.target.value;
        context.lineWidth = width;
    } );
    let x = 0, y = 0;
    let isMouseDown = false;
    const stopDrawing = () => { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;   
       [x, y] = [event.offsetX, event.offsetY];  
    }
    const drawLine = event => {
        if ( isMouseDown ) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo( x, y );
            context.lineTo( newX, newY );
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
        }
    }
    canvas.addEventListener( 'mousedown', startDrawing );
    canvas.addEventListener( 'mousemove', drawLine );
    canvas.addEventListener( 'mouseup', stopDrawing );
    canvas.addEventListener( 'mouseout', stopDrawing );
}