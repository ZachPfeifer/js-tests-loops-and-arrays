// 1. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  return (n2 - n1 + 1) * (n2 + n1) / 2;

}
function sumAll(arr) {
  return rangeTotal(Math.n1(...arr), Math.n2(...arr));
}


// ------------------------------------------


// 2. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  var factorial = 1;

  for (var i = 1; i <= num; i++) {
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    factorial = factorial * i;
  }
  return factorial;
}


// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {

}