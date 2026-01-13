class Queue {
    constructor(inputArray){
        this.value = inputArray
    }

    enqueue(value) {
        this.value.unshift(value)
    }
    
    dequeue(){
        this.value.shift()
    }

    get(){
        return this.value
    }

    size(){
        return this.value.length;
    }

    front(){
        if(this.size() > 0) {
            return this.value[0]
        } else {
            return "Queue is empty"
        }
    }
}

const queueInstance = new Queue([1,2,3,5])

console.debug(queueInstance.get())

queueInstance.enqueue(10)
console.debug(queueInstance.get())

queueInstance.enqueue(20)
console.debug(queueInstance.get())

queueInstance.dequeue()
console.debug(queueInstance.get())


console.debug(queueInstance.front())