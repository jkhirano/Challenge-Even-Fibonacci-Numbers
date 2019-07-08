/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  debugger;
  let sum = 2;

  // do your work here

  let first = 1;
  let second = 2;
  let current = 3;
  for (let i = 2; current <= maxFibValue; i++) {
    current = first + second;
    first = second;
    second = current;

    if (current % 2 === 0) {
      sum += current;
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  let highest = 0;

  //define your base case, validate your input

  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
