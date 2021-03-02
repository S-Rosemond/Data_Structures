// Colt Steele
function hashFunction(key, arrayLength) {
  let hash = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    // can mod outside
    hash = (hash + value) % arrayLength;
  }

  return hash;
}

console.log(hashFunction("pink", 10));
console.log(hashFunction("pinky", 10));

// Improved basic Hash concept Colt Steele
function hashFunction(key, arrayLength) {
  let hash = 0;
  let PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    hash = (hash * PRIME + value) % arrayLength;
  }

  return hash;
}
