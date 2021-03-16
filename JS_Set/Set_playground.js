const [testCase0, testCase1] = [
  [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
  [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1],
];

const [testSet0, testSet1] = [new Set(testCase0), new Set(testCase1)];
const newArr0 = [...testSet0];
const newArr1 = [...testSet1].sort((a, b) => a - b);
console.log(testSet0, newArr0, "\n", testSet1, newArr1);

const [maxA, maxB] = [newArr1[newArr1.length - 1], newArr1[newArr1.length - 2]];
