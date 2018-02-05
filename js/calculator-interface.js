var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function () {
	$('#calculator-form').submit(function (event) {
		event.preventDefault();
		var num1 = parseInt($('#num1').val());
		var num2 = parseInt($('#num2').val());
		var operator = $('#operator').val();
		var result;
		var calc = new Calculator(num1, num2);
		// var newCalculator = new Calculator(num1, num2);
		// var calculateAddition = newCalculator.addition(num1, num2);

		// var addition = function (num1, num2) {
		//
		// }

		var calculation = function (num1, num2) {
			if (operator === "add") {
				var result = calc.addition(num1, num2);
				return result;
			} else if (operator === "subtract") {
				var result = calc.subtraction(num1, num2);
				return result;
			} else if (operator === "multiply") {
				var result = calc.multiplication(num1, num2);
				return result;
			} else if (operator === "divide") {
				var result = calc.division(num1, num2);
				return result;
			} else {
				console.log("ERROR! NO calculation  completed.");
			}
		}

		$('#output').text(calculation(num1, num2));
	});
});
