//console.log(isValidPassword('wedsrhttt','pragya123456'));
//functions are just objects in JS
//function statements
function add(x, y) {
    return( x + y);
}
function sub(x, y) {
    return( x - y);
}
function mult(x, y) {
    return( x * y);
}
function div(x, y) {
    return( x / y);
}
const operation = [add, sub, mult, div];
/* let inputArray = [];
for (let i = 0; i < 2; i++) {
    inputArray[i] = parseInt(prompt("Enter " + (i + 1) + " element: "));
}

for (let func of operation) {
    let result=func(inputArray[0], inputArray[1]);
    console.log(result)
} */
operation.forEach(function(func){
    console.log(func(3,4))
})


/* //anonymous function expression
const sum = function (x, y) {
    return x + y;
}
//named function expression
const product = function mult(x, y) {
    return x * y;
} */
/*Lexical scope: Variable defined outside the function can be accessible inside another function after
variable declaration. But the opposite is not true, variables defined inside a function won't
be accessible outside the function.*/
/*Higher order functions: Functions are simply values in JS, we can Accept function as
arguments or use them in array or return function as values*/
/*functions as arguments*/


