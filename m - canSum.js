// Write a function that takes a canSum(target, nums) in which target is a number and
// numbs an array of numbers.
// Function should return true if it's possible to generate a sum of the target number with
// the numbers in the array. Numbers may be counted multiple times

const canSum = (target, nums = [], memo = {}) => {
  if (target === 0) return true;
  if (target < 0) return false;
  if (target in memo) return false;

  for (let n of nums) {
    const isLeft = target - n;
    const result = canSum(isLeft, nums, memo);

    if (result === false) {
      memo[isLeft] = result;
    }

    if (result === true) {
      return true;
    }
  }

  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));
