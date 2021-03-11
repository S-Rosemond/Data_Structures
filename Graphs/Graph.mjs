export default class Graph {
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
