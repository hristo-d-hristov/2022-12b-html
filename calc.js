document.getElementById('buttonAdd').onclick = function() {
	let a = document.getElementById('inputA').valueAsNumber;
	let b = document.getElementById('inputB').valueAsNumber;
	document.getElementById('answer').innerHTML = a + b;
}