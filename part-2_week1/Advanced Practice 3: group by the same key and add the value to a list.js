/* Advanced Practice 3 */

/**
 * Advanced Practice 3: group by the same key and add the value to a list
 */

function practice_3(input) {
  // your code here
  // let keyAuniqueKeyObjectArray = input.filter((input) => input.key === "a");
  // let valueAuniqueKeyObjectArray = [];
  // keyAuniqueKeyObjectArray.forEach((element) => {
  //   valueAuniqueKeyObjectArray.push(element.value);
  // });
  // let keyBuniqueKeyObjectArray = input.filter((input) => input.key === "b");
  // let valueBuniqueKeyObjectArray = [];
  // keyBuniqueKeyObjectArray.forEach((element) => {
  //   valueBuniqueKeyObjectArray.push(element.value);
  // });
  // let keyCuniqueKeyObjectArray = input.filter((input) => input.key === "c");
  // let valueCuniqueKeyObjectArray = [];
  // keyCuniqueKeyObjectArray.forEach((element) => {
  //   valueCuniqueKeyObjectArray.push(element.value);
  // });
  // return {
  //   a: valueAuniqueKeyObjectArray,
  //   b: valueBuniqueKeyObjectArray,
  //   c: valueCuniqueKeyObjectArray,
  // };

  // https://stackoverflow.com/a/51537887
  const resArr = []; // ["a", "b", "c"]
  input.filter(function (item) {
    let i = resArr.findIndex((x) => x.key == item.key);
    if (i <= -1) {
      resArr.push(item);
    }
    return null;
  });
  const uniqueKeyObjectArray = []; // [ { key: "c", value: 2 }, { key: "c", value: 5 } ]
  resArr.forEach((element) => {
    uniqueKeyObjectArray.push(element.key);
  });
  const resultObject = {};
  for (let i = 0; i < uniqueKeyObjectArray.length; i++) {
    const uniqueKeyArray = []; // [ 2, 5 ]
    let sameKeyObjectArray = input.filter(
      (input) => input.key === uniqueKeyObjectArray[i]
    );
    sameKeyObjectArray.forEach((element) => {
      uniqueKeyArray.push(element.value);
    });
    resultObject[uniqueKeyObjectArray[i]] = uniqueKeyArray;
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

console.log(practice_3(input3)); // expected output: {'a': [3,3], 'b': [1], 'c': [2,5]}
