class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let lastIndex = this.values.length - 1;
    let parentIndex = Math.floor((lastIndex - 1) / 2);
    if (val > this.values[parentIndex])
      this._bubbleUp(val, this.values, lastIndex, parentIndex);
  }

  extractMax() {
    if (!this.values.length) return null;

    const max = this.values[0];

    if (this.values.length === 1) {
      this.values = [];
      return max;
    }

    const recent = this.values.pop();
    this.values[0] = recent;
    this._bubbleDown(this.values);
    return max;
  }

  _swap(arr, index1, index2) {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  }

  _bubbleUp(val, arr, lastIndex, parentIndex) {
    while (val > arr[parentIndex]) {
      this._swap(arr, lastIndex, parentIndex);
      lastIndex = parentIndex;
      parentIndex = Math.floor((lastIndex - 1) / 2);
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
      if (root > leftChild && root > rightChild) break;
      if (!leftChild && root > rightChild) break;
      if (!rightChild && root > leftChild) break;

      let newRoot = Math.max(leftChild, rightChild) || leftChild || rightChild;
      let newRootIdx = arr.indexOf(newRoot);
      this._swap(arr, rootIdx, newRootIdx);

      rootIdx = newRootIdx;
    }
  }
}

const mh = new MaxHeap();

mh.insert(41);
mh.insert(39);
mh.insert(33);
mh.insert(18);
mh.insert(27);
mh.insert(12);
mh.insert(55);

console.log(mh);
