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
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]?.includes(vertex2)) return false;
    if (!this.adjacencyList[vertex2]?.includes(vertex1)) return false;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (el) => el !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (el) => el !== vertex1
    );
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;

    for (let el of this.adjacencyList[vertex]) {
      this.removeEdge(el, vertex);
    }

    return !!delete this.adjacencyList[vertex];
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
myGraph.addEdge("Test", "Aspen");
console.log(myGraph.print());

myGraph.removeEdge("Test", "Tokyo");
myGraph.removeEdge("Test", "Aspen");
console.log(myGraph.print());

myGraph.addVertex("Spain");
myGraph.addVertex("England");
myGraph.addEdge("Tokyo", "Spain");
myGraph.addEdge("Tokyo", "England");
myGraph.addEdge("Aspen", "Spain");
myGraph.addEdge("Aspen", "England");
console.log(myGraph.print());

const result = myGraph.removeVertex("Tokyo");

console.log(myGraph.print(), result);
