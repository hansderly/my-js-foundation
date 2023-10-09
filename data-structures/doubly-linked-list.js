class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
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
      const newTail = this.tail.prev;
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 1) return this.pop();

    const newHead = this.head.next;
    this.head = newHead;
    this.head.prev = null;

    this.length--;
    return this;
  }

  unshift(val) {
    if (!this.head) return this.push(val);

    const node = new Node(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;
    return this;
  }

  get(position) {
    if (position === -1) return this.tail;
    if (position === 0) return this.head;
    if (position < 0 && position >= this.length) return null;

    const median = Math.floor((this.length + 1) / 2);

    if (position <= median) {
      let current = this.head;
      let index = 0;
      while (position !== index) {
        current = current.next;
        index++;
      }
      return current;
    }

    if (position >= median) {
      let current = this.tail;
      let index = this.length - 1;
      while (position !== index) {
        current = current.prev;
        index--;
      }
      return current;
    }
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
    if (position < 0 || position > this.length) return null;

    const node = new Node(val);
    const target = this.get(position - 1);
    node.next = target.next;
    target.next = node;
    node.prev = target;

    return this;
  }

  remove(position) {
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();
    if (position < 0 || position > this.length) return null;

    const target = this.get(position - 1);
    target.next = target.next.next;
    target.next.prev = target;

    this.length--;
    return this;
  }
}
