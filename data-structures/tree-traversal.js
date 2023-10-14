const { BinaryTree } = require('./binary-tree');
const { Queue } = require('./queue');

const bt = new BinaryTree();
bt.insert(10);
bt.insert(6);
bt.insert(15);
bt.insert(3);
bt.insert(8);
bt.insert(20);

function breathFirstSearch(tree) {
  const queue = new Queue();
  const bfs = [];

  if (!tree.root) return bfs;
  queue.push(tree.root);

  while (queue.length) {
    const node = queue.head.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    bfs.push(node.val);
    queue.pop();
  }

  return bfs;
}

function dfsPreOrder(tree) {
  if (!tree.root) return [];
  const dfs = [];

  function traverse(root) {
    dfs.push(root.val);
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }
  traverse(tree.root);
  return dfs;
}

function dfsPostOrder(tree) {
  if (!tree.root) return [];
  const dfs = [];

  function traverse(root) {
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
    dfs.push(root.val);
  }
  traverse(tree.root);
  return dfs;
}

function dfsInOrder(tree) {
  if (!tree.root) return [];
  const dfs = [];

  function traverse(root) {
    if (root.left) traverse(root.left);
    dfs.push(root.val);
    if (root.right) traverse(root.right);
  }
  traverse(tree.root);
  return dfs;
}
