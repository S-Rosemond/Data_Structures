import Graph from "./Graph.mjs";

class TGraph extends Graph {
  constructor() {
    super();
    this.resultList = [];
    this.visitedList = {};
  }
  DFSRecursion(vertex) {
    if (!this.adjacencyList[vertex] || this.visitedList[vertex]) return;

    this.visitedList[vertex] = true;
    this.resultList.push(vertex);

    for (let el of this.adjacencyList[vertex]) {
      if (!this.visitedList[el]) this.DFSRecursion(el);
    }

    return this.resultList;
  }
  DFSIterative(vertex) {
    const stack = [];
    stack.push(vertex);

    while (stack.length > 0) {
      let node = stack.pop();

      if (!this.visitedList[node]) {
        this.visitedList[node] = true;
        this.resultList.push(node);

        for (let el of this.adjacencyList[node]) {
          if (!this.visitedList[el] && !stack.includes(el)) stack.push(el);
        }
      }
    }

    return this.resultList;
  }
}

const myGraph = new TGraph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addVertex("Z");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");
myGraph.addEdge("Z", "A");

console.log(myGraph.print());

// const result = myGraph.DFSRecursion("A");
const iterative = myGraph.DFSIterative("A");
console.log(iterative);
