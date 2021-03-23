const [testCase0, testCase1, testCase2, testCase3, testCase4, testCase5] = [
  "abccabb",
  "cccccc",
  "",
  "abcbda",
  "anviaj",
  "pwwkew",
];

function findMaxSubStr(string) {
  let [i, j] = [0, 1];
  let maxLength = 0;
  let hash = new Map();

  if (string[i] !== undefined) hash.set(string[i], i);

  while (j < string.length) {
    if (hash.has(string[j])) {
      maxLength = Math.max(maxLength, hash.size);
      let temp = hash.get(string[j]) + 1;

      for (let n = i; n < j; n++) {
        hash.delete(string[n]);
      }
      i = temp;
    }

    if (!hash.has(string[j])) {
      hash.set(string[j], j);
    }

    j++;
  }

  return Math.max(maxLength, hash.size);
}

// console.table([
//   findMaxSubStr(testCase0),
//   findMaxSubStr(testCase1),
//   findMaxSubStr(testCase2),
//   findMaxSubStr(testCase3),
//   findMaxSubStr(testCase4),
//   findMaxSubStr(testCase5),
// ]);

console.log(findMaxSubStr(testCase5));
