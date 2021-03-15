class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export default class StackQueue {
  size = 0;
  head = null;
  tail = null;

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }
  pop() {
    const removedNode = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    removedNode.prev = null;
    this.size--;
    return removedNode;
  }
  unshift(value) {
    const node = new Node(value);

    if (this.size) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }

    this.size++;
    return true;
  }
  shift() {
    const removedNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    removedNode.next = null;
    this.size--;

    return removedNode;
  }
}

const stack = new StackQueue();
const [arr0, arr1] = [
  [1, 2, 3, 4],
  [0, -1],
];

for (let el of arr0) {
  stack.push(el);
}
for (let el of arr1) {
  stack.unshift(el);
}

const [popped, shifted] = [stack.pop(), stack.shift()];
console.log(stack, "\n", popped.value, shifted.value);

while (stack.size) {
  stack.pop();
}
console.log(stack);

// tip: use hashes on non duplicate data structures for 0(1) look ups
// instead of traversing;
