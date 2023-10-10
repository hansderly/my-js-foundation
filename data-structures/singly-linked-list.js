class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
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

  getHead() {
    if (!this.head) return null;
    return this.head;
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

    if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = this.head;
      this.length--;
      return val;
    }

    let current = this.head;
    let newTail;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 1) return this.pop();

    const temp = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;

    return temp;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) return this.push(node);

    const newHead = node;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  get(position) {
    if (position === -1) return this.tail; // the array -1 functionality😁
    if (position >= this.length || position < 0) return null;

    let current = this.head;
    let index = 0;
    while (index !== position) {
      current = current.next;
      index++;
    }

    return current;
  }

  set(position, val) {
    const node = this.get(position);
    if (!node) return null;
    node.val = val;

    return this;
  }

  insert(position, val) {
    if (position === 0) return this.unshift(val);
    if (position === this.length) return this.push(val);
    if (position < 0 && position > this.length) return null;

    const node = new Node(val);
    const target = this.get(position - 1);
    node.next = target.next;
    target.next = node;

    this.length++;
    return this;
  }

  remove(position) {
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();
    if (position >= this.length || position < 0) return null;

    const node = this.get(position - 1);
    const removedNode = node.next;
    node.next = removedNode.next;

    this.length--;
    return removedNode;
  }
}
