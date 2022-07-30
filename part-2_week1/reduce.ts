// https://stackoverflow.com/a/56454282
// Reduce() is.. https://www.youtube.com/watch?v=-LFjnY1PEDA

// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).

// reduce 在循環各個陣列裡從左到右各元素的過程中 元素透過函式計算後 將元素更替為函式計算結果
// reduce 的運作像是會一一執行函式的 Array.forEach()；將各個陣列裡從左到右各元素，進行函式計算
// reduce 的參數是一個包含有（累加器,陣列元素帶入參數）的函式 可用箭頭函式在reduce參數中
// 'accumulator' acc 累加器 類似 int sum 變數 負責類似 Array.forEach((value) => sum += value；);
// 'currentValue' val 陣列元素帶入參數
// reduce currentValue 可搭配 解構 (...Array) = 去掉[]的Array ,使用...currentValue
// 累加器在沒有額外設定初始值的情況下其值會預設為陣列索引0位置的數值

// With JavaScript
let array = [0, 1, 2, 3];
function sum(acc, val) {
  return acc + val;
} // => can change to (acc,val)=>acc+val
function forReduce(array) {
  let acc = 0;
  for (let val of array) {
    acc += val;
  }
} // => can change to (acc,val)=>
let answer;
answer = forReduce(array); // answer is 6
answer = array.reduce(sum); // answer is 6

//---
const array2 = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(array2); // answer is 6

const array3 = [0, 1, 2, 3].reduce((acc, val) => acc + val);
console.log(array3);

// With TypeScript
const array4 = [0, 1, 2, 3].reduce((acc, val) => acc + val);
console.log(array4);

// With TypeScript generics
class Person {
  constructor(public Name: string, public Age: number) {}
}

const list = new Array<Person>();
list.push(new Person("Baby", 1));
list.push(new Person("Toddler", 2));
list.push(new Person("Teen", 14));
list.push(new Person("Adult", 25));

const oldest_person = list.reduce((a, b) => (a.Age > b.Age ? a : b));
console.log(oldest_person.Name);
