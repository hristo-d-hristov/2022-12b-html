document.getElementById("run").onclick = function() {
	const input = document.getElementById("input").value;
	const lines = input.split("\n");
	for (let i = 0; i < lines.length; i++) {
		let row = lines[i].split(" ");
		let x = Number(row[0]);
		let y = Number(row[1]);
		if (x == 0 || y == 0) {
			break;
		} else if (x > 0 && y > 0) {
			console.log("primeiro");
		} else if (x < 0 && y > 0) {
			console.log("segundo");
		} else if (x < 0 && y < 0) {
			console.log("terceiro");
		} else if (x > 0 && y < 0) {
			console.log("quarto");
		}
	}
}
