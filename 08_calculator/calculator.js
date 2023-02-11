const add = (x,y) => x+y;

const subtract = (x,y) => x-y;

const sum = (arr) => {
  return arr.reduce((total, value) => {
    return total + value;
  } , 0);
};

const multiply = (arr) => arr.reduce((total, value) => total * value, 1);

const power = (x, pow) => Math.pow(x,pow);

const factorial = (x) => {
  if (x === 0) return 1;

  let total = x;
  for (let i = x - 1; i > 0; i--)
  {
      total *= i;
  }

  return total;
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
