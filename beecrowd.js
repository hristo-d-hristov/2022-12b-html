document.getElementById("run").onclick = function() {
	const input = document.getElementById("input").value;
	const rows = input.split('\n');
	const row0 = rows[0];
	const row1 = rows[1];
	const row0nums = row0.split(' ');
	const row1nums = row1.split(' ');
	const item0quantity = Number(row0nums[1]);
	const item0price = Number(row0nums[2]);
	const item1quantity = Number(row1nums[1]);
	const item1price = Number(row1nums[2]);
	let result = item0quantity * item0price + item1quantity * item1price;
	result = result.toFixed(2);
	result = "VALOR A PAGAR: R$ " + result;
	console.log(result);
}
