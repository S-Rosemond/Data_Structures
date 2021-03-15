import Graph from "./Graph.mjs";
import StackQueue from "./StackQueue.mjs";

class BFSGraph extends Graph {
  constructor() {
    super();
    this.visitedList = {};
    this.resultList = [];
    this.stack = new StackQueue();
    // non duplicates, if duplicates use key - array
    this.inStack = {};
  }
  bfsTraversal(vertex) {
    if (!vertex) return "Non existent vertex";

    this.stack.unshift(vertex);

    while (this.stack.size) {
      let node = this.stack.pop();

      if (!this.visitedList[node.value]) {
        this.resultList.push(node.value);
        this.visitedList[node.value] = true;
      }

      // non visited el can be added to stack twice, inStack lookup prevents
      for (let el of this.adjacencyList[node.value]) {
        if (!this.visitedList[el] && !this.inStack[el]) {
          this.stack.unshift(el);
          this.inStack[el] = true;
        }
      }
    }

    return this.resultList;
  }
}

const myGraph = new BFSGraph();

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

const bfsResult = myGraph.bfsTraversal("A");
console.log(bfsResult); // expected result: ['A', 'B', 'C', 'Z', 'D', 'E', 'F']

// SLICE.REVERSE on array traverse in reverse -- tip :
//  array.slice().reverse().forEach(etc)
