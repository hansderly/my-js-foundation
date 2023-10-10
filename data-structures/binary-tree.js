class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) return (this.root = node);
    if (this.root.val === node.val) return;

    let current = this.root;
    while (current) {
      if (node.val === current.val) return;

      if (node.val < current.val) {
        if (!current.left) return (current.left = node);
        current = current.left;
      }

      if (node.val > current.val) {
        if (!current.right) return (current.right = node);
        current = current.right;
      }
    }
  }

  find(val) {
    if (val === this.root.val) return this.root;

    let current = this.root;
    while (current) {
      if (val === current.val) return current;

      if (val < current.val) {
        if (!current.left) return null;
        current = current.left;
      }

      if (val > current.val) {
        if (!current.right) return null;
        current = current.right;
      }
    }
  }
}

module.exports = { BinaryTree };
