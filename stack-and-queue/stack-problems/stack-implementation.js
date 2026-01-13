class Stack {
    constructor(inputArray){
        this.value = inputArray
    }

    push(val){
        this.value.push(val)
    }

    pop(val) {
        this.value.pop()
    }

    get(){
        return this.value
    }

    size(){
        return this.value.length
    }
    
    topValue() {
        return this.value[this.size() -1]
    }

}


const stack_1 = new Stack([1,2,3])
console.debug(stack_1.get())

stack_1.push(10)
console.debug(stack_1.get())

stack_1.push(20)
console.debug(stack_1.get())

stack_1.pop()
console.debug(stack_1.get())


console.debug(stack_1.topValue())