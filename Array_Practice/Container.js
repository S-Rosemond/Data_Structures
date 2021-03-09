// area = l x w
const [arr0, arr1, arr2, arr3, arr4, arr5, arr6] = [
  [],
  [1, 8, 6, 2, 9, 4],
  [7, 1, 2, 3, 9],
  [6, 9, 3, 4, 5, 8],
  [1, 1],
  [4, 3, 2, 1, 4],
  [1, 2, 1],
];

function maxWaterContainer(arr) {
  if (arr.length < 2) return 0;
  let [i, j, maxArea, newArea] = [0, arr.length - 1, 0, null];

  while (i < j) {
    newArea = Math.min(arr[i], arr[j]) * j - i;

    if (arr[i] < arr[j]) i++;
    else j--;

    maxArea = Math.max(maxArea, newArea);
  }

  return maxArea;
}

console.log(maxWaterContainer(arr0));
console.log(maxWaterContainer(arr1));
console.log(maxWaterContainer(arr2));
console.log(maxWaterContainer(arr3));
console.log(maxWaterContainer(arr4));
console.log(maxWaterContainer(arr5));
console.log(maxWaterContainer(arr6));
