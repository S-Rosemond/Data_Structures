const [arr0, arr1] = [
  [3, 3],
  [1, 3, 7, 13, 27, 41, 42, 50],
];

function hashArray(arr) {
  if (arr.length < 1) return "Empty Array";

  const hash = new Map();

  // Map.has() checks the key
  for (let i = 0; i < arr.length; i++) {
    if (!hash.has(arr[i])) hash.set(arr[i], i);
  }

  return hash;
}

const [hash0, hash1] = [hashArray(arr0), hashArray(arr1)];
console.log(hash0, hash0.size, "\n", hash1, hash1.size);
