/* Assignment 4: Algorithm Practice
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. */

function twoSum(nums, target) {
  // your code here
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(target - nums[i]);
    if (index !== -1 && index !== i) {
      return [i, index];
    }
  }
}

/*
    For example:
        twoSum([2, 7, 11, 15], 9);
    Should returns:
        [0, 1]
    Because:
        nums[0] + nums[1] is 9
*/

console.log("Assignment 4: Algorithm Practice");
console.log(twoSum([1, 2, 8, 1], 3));
