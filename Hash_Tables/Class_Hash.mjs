// Colt Steele hash function, get and set from pseudo-code
class HashTable {
  constructor(size = 53) {
    this.KeyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.KeyMap.length;
    }
    return total;
  }
  set(key, value) {
    let idx = this._hash(key),
      duplicate =
        this.KeyMap[idx] && !!this.KeyMap[idx].find((el) => el[0] === key);

    if (this.KeyMap[idx] === undefined) {
      this.KeyMap[idx] = [[key, value]];
    } else {
      if (duplicate) return;
      this.KeyMap[idx].push([key, value]);
    }
  }
  get(key) {
    let [idx, item] = [this._hash(key), undefined];

    if (this.KeyMap[idx] !== undefined) {
      for (let el of this.KeyMap[idx]) {
        if (el[0] === key) item = el;
      }
    }
    // add index[1] if value needed only.
    return item;
  }
  traverse(type) {
    let [keys, values] = [[], []];

    for (let el of this.KeyMap) {
      if (el !== undefined && Array.isArray(el[0])) {
        el.forEach((item) => {
          keys.push(item[0]);
          values.push(item[1]);
        });
      }
    }
    if (type === "keys") return keys;
    return values;
  }

  keys() {
    const key = [...new Set(this.traverse("keys"))];
    return key;
  }
  values() {
    const value = [...new Set(this.traverse())];
    return value;
  }
  print() {
    for (let el of this.KeyMap) {
      if (el !== undefined) console.log(el);
    }
  }
}

export default HashTable;
