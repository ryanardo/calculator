var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function () {
	$('#calculator-form').submit(function (event) {
		event.preventDefault();
		var num1 = parseInt($('#num1').val());
		var num2 = parseInt($('#num2').val());
		var operator = $('#operator').val();
		var calculator = new Calculator(num1, num2, operator);
		var calculation = calculator.calculation(calculator);

		$('#output').text(calculator.calculation(num1, num2, operator));

	});
});

$(document).ready(function () {
	$('#time').text(moment());
});
