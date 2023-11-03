const add = function(x, y) {
	 return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  let result = 0
	for (let num of array) {
    result += num;
  }
  return result;
};

const multiply = function(array) {
  let result = 1
	for (let num of array) {
    result *= num;
  }
  return result;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	let result = 1;
  for (let i =1;i <= num; i++) {
    if (i == 0) {
      result = 1;
    } else {
      result *= i;
    }
  }
  return result;
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
