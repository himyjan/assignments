/* Advanced Practice 2 */

/**
 * Advanced Practice 2: mapping character to number
 */

function practice_2(input, mapping) {
  // your code here

  // default a b c version
  // https://stackoverflow.com/a/5915833
  // input.forEach((element) => {
  //   const index = input.indexOf("a");
  //   if (~index) {
  //     input[index] = mapping.a;
  //   }
  //   index = input.indexOf("b");
  //   if (~index) {
  //     input[index] = mapping.b;
  //   }
  //   index = input.indexOf("c");
  //   if (~index) {
  //     input[index] = mapping.c;
  //   }
  // });

  // dynimanic version
  const uniqueElementArray = []; // ["a", "b", "c"]
  input.filter(function (element) {
    const index = uniqueElementArray.findIndex((x) => x == element);
    if (index <= -1) {
      uniqueElementArray.push(element);
    }
    return null;
  });

  for (let i = 0; i < uniqueElementArray.length; i++) {
    input.forEach(() => {
      const index = input.indexOf(uniqueElementArray[i]);
      if (~index) {
        input[index] = mapping[uniqueElementArray[i]];
      }
    });
  }
  return input;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};

console.log("Advanced Practice 2: mapping character to number");
console.log(practice_2(arr, mapping)); // expected output: [1, 2, 3, 1, 2]
