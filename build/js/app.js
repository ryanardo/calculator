(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
