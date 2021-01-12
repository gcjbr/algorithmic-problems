const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    memo[remainder] = result;
    if (Array.isArray(result)) {
      return [...result, num];
    }
  }

  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [7, 14]));
console.log(howSum(300, [7, 20]));
