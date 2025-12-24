/* 
SOURCE of learning: https://www.geeksforgeeks.org/javascript/implementation-linkedlist-javascript/

Operations to do
- appending element (add new)
- listing all elements 
- deleting an element by value
*/

class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // requires a head by default
  constructor() {
    this.head = null;
  }
  // append method
  append(value) {
    const newNode = new NewNode(value);
    if (!this.head) {
      // new element should be the head
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // list method
  list() {
    if (!this.head) {
      console.log("no nodes found");
      return;
    }
    let current = this.head;
    let nodePrintOut = "";
    do {
      nodePrintOut = nodePrintOut + " -> " + current.value;
      current = current.next;
    } while (current);
    return nodePrintOut;
  }

  // delete method
  delete(value) {
    if (!this.head) {
      console.log("No elements in this list. Delete operation aborted");
      return;
    }
    // if head is the value
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // looping through all the elements and finding the match
    let current = this.head;
    let prevOfCurrent = null;
    let isFound = false;
    while (current && current.value) {
      if (current.value === value) {
        prevOfCurrent.next = current.next;
        isFound = true;
        break;
      }
      prevOfCurrent = current;
      current = current.next;
    }
    if (!isFound) {
      console.log("element not found");
    }
  }
}

const linkedListSample = new LinkedList();
linkedListSample.append("first");
linkedListSample.append("second");
linkedListSample.append("third");
linkedListSample.append("forth");
linkedListSample.list();

// linkedListSample.delete("third");
