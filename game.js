let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "green";
context.strokeStyle = "orange";
context.fillRect(10, 20, 10, 70);
context.strokeRect(50, 30, 70, 100);


console.log(canvas);
