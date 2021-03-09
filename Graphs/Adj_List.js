class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    return !!(!this.adjacencyList[key]
      ? (this.adjacencyList[key] = [])
      : false);
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].includes(vertex2)) return false;
    if (this.adjacencyList[vertex2].includes(vertex1)) return false;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return true;
  }

  print() {
    console.log(this.adjacencyList);
  }
}

const myGraph = new Graph();

myGraph.addVertex("Test");
myGraph.addVertex("Tokyo");
myGraph.addVertex("Aspen");
console.log(myGraph.addVertex("Test"));

myGraph.addEdge("Tokyo", "Aspen");
console.log(myGraph.addEdge("Tokyo", "Aspen"));

console.log(myGraph.print());
