const [arr0, arr1, arr2, arr3, arr4] = [
  [],
  [7],
  [1, 3, 7, 9, 2],
  [1, 2, 3, 4],
  [7, 20, 55, 87, 101],
];

function twoSum(array, target) {
  if (array.length < 1) return null;

  let i = 0;
  let j = i + 1;

  while (i < array.length) {
    if (target - array[i] === array[j]) return [i, j];
    if (j >= array.length - 1) {
      i++;
      j = i;
    }

    j++;
  }

  return null;
}

console.log(twoSum(arr0, 11));
console.log(twoSum(arr1, 7));
console.log(twoSum(arr2, 11));
console.log(twoSum(arr3, 25));
console.log(twoSum(arr4, 77));
