/* Assignment 2: Object
Complete the function below to calculate the result of the passing object. */

function calculate(args) {
  // your code here
  if (args.op == "+") {
    return args.n1 + args.n2;
  } else if (args.op == "-") {
    return args.n1 - args.n2;
  } else {
    return "Not supported";
  }
}

console.log("Assignment 2: Object");
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'
