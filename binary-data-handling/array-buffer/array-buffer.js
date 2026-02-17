// Create a buffer of 16 bytes (Analogue: 16 elements in the array)
const buffer = new ArrayBuffer(16);

// Use a view to read and write (Uint8Array = one number 0–255 per byte)
const view = new Uint8Array(buffer);

view[0] = 45; // if you insert anything other than a number then it will not get inserted.

console.log(view); /* OUTPUT: 
Uint8Array(16) [
  45, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 0,
   0, 0, 0, 0
  ]
*/
