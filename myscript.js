console.log(document.querySelectorAll("button")[1]);

document.querySelector("button").onclick = function () {
    let a = parseInt(document.getElementById("inputA").value);
    let b = parseInt(document.getElementById("inputB").value);
    document.getElementById("demo").innerHTML = a + b;
    console.log(document);
}
