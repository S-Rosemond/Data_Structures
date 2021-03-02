class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const prev = this.tail;
      this.tail = newNode;
      prev.next = this.tail;
    }
    this.length++;
    return this.length;
  }

  insert(value, index) {
    const newNode = new Node(value);

    let count = 0;
    let next = this.head;

    while (count <= index) {
      prev = next;
      next = next.next;

      if (count === index) {
        newNode.next = next;
        prev.next = newNode;
      }

      count++;
    }

    return true;
  }

  shift() {
    const oldHead = this.head;

    this.head = this.head.next;

    oldHead.next = null;

    return oldHead;
  }
  printNodes() {
    let next = this.head;

    while (next !== null) {
      console.log(next.value);
      next = next.next;
    }
    return null;
  }
}
