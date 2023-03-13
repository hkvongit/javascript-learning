import { myString } from './variables.js'
import * as Var from './variables.js'

console.log('importedee myString  = ', myString)

console.log("default export =", Var)
/* OUTPUT: Object{
  default: "Hai I am the DEFAULT export"
  myString: "odessey"
  Symbol(Symbol.toStringTag): "Module"
}
*/

console.log("default export = ", Var.default)
// OUTPUT:  default export =  Hai I am the DEFAULT export
