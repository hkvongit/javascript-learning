/* PROBLEM STATEMENT:
    Evaluate the value of an arithmetic expression in Reverse Polish Notation (e.g., ["2", "1", "+", "3", "*"] which is (2 + 1) * 3 = 9).
    E.g.
        INPUT: ["2", "1", "+", "3", "*"]
        OUTPUT: 9 // (2 + 1) * 3 = 9
*/
function main(rawArray){
    // Use a stack to keep track of opening brackets
    let numStack = []
    // looping throw the input array
    for (let char of rawArray){
        // if the character is a number then push it to `numStack`
        if(!isNaN(char)){
            numStack.push(Number(char))
        } else{ // else check the arthmatic operator and do the operation between last 2 number in the numstack and push that result to numstack after poping that 2 operated numbers.
            const num1 = numStack.pop()
            const num2 = numStack.pop()
            let result
            switch(char) {
                case '+': result = num2 + num1; break;
                case '-': result = num2 - num1; break;
                case '*': result = num2 * num1; break;
                case '/': result = Math.trunc(num2 / num1); break;
                default: throw new Error("Unknown operator");
            }
            numStack.push(result)
        }
    }
    const out = numStack[numStack.length - 1];
    console.debug("out: ", out)
    return out;
}

module.exports = {
    main
}