/* Advanced Practice 2 */

/**
 * Advanced Practice 2: mapping character to number
 */

function practice_2(input, mapping) {
  // your code here   https://stackoverflow.com/a/5915833
  input.forEach((element) => {
    let index = -1;
    index = input.indexOf("a");
    if (~index) {
      input[index] = mapping.a;
    }
    index = input.indexOf("b");
    if (~index) {
      input[index] = mapping.b;
    }
    index = input.indexOf("c");
    if (~index) {
      input[index] = mapping.c;
    }
  });
  return input;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(practice_2(arr, mapping)); // expected output: [1, 2, 3, 1, 2]
