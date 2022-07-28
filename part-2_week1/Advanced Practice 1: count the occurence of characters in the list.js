/* Advanced Practice 1 */

/**
 * Advanced Practice 1: count the occurence of characters in the list
 */

function practice_1(input) {
  // your code here   https://stackoverflow.com/a/47377879
  return {
    a: input.filter((x) => x === "a").length,
    b: input.filter((x) => x === "b").length,
    c: input.filter((x) => x === "c").length,
  };
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1)); // expected output: {'a':3, 'b':1, 'c':2}
