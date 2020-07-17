/*syntactically compact alternative to a regular function expression
They behave just like function expressions, but we have options regarding syntax
depending on number of params.*/
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