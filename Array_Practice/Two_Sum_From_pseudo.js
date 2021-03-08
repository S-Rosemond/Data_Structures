// From Pseudo code
function twoSum(nums, target) {
  let hash = new Map();
  let found = null;

  // need to prevent duplicate entry here!! todo
  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) hash.set(target - nums[i], i);

    if (hash.has(nums[i])) found = [hash.get(nums[i]), i];
  }

  return found;
}

const [arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7] = [
  [],
  [7],
  [1, 2, 3, 4],
  [7, 20, 55, 87, 101],
  [1, 3, 7, 9, 2],
  [2, 7, 11, 15],
  [3, 2, 4],
  [3, 3],
];

console.log(twoSum(arr0, 0));
console.log(twoSum(arr1, 7));
console.log(twoSum(arr2, 6));
console.log(twoSum(arr3, 75));
console.log(twoSum(arr4, 11));
console.log(twoSum(arr5, 9));
console.log(twoSum(arr6, 6));
console.log(twoSum(arr7, 6));
