class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);
const four = new Node(42);

one.next = two;
two.next = three;
three.next = four;

/**
 * printList
 * 
 * @param {Node} head The head node of the list
 * @returns {string} The result string
 */
function printList(head) {
  let aux = head;
  let str = '';

  str = aux.value + ' -> ';

  while (aux.next !== null) {
    aux = aux.next;
    str = str + aux.value + ' -> ';
  }
  return str;
}

/**
 * addAfter
 * 
 * @param {Node} head 
 * @param {number} target 
 * @param {number} value 
 */
function addAfter(head, target, value) {
  let aux = head;
  while (aux.next) {
    if (aux.value === target) {
      const newNode = new Node(value);

      newNode.next = aux.next;
      aux.next = newNode;
      break; // Agregamos este break para detener el bucle después de agregar el nodo
    }
    aux = aux.next;
  }
}

/**
 * addBefore
 * 
 * @param {Node} head 
 * @param {number} target 
 * @param {number} value 
 */
function addBefore(head, target, value) {
  let aux = head;
  let prev = null;

  while (aux) {
    if (aux.value === target) {
      const newNode = new Node(value);

      if (prev === null) {
        newNode.next = head;
        return newNode;
      } else {
        newNode.next = aux;
        prev.next = newNode;
        return head;
      }
    }
    prev = aux;
    aux = aux.next;
  }
  return head;
}

/**
 * removeBefore
 * 
 * @param {Node} head 
 * @param {number} target 
 */
function removeBefore(head, target) {
  let aux = head;
  let prev = null;
  let prevPrev = null;

  while (aux && aux.next) {
    if (aux.next.value === target) {
      if (prevPrev === null) {
        head = aux.next;
      } else {
        prevPrev.next = aux.next;
      }
      break;
    }
    prevPrev = prev;
    prev = aux;
    aux = aux.next;
  }
  return head;
}

/**
 * removeAfter
 * 
 * @param {Node} head 
 * @param {number} target 
 */
function removeAfter(head, target) {
  let aux = head;

  while (aux) {
    if (aux.value === target && aux.next) {
      aux.next = aux.next.next;
      break;
    }
    aux = aux.next;
  }
  return head;
}

// 5 -> 3 -> 7 -> 42
console.log(printList(one));

addBefore(one, 7, 13);
// 5 -> 3 -> 13 -> 7 -> 42
console.log(printList(one));

removeBefore(one, 7);
// 5 -> 13 -> 7 -> 42
console.log(printList(one));

removeAfter(one, 13);
// 5 -> 13 -> 42
console.log(printList(one));


