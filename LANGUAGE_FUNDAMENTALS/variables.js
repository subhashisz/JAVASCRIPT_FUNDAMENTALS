/**
 1. var is of global scope.
 2. different data types can be assigned.
 3. Declaration and initialization can be done in multi-line statement.
 */ 

var a_variable=10;
a_variable="another data type"
var b_variable; // Declaration
b_variable=10;  // initialization

console.log(a_variable);
console.log(b_variable);

var x;
console.log(x);
x="x value hoisting";
console.log(x);

/**
 1. let is of block scope.
 2. different data types can be assigned.
 3. Declaration and initialization can be done in multi-line statement.
 */

let c_variable=20;
c_variable="another data type"
let d_variable; // Declaration
d_variable=10;  // initialization

console.log(c_variable);
console.log(d_variable);

let y;
console.log(y);
y="y value hoisting"
console.log(y);


/**
1. const is of block scope, declaring const means once declared can not be changed.
2. different data types cannot be assigned.
3. Declaration and initialization cannot be done in multi-line statement.
4. Hoisting is not possible
*/

const e_variable=10;
//e_variable="another data type"
//const f_variable; // Declaration
//f_variable=10;  // initialization

console.log(e_variable);
//console.log(f_variable);
