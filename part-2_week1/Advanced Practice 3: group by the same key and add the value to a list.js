/* Advanced Practice 3 */

/**
 * Advanced Practice 3: group by the same key and add the value to a list
 */

function practice_3(input) {
  // your code here
  let keyAResult = input.filter((input) => input.key === "a");
  let valueAResult = [];
  keyAResult.forEach((element) => {
    valueAResult.push(element.value);
  });
  let keyBResult = input.filter((input) => input.key === "b");
  let valueBResult = [];
  keyBResult.forEach((element) => {
    valueBResult.push(element.value);
  });
  let keyCResult = input.filter((input) => input.key === "c");
  let valueCResult = [];
  keyCResult.forEach((element) => {
    valueCResult.push(element.value);
  });
  return {
    a: valueAResult,
    b: valueBResult,
    c: valueCResult,
  };
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(practice_3(input3)); // expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}
