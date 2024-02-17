class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
    this.size = 1;
  }

  size() {
    return this.size;
  }

  addStart(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  toString() {
    let str = ''
    let aux = this.head;

    str = aux.value + ' -> ';

    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' -> ';
    }
    console.log(str);
  }
}

const one = new Node(5);
const list = new LinkedList(one);

list.toString();
list.addStart(2);
list.toString();
