/*Syntactically compact alternative to a regular 
function expression (i.e. defining function inside an expression).
They behave just like function expressions, but we have options regarding syntax
depending on number of params.
1. Name can be omitted in function expressions to create anonymous functions.
2. Function expressions are NOT hoisted.
3. Arrow functions don't have their own 'this' value. The value of this inside an 
arrow function is always inherited from the enclosing scope.
4. Arrow functions can't be used as constructors.
5. Arrow functions don't have prototype property.
6. Arrow functions don't have their arguments object (rest parameters can be a good alternative).

A very nice article to read: https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
*/

function arrowFunction() {
    //parens are optional with one param
    const square = x => {
        return x * x;
    }
    console.log(square(12));
    const divides = (x, y) => {
        return x % y == 0;
    }
    console.log(divides(45267352736236286, 251431352735));
}

/*this doesn't work for multiple return expressions.*/
function arrowFunctionImplicitReturn() {
    //if we're just returning a single expression
    const square = n => (n * n); /*Equivalent to 
    const square = x => {
        return x * x;
    }*/
    //we can even remove parens
    const squareWithoutParens = n => n * n;
    console.log(square(902781));
    console.log(squareWithoutParens(2334242));

}
//function calls
//arrowFunction();
//arrowFunctionImplicitReturn();