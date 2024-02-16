const add = function(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

const subtract = function(number1, number2) {
	let difference = number1 - number2;
  return difference;
};

const sum = function(array=[]) {
  if (!array || array.length === 0) {
    return 0;
  } else {
  let result = array.reduce((a, b) => a + b)
  return result;
  }
};

const multiply = function(array=[]) {
  let result = array.reduce((a, b) => a * b)
  return result;
};

const power = function(number1, number2) {
  let result = Math.pow(number1, number2)
        return result;
};

const factorial = function(n) {
  let f = [];
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n-1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
