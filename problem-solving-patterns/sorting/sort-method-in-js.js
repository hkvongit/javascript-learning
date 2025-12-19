const arr = ["zack", "krishnan", "luzy", "subin", "binu", "cameron"];
const sortedArr = arr.sort();
// console.log(sortedArr);
// OUTPUT: [ 'binu', 'cameron', 'krishnan', 'luzy', 'subin', 'zack' ]
// =================================================================

const numArr = [2, 5, 10, 52, 93];
const sortedNumArr = numArr.sort();
// console.log(sortedNumArr);
//OUTPUT: [ 10, 2, 5, 52, 93 ] // 🔴
// ⚠️ here you can see the issue with the default sort in js but they have given as a provision to insert a determining logic inside the sort function. In below example I am adding it.
// This is because the default sort logic is according to the string **UNICODE code points**
// =================================================================

const numArr2 = [2, 5, 10, 52, 93];
const sortedNumArr2 = numArr2.sort((num1, num2) => num1 - num2);
// 🔴 This logic solves the issue, Thus .sort() method takes an optional argument to determine the sort logic
/* LOGIC:
if return is 
-- < 0, then num1 comes before num2
-- = 0, no change made
-- > 0, then num1 comes after num2
*/
// console.log(sortedNumArr2);
// OUTPUT:  [ 2, 5, 10, 52, 93 ]
// =================================================================

// Descending order sort
const numArr3 = [2, 5, 10, 52, 93];
const sortedNumArr3 = numArr3.sort((num1, num2) => num2 - num1);
console.log(sortedNumArr3);
// OUTPUT:  [ 93, 52, 10, 5, 2 ]
