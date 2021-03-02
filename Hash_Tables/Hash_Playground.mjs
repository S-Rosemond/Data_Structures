import HashTable from "./Class_Hash.mjs";

const colors = [
  ["blue", 0],
  ["red", 1],
  ["green", 2],
  ["yellow", 3],
  ["pink", 4],
  ["purple", 5],
  ["blue", 6],
];

const hashTable = new HashTable(7);

for (let el of colors) {
  hashTable.set(el[0], el[1]);
}

console.log(hashTable.print());

function getElements(keyArray) {
  for (let el of keyArray) {
    console.log(hashTable.get(el[0]));
  }
}

// getElements(colors);

console.log(hashTable.keys());
console.log(hashTable.values());
