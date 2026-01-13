# Stacks and Queues in JavaScript

This guide explains two fundamental data structures: **Stacks** and **Queues**. Both are "linear" data structures that manage collections of data in a specific order.

---

## 1. Stack (LIFO - Last In, First Out)

### Concept

Imagine a **stack of plates**.

- You add a new plate to the **top**.
- You remove a plate from the **top**.
- The last plate you put on the stack is the first one you take off. This is why it's called **LIFO**.

### Real-world Examples:

- **Undo/Redo** functionality in text editors.
- **Browser History**: The "Back" button takes you to the last page you visited.
- **Call Stack** in JavaScript execution.

### Implementation using Arrays

The simplest way to use a stack in JS is with `push()` and `pop()`.

```javascript
// Initializing an empty stack using an array
const stack = [];

// Adding elements to the top (Push)
stack.push("Plate 1"); // ["Plate 1"]
stack.push("Plate 2"); // ["Plate 1", "Plate 2"]
stack.push("Plate 3"); // ["Plate 1", "Plate 2", "Plate 3"]

// Removing the top element (Pop)
const removedElement = stack.pop(); // Returns "Plate 3"
console.log(removedElement); // Output: "Plate 3"
console.log(stack); // Output: ["Plate 1", "Plate 2"]
```

### Implementation using Class (Best Practice)

```javascript
class Stack {
  constructor() {
    // We use an array to store our items
    this.items = [];
  }

  // Add an item to the top
  push(element) {
    // Using array push to add to the end
    this.items.push(element);
  }

  // Remove and return the top item
  pop() {
    // If the stack is empty, return null
    if (this.items.length === 0) return "Underflow";
    // Using array pop to remove from the end
    return this.items.pop();
  }

  // Look at the top item without removing it
  peek() {
    // Return the last element in the array
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    // Return true if length is 0
    return this.items.length === 0;
  }
}
```

## Interview problems with Stack

Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid.

---

## 2. Queue (FIFO - First In, First Out)

### Concept

Imagine a **queue of people** waiting for a bus.

- The first person in line is the first person to get on the bus.
- New people join at the **end** of the line.
- This is called **FIFO**.

### Real-world Examples:

- **Printing tasks**: The first document sent to the printer is printed first.
- **Customer Service lines**: "First come, first served."
- **Task Queues** in asynchronous JavaScript.

### Implementation using Arrays

You can use `push()` to add and `shift()` to remove from the front.

```javascript
// Initializing an empty queue
const queue = [];

// Adding elements to the end (Enqueue)
queue.push("Person 1"); // ["Person 1"]
queue.push("Person 2"); // ["Person 1", "Person 2"]
queue.push("Person 3"); // ["Person 1", "Person 2", "Person 3"]

// Removing the front element (Dequeue)
const firstInLine = queue.shift(); // Returns "Person 1"
console.log(firstInLine); // Output: "Person 1"
console.log(queue); // Output: ["Person 2", "Person 3"]
```

### Implementation using Class

```javascript
class Queue {
  constructor() {
    // Array to store queue elements
    this.items = [];
  }

  // Add an item to the back
  enqueue(element) {
    // Add to the end of the array
    this.items.push(element);
  }

  // Remove and return the front item
  dequeue() {
    // Check if queue is empty
    if (this.isEmpty()) return "Underflow";
    // Remove from the start of the array
    return this.items.shift();
  }

  // Look at the front item
  front() {
    // Return the first element
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // Check if empty
  isEmpty() {
    // Return true if length is 0
    return this.items.length === 0;
  }
}
```

---

## Summary Comparison

| Feature          | Stack                        | Queue                               |
| :--------------- | :--------------------------- | :---------------------------------- |
| **Principle**    | LIFO (Last In, First Out)    | FIFO (First In, First Out)          |
| **Main Methods** | `push` (Add), `pop` (Remove) | `enqueue` (Add), `dequeue` (Remove) |
| **Access Point** | Only the Top                 | Front for removal, Back for adding  |
| **Analogy**      | Stack of plates              | Waiting in line                     |
