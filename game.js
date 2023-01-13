let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqx = 50;
let sqy = 50;
let herosqx = 5;
let herosqy = 2;
let img = new Image();
img.src = "img/whale.png";

function drawEmptyGrid() {
    for(let i = 0; i < canvas.height / sqy; i++) {
        for(let j = 0; j < canvas.width / sqx; j++) {
            context.fillStyle = "white";
            context.fillRect(sqx * j, sqy * i, sqx, sqy);
            context.strokeRect(sqx * j, sqy * i, sqx, sqy);
        }
    }
}

drawEmptyGrid();

canvas.onclick = function(e) {
    let x = e.clientX;
    let y = e.clientY;
    herosqx = Math.floor(x / sqx);
    herosqy = Math.floor(y / sqy);
    drawEmptyGrid();
    context.fillStyle = "black";
    context.drawImage(img, sqx * herosqx, sqy * herosqy , sqx, sqy);
}

/*
context.fillStyle = "green";
context.strokeStyle = "orange";
context.fillRect(10, 20, 10, 70);
context.strokeRect(50, 30, 70, 100);
*/
