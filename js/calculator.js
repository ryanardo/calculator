function Calculator(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
	// this.operator = op;
}

Calculator.prototype.addition = function (num1, num2) {
	var result = num1 + num2;
	return result;
};

Calculator.prototype.subtraction = function (num1, num2) {
	var result = num1 - num2;
	return result;
};

Calculator.prototype.multiplication = function (num1, num2) {
	var result = num1 * num2;
	return result;
};

Calculator.prototype.division = function (num1, num2) {
	var result = num1 / num2;
	return result;
};

exports.calculatorModule = Calculator;
