/* Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
Reminder: you can't use built-in Math.max() or sort() to complete this assignment. */

function max(numbers) {
  // your code here
  if (numbers.length > 0) {
    let maxNumber = numbers[0];
    numbers.forEach((number) => {
      if (number > maxNumber) {
        maxNumber = number;
      }
    });
    return maxNumber;
  } else {
    return "no numbers in array";
  }
}

console.log("Assignment 1: Function and Array");
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
