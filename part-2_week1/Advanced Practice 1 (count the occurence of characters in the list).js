/* Advanced Practice 1 */

/**
 * Advanced Practice 1: count the occurence of characters in the list
 */

function practice_1(input) {
  // your code here

  // default a b c version
  // https://stackoverflow.com/a/47377879
  // return {
  //   a: input.filter((x) => x === "a").length,
  //   b: input.filter((x) => x === "b").length,
  //   c: input.filter((x) => x === "c").length,
  // };

  // dynimanic version
  const uniqueElementArray = []; // ["a", "b", "c"]
  input.filter(function (element) {
    const index = uniqueElementArray.findIndex((x) => x == element);
    if (index <= -1) {
      uniqueElementArray.push(element);
    }
    return null;
  });

  const resultObject = {};
  for (let i = 0; i < uniqueElementArray.length; i++) {
    resultObject[uniqueElementArray[i]] = input.filter(
      (x) => x === uniqueElementArray[i]
    ).length; // https://stackoverflow.com/a/14234701
  }
  return resultObject;
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(
  "Advanced Practice 1: count the occurence of characters in the list"
);
console.log(practice_1(input1)); // expected output: {'a':3, 'b':1, 'c':2}
