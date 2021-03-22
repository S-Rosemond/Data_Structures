const [testCase0, testCase1, testCase2, testCase3, testCase4, testCase5] = [
  ["ab#z", "az#z"],
  ["abc#d", "acc#c"],
  ["x#y#Z#", "a#"],
  ["a###b", "b"],
  ["Ab#z", "ab#z"],
  ["abdc#", "abzz##d"],
];

function createNewString(str) {
  let arr = [];

  for (let el of str) {
    if (el === "#" && arr.length > 0) arr.pop();
    else if (el !== "#") arr.push(el);
  }

  return arr.join("");
}

const typedOutStrings = (strings) => {
  const [strA, strB] = strings;

  const [newStringA, newStringB] = [
    createNewString(strA),
    createNewString(strB),
  ];

  return newStringA === newStringB;
};

console.table([
  typedOutStrings(testCase0),
  typedOutStrings(testCase1),
  typedOutStrings(testCase2),
  typedOutStrings(testCase3),
  typedOutStrings(testCase4),
  typedOutStrings(testCase5),
]);
