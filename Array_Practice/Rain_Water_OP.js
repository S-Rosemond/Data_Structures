// From logical strategy pseudo explanation
const [testCase0, testCase1, testCase2, testCase3] = [
  [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
  [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1],
  [],
  [4, 5],
];

function rainWater(heights) {
  let [left, right, total] = [0, heights.length - 1, 0];
  let [maxLeft, maxRight] = [heights[left], heights[right]];

  while (left <= right) {
    if (maxLeft <= maxRight) {
      if (maxLeft > heights[left]) {
        const currentWater = maxLeft - heights[left];

        if (currentWater > 0) total += currentWater;
      }
      if (heights[left] > maxLeft) maxLeft = heights[left];
      left++;
    } else {
      if (maxRight > heights[right]) {
        const currentWater = maxRight - heights[right];

        if (currentWater > 0) total += currentWater;
      }
      if (heights[right] > maxRight) maxRight = heights[right];
      right--;
    }
  }

  return total;
}

console.log(rainWater(testCase0));
console.log(rainWater(testCase1));
console.log(rainWater(testCase2));
console.log(rainWater(testCase3));
