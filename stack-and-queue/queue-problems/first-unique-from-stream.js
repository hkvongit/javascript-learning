/*
## 2. First Unique Character in a String (Stream)

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
*/

class CharStream {
    
    constructor(){
        this.uniqueQueue = []
        this.stream = []
        this.map = {}
    }

    enque(value) {
        this.stream.push(value)
        if(!this.map[value]){
            this.map[value] = 1;
            this.uniqueQueue.push(value)
        } else{
            this.map[value] = this.map[value] + 1;
            const indexInUniqueStack = this.uniqueQueue.indexOf(value)
            if(indexInUniqueStack > -1) this.uniqueQueue.splice(indexInUniqueStack, 1)
        }
    }

    firstNonRepeatingValue(){
        return this.uniqueQueue[0] ?? null
    }

    getAll() {
        return {
            "uniqueQueue": this.uniqueQueue,
            "stream": this.stream,
            "map": this.map,
        }
    }

}


const queue = new CharStream()
queue.enque('a')
console.debug("streaned a",queue.getAll())
queue.enque('a')
console.debug("streaned a",queue.getAll())
queue.enque('b')
console.debug("streaned b",queue.getAll())
queue.enque('c')
console.debug("streaned c",queue.getAll())
queue.enque('b')
console.debug("streaned b",queue.getAll())
queue.enque('c')
console.debug("streaned c",queue.getAll())


// A more efficient solution provided by GROK *cursor.ai
/* 
class FirstUniqueStream {
    constructor() {
        this.frequency = new Map();  // Better than plain object
        this.queue = [];            // Proper queue for order
    }

    add(char) {
        // Update frequency
        this.frequency.set(char, (this.frequency.get(char) || 0) + 1);
        
        // Add to queue only if it's the first occurrence
        if (this.frequency.get(char) === 1) {
            this.queue.push(char);
        }
        
        // Remove non-unique characters from front of queue (always need to check the front element during each addition)
        while (this.queue.length > 0 && this.frequency.get(this.queue[0]) > 1) {
            this.queue.shift();
        }
    }

    firstUnique() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
}
*/