// class Graph {
//   constructor() {
//     this.adjancyList = {};
//   }

//   addV(vertex) {
//     if (this.adjancyList[vertex]) return;
//     this.adjancyList[vertex] = [];
//   }

//   addEdge(v1, v2) {
//     if (!this.has(v1)) return;
//     if (!this.has(v2)) return;

//     this.adjancyList[v1].push(v2);
//     this.adjancyList[v2].push(v1);

//     // if()
//     // this.adjancyList[vertex1].
//   }

//   has(vertex) {
//     if (!this.adjancyList[vertex]) return false;
//     return true;
//   }
// }

// const g = new Graph();

// g.addVertex('Tokyo');
// g.addVertex('Armsterdam');
// g.addVertex('Berlin');
// g.addEdge('Tokyo', 'Berlin');
// g.addEdge('Tokyo', 'Armsterdam');
// g.addEdge('Tokyo', 'Okap');
// console.log(g.adjancyList);
