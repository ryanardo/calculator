function Calculator(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
	// this.operator = op;
}

Calculator.prototype.calculation = function (num1, num2, operator) {
	if (operator === "add") {
		return num1 + num2;
	} else if (operator === "subtract") {
		return num1 - num2;
	} else if (operator === "multiply") {
		return num1 * num2;
	} else if (operator === "divide") {
		return num1 / num2;
	} else {
		console.log("ERROR! NO calculation  completed.");
	}
}

exports.calculationModule = Calculator;
