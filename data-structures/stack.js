class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return !this.length;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;

    return this;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    if (this.head) {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    }

    if (this.length > 1) {
      this.head = this.head.next;
    }

    this.length--;
    return this;
  }
}
