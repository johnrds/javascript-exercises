const add = function(intOne, intTwo) {
	return intOne+intTwo;
};

const subtract = function(intOne, intTwo) {
	return intOne - intTwo;
};

const sum = function(array) {
  let result = 0;
  for(number of array){
    result += number;
  };
  return result;
};

const multiply = function(array) {
  let result = 1;
  for(number of array){
    result *= number;
  };
  return result;
};

const power = function(intOne, intTwo) {
	return intOne**intTwo;
};

const factorial = function(int) {
  if (int ===0) return 1;

  let result = 1;
  for(let i=1; i<=int; i++){
    result *= i;
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
