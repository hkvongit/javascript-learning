# Inteview Questions based on QUEUE

## 2. First Unique Character in a String (Stream) - SOLVED ✅

Problem: Given a stream of characters, find the first non-repeating character from the stream. You need to tell the first non-repeating character at any moment.

Why it's important: This tests your ability to maintain order (Queue) while checking for duplicates (often combined with a Hash Map/Frequency Counter).

Example:

Step 1:
Char received: 'a'
Stream so far: 'a'
First non repeating: 'a'

Step 2:
Char received: 'a'
Stream so far: 'aa'
First non repeating: null

Step 3:
Char received: 'b'
Stream so far: 'aab'
First non repeating: b

Step 4:
Char received: 'c'
Stream so far: 'aabc'
First non repeating: b

Step 5:
Char received: 'b'
Stream so far: 'aabcb'
First non repeating: c

---

## 3. Generate Binary Numbers from 1 to N

Problem: Given a number n, write a function that generates and prints all binary numbers with decimal values from 1 to n.

Why it's important: This is a pattern recognition problem. You can solve it elegantly using a Queue:
Enqueue "1".
Dequeue "1", print it.
Enqueue "1" + "0" -> "10".
Enqueue "1" + "1" -> "11".
(Repeat)

Example:

Input: n = 5

Output: 1, 10, 11, 100, 101

Step-by-step process:

| Step | Action                       | Queue State                  | Output |
| ---- | ---------------------------- | ---------------------------- | ------ |
| 1    | Enqueue "1"                  | ["1"]                        | -      |
| 2    | Dequeue "1", print it        | []                           | 1      |
| 3    | Enqueue "10", Enqueue "11"   | ["10", "11"]                 | -      |
| 4    | Dequeue "10", print it       | ["11"]                       | 10     |
| 5    | Enqueue "100", Enqueue "101" | ["11", "100", "101"]         | -      |
| 6    | Dequeue "11", print it       | ["100", "101"]               | 11     |
| 7    | Enqueue "110", Enqueue "111" | ["100", "101", "110", "111"] | -      |
| 8    | Dequeue "100", print it      | ["101", "110", "111"]        | 100    |
| 9    | Dequeue "101", print it      | ["110", "111"]               | 101    |

**Note:** The process continues until we've printed n numbers. Each time we dequeue a binary number, we enqueue two new numbers: the dequeued number + "0" and the dequeued number + "1".

---

## 4. Implement a Circular Queue

Problem: Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle.

Why it's important: It solves the limitation of the standard array-based queue where empty spaces created by dequeuing elements cannot be reused.

---

## 5. Level Order Traversal (BFS)

Problem: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Why it's important: Queues are the fundamental data structure for Breadth-First Search (BFS). Understanding this is crucial for almost all graph and tree traversal problems.
