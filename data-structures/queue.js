class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Queue {
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
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    this.head = this.head.next;

    this.length--;
    return this;
  }
}
