/*
Reverse a String using Stack (Easy)
    Problem: Reverse a string using the LIFO property of a stack.
    Logic: Push every character onto the stack, then pop them all off. Because it's "Last In, First Out," they come out in reverse order.
*/

// main fn with string as input and reversed string as output
function main(str){

    // declare stack = []
    let stack = []   
    
    // loop through and fill the stack
    for (let char of str){
        stack.push(char)
    }
    // join all the elements from the back using another loop
    let revStr = ""
    while (stack.length > 0) {
        revStr += stack.pop()
    }
    console.log("revStr:: ",revStr)
    // return the reversed string
    return revStr;
}

module.exports = {
    main
}