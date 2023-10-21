class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(val, priority) {
    const node = new Node(val, priority);

    this.values.push(node);

    const lastIndex = this.values.length - 1;
    const parentIndex = (lastIndex - 1) / 2;

    if (node.priority < this.values[parentIndex]?.priority)
      this._bubbleUp(node.priority, this.values, lastIndex, parentIndex);
  }

  extractPriority() {
    const priority = this.values[0];
    if (this.values.length === 1) {
      this.values = [];
      return priority;
    }

    const leastPriority = this.values.pop();
    this.values[0] = leastPriority;
    this._bubbleDown(this.values);

    return priority;
  }

  _bubbleUp(priority, arr, lastIndex, parentIndex) {
    while (priority < arr[parentIndex]?.priority) {
      this._swap(arr, lastIndex, parentIndex);

      lastIndex = parentIndex;
      parentIndex = (lastIndex - 1) / 2;
    }
  }

  _bubbleDown(arr) {
    let rootIdx = 0;

    while (true) {
      let leftIdx = 2 * rootIdx + 1;
      let rightIdx = 2 * rootIdx + 2;
      let root = arr[rootIdx];
      let leftChild = arr[leftIdx];
      let rightChild = arr[rightIdx];

      if (!leftChild && !rightChild) break;
      if (
        root.priority < leftChild?.priority &&
        root.priority < rightChild?.priority
      )
        break;
      if (!leftChild && root?.priority < rightChild?.priority) break;
      if (!rightChild && root?.priority < leftChild?.priority) break;

      let newRoot =
        leftChild?.priority < rightChild?.priority
          ? leftChild
          : rightChild || leftChild || rightChild;
      let newRootIdx = arr.indexOf(newRoot);

      this._swap(arr, rootIdx, newRootIdx);

      rootIdx = newRootIdx;
    }
  }

  _swap(arr, index1, index2) {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  }
}

const pq = new PriorityQueue();

pq.insert(10, 3);
pq.insert(15, 1);
pq.insert(20, 2);
pq.insert(25, 1);
pq.insert(27, 1);
pq.insert(18, 2);
pq.insert(12, 3);
