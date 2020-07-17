/*default params*/
function defparam() {
    //older way
    function multiply(x, y) {
        if (typeof (x) === 'undefined') x = 1;
        if (typeof (y) === 'undefined') y = 1;
        return x * y;
    }
    /*new way: pass default value as param instead of checking it inside function
    the order of parameters matter.*/
    function mult(x = 1, y = 1) {
        return x * y;
    }
    const greet = (person = 'Pragya', greeting = 'What\'s up?') => {
        return greeting + '' + person + ' !!!';
    }
    console.log(greet());
}

function SpreadFunctionCall() {
    /* function call, array literals, object literals*/
    /*function call: expands an iterable (array, string etc.) into list of arguments*/
    const numArr = [12, 78, 192, 3723, 90, 262, 11, 22, 12];
    //without spread
    console.log(Math.max(12, 78, 192, 3723, 90, 262, 11, 22, 12));
    console.log(Math.max(numArr));//gives NaN
    //with spread
    console.log(Math.max(...numArr));
    function assignTag(name, tag, author, rating) {
        console.log('Name: ' + name);
        console.log('Tag: ' + tag);
        console.log('Author: ' + author);
        console.log('Rating: ' + rating);
    }
    const bookArr = ['Range', 'SelfHelp', 'David Epstein', 4.7];
    //without spread
    assignTag(bookArr[0], bookArr[1], bookArr[2], bookArr[3]);
    assignTag(bookArr);/*Name: Range,SelfHelp,David Epstein,4.7
    Tag: undefined
    Author: undefined
    Rating: undefined*/

    //with spread
    assignTag(...bookArr);
    //spread works same with string, analogous to array of characters.

}
function SpreadArrayLiteral() {
    /*combine, make copy of array: returns a new array*/
    const numArr = [12, 78, 192, 3723, 90, 262, 11, 22, 12];
    const numArr2 = [2, 78, 19, 323, 0, 62, 91, 92, 1];
    //combining arrays using spread: analogous to concat, it just has a shorter syntax
    const combArray = [...numArr, ...numArr2]
    console.log(combArray);
    //copying an array
    const numArrCopy = [...numArr];
    console.log(numArrCopy);
}
function SpreadObjectLiteral() {
    /*copies properties from one object into another object literal*/
    const civilization = {
        name: "Homo Deus",
        author: "Yuval Noah Harari",
        rating: "4.3",
        tag: "civilization"
    };
    const selfhelp = {
        name: "Mindset",
        author: "Carol Dweck",
        rating: "4.6",
        tag: "selfhelp"
    };
    const language = {
        writtenIn: 'English',
        translatedTo: 'Japanese'
    }
    //merging two object properties into one: order matters.
    const selfhelpLang={
        ...language,
        ...selfhelp
    }
    console.log("Merged:");
    console.log(selfhelpLang);
    //cloning object
    const selfhelpCopy={
        ...selfhelp
    };
    console.log("Copy:");
    console.log(selfhelpCopy);
    //object isn't an iterable: we can't spread it.
    console.log(...selfhelpLang);//error
}
function Rest(){
    /*Collects things into one array: analogous to arguments object*/
    //old way: arguments don't work in arrow functions
    function sum(){
        console.log(arguments);
        //arguments.reduce((acc,curr)=>acc+curr);/*this doesn't work, it's not an array*/
        /*we can convert arguments into array using spread*/
        const argArr=[...arguments];
        console.log(argArr.reduce((acc,curr)=>acc+curr));
    }
    sum(1,2,34,56,78,89,9,9,10,14,51);
    //new way: rest(), this works in arrow function
    function sumRest(...nums){
        //this works in rest since it returns an array
        console.log(nums.reduce((acc,curr)=>acc+curr));
    }
    function sumRestTwoParams(first, second,...nums){
        //this works in rest since it returns an array
        console.log("first: "+first+" Second: "+second);
        console.log(nums.reduce((acc,curr)=>acc+curr));
    }
    sumRest(1,2,34,56,78,89,9,9,10,14,51);
    sumRestTwoParams(34,56,1,2,34676,56,78,89,9,9,10,14,51);
}
//function call
//defparam();
//SpreadFunctionCall();
//SpreadArrayLiteral();
//SpreadObjectLiteral();
//Rest();