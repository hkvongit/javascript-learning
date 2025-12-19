// Source: theory by Neso Academy: https://www.youtube.com/watch?v=R9PTBwOzceo

/*
Problem to solve: implement a data structure for browser history 
- Need to navigate to URLs
- Need to have forward navigation option
- Need to have backward navigation option
*/

// class to create a new node
class Node {
  // construct the default prev, next and url-data
  constructor(_url) {
    this.url = _url;
    this.prev = null;
    this.next = null;
  }
}

// Main class
class BrowserHistory {
  // construct the current node default
  constructor() {
    this.head = null;
  }
  // visit instance method [🔴 MOST IMPORTANT LOGIC HERE]
  visit(url) {
    // create a newNode
    const newNode = new Node(url);
    if (this.head) {
      newNode.prev = this.head;
      this.head.next = newNode;
    }

    this.head = newNode;
  }
  // goBack instance method
  goBack() {
    if (this.head && this.head.prev) {
      this.head = this.head.prev;
    } else {
      console.log("No previous URL available");
    }
  }
  // goForward instance method
  goForward() {
    if (this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      console.log("No forward URL available");
    }
  }
  getCurrentUrl() {
    if (this.head) {
      return this.head.url;
    } else {
      return null;
    }
  }
}
const newTab = new BrowserHistory();
newTab.visit("www.google.com");
console.log("1: ", newTab.getCurrentUrl());
newTab.visit("www.instagram.com");
console.log("2: ", newTab.getCurrentUrl());
newTab.visit("www.youtube.com");
console.log("3: ", newTab.getCurrentUrl());
newTab.goBack();
console.log("4: ", newTab.getCurrentUrl());
newTab.goForward();
console.log("5: ", newTab.getCurrentUrl());
newTab.goForward();
console.log("6: ", newTab.getCurrentUrl());
