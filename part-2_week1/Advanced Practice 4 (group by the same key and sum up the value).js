/* Advanced Practice 4 */

/**
 * Advanced Practice 4: group by the same key and sum up the value
 */

function practice_4(input) {
  // your code here

  // result a b c version
  // let uniqueSum = 0; // (3+3) (1) (2+5)
  // const keyAuniqueKeyObjectArray = input.filter((input) => input.key === "a");
  // uniqueSum = 0;
  // keyAuniqueKeyObjectArray.forEach((element) => {
  //   uniqueSum += element.value;
  // });
  // const uniqueSumA = uniqueSum;

  // const keyBuniqueKeyObjectArray = input.filter((input) => input.key === "b");
  // uniqueSum = 0;
  // keyBuniqueKeyObjectArray.forEach((element) => {
  //   uniqueSum += element.value;
  // });
  // const uniqueSumB = uniqueSum;

  // const keyCuniqueKeyObjectArray = input.filter((input) => input.key === "c");
  // uniqueSum = 0;
  // keyCuniqueKeyObjectArray.forEach((element) => {
  //   uniqueSum += element.value;
  // });
  // const uniqueSumC = uniqueSum;

  // return {
  //   a: uniqueSumA,
  //   b: uniqueSumB,
  //   c: uniqueSumC,
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
    let uniqueSum = 0; // (3+3) (1) (2+5)
    const sameKeyObjectArray = input.filter(
      (input) => input.key === uniqueKeyObjectArray[i]
    );
    sameKeyObjectArray.forEach((element) => {
      uniqueSum += element.value;
    });
    resultObject[uniqueKeyObjectArray[i]] = uniqueSum; // https://stackoverflow.com/a/14234701
  }
  return resultObject;
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log("Advanced Practice 4: group by the same key and sum up the value");
console.log(practice_4(input4)); // expected output: {'a': 6, 'b': 1, 'c': 7}
