let node1 = { data: "Ali", next: null };
let node2 = { data: "Omar", next: null };
let node3 = { data: "Sara", next: null };

node1.next = node2; // link the Nods together
node2.next = node3;

let head = node1; // first node called [head] and last called [tail]

let current = head; // set first node in current

while (current) {
  console.log(current.data);
  current = current.next;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print();
