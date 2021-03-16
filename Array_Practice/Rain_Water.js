// o(n^2)
const [testCase0, testCase1, testCase2, testCase3, testCase4] = [
  [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
  [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1],
  [],
  [5],
  [4, 5],
];

// currentWater = Math.min(maxLeft, maxRight) - currentHeight

function rainWater(heights) {
  let total = 0;

  for (let p = 0; p < heights.length; p++) {
    let [left, right] = [p, p];
    let [maxLeft, maxRight] = [0, 0];

    while (left >= 0) {
      maxLeft = Math.max(maxLeft, heights[left]);
      left--;
    }
    while (right < heights.length) {
      maxRight = Math.max(maxRight, heights[right]);
      right++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater > 0) total += currentWater;
  }

  return total;
}

console.log(rainWater(testCase0));
console.log(rainWater(testCase1));
console.log(rainWater(testCase2));
console.log(rainWater(testCase3));
console.log(rainWater(testCase4));
