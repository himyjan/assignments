/* Advanced Practice 3 */

/**
 * Advanced Practice 3: group by the same key and add the value to a list
 */

function practice_3(input) {
  // your code here

  // result a b c version
  // const keyAuniqueKeyObjectArray = input.filter((input) => input.key === "a");
  // const valueAuniqueKeyObjectArray = [];
  // keyAuniqueKeyObjectArray.forEach((element) => {
  //   valueAuniqueKeyObjectArray.push(element.value);
  // });
  // const keyBuniqueKeyObjectArray = input.filter((input) => input.key === "b");
  // const valueBuniqueKeyObjectArray = [];
  // keyBuniqueKeyObjectArray.forEach((element) => {
  //   valueBuniqueKeyObjectArray.push(element.value);
  // });
  // const keyCuniqueKeyObjectArray = input.filter((input) => input.key === "c");
  // const valueCuniqueKeyObjectArray = [];
  // keyCuniqueKeyObjectArray.forEach((element) => {
  //   valueCuniqueKeyObjectArray.push(element.value);
  // });
  // return {
  //   a: valueAuniqueKeyObjectArray,
  //   b: valueBuniqueKeyObjectArray,
  //   c: valueCuniqueKeyObjectArray,
  // };

  // dynimanic version
  // https://stackoverflow.com/a/51537887
  const uniqueElementArray = []; // ["a", "b", "c"]
  input.filter(function (element) {
    const index = uniqueElementArray.findIndex((x) => x.key == element.key);
    if (index <= -1) {
      uniqueElementArray.push(element);
    }
    return null;
  });

  const uniqueKeyObjectArray = []; // [ { key: "c", value: 2 }, { key: "c", value: 5 } ]
  uniqueElementArray.forEach((element) => {
    uniqueKeyObjectArray.push(element.key);
  });

  const resultObject = {}; // {'a': [3,3], 'b': [1], 'c': [2,5]}
  for (let i = 0; i < uniqueKeyObjectArray.length; i++) {
    const uniqueKeyArray = []; // [ 2, 5 ]
    const sameKeyObjectArray = input.filter(
      (input) => input.key === uniqueKeyObjectArray[i]
    );
    sameKeyObjectArray.forEach((element) => {
      uniqueKeyArray.push(element.value);
    });
    resultObject[uniqueKeyObjectArray[i]] = uniqueKeyArray; // https://stackoverflow.com/a/14234701
  }
  return resultObject;
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(
  "Advanced Practice 3: group by the same key and add the value to a list"
);
console.log(practice_3(input3)); // expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}
