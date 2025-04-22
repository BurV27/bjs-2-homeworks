"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let result = (Math.pow(b, 2) - 4 * a * c);
	if (result === 0) {
		arr[0] = (-b / (2 * a));
	} else if (result > 0) {
		arr[0] = (-b + Math.sqrt(result)) / (2 * a);
		arr[1] = (-b - Math.sqrt(result)) / (2 * a);
	} else {
		arr = []
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let transformPercent = (percent / 100) / 12;
	let bodyCredit = amount - contribution;
	let payment = bodyCredit * (transformPercent + (transformPercent / ((Math.pow((1 + transformPercent), countMonths) - 1))));
	let totalAmount = payment * countMonths
	return totalAmount.toFixed(2)
}