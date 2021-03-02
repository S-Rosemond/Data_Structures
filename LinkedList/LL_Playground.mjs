import LinkedList from "./Linked_List.mjs";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log(linkedList);
console.log(linkedList.printNodes());
linkedList.shift();
console.log(linkedList.printNodes());
