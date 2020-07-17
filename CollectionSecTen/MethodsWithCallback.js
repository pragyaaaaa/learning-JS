/*forEach*/
function ForEach() {
    const nums = [9, 1, 2, 3, 5, 6, 7, 8, 9];
    //way 1: anonymous function: more usual way of using forEach
    nums.forEach(function (x) {
        console.log(x * x);
    })
    //index is in-built in forEach
    nums.forEach(function (x, index) {
        console.log(index + ": " + x * x);
    })
    //way 2: standalone function
    function printtriple(n) {
        console.log(n * n * n);
    }
    nums.forEach(printtriple);
}

/*map*/
function Map() {
    const texts = ['you', 'are', 'a', 'firework'];
    /*we need to return a value that's how map knows what values need to be 
    mapped to the new array. If we don't return anything, map() simply takes 
    undefined and create an array with undefined as it elements.*/
    const caps = texts.map(function (t) {
        return t.toUpperCase();
    });
    caps.forEach(function (tEl) {
        console.log(tEl);
    });
    const lenOfText = texts.map(function (t) {
        return t.length;
    })
    lenOfText.forEach(function (ele) {
        console.log(ele);
    })
    const num = [12, 13, 14, 15, 16, 17, 18, 19, 20];
    //multiple return statement: returning an object
    const retObject = num.map(function (ele) {
        return {
            value: ele,
            isEven: ele % 2 == 0,
            isOdd: ele % 2 != 0,
            index: ele.toString,
            len: ele.toString.length
        }
    })
    retObject.forEach(function (ele) {
        console.log(ele);
    })
}
function Find() {
    let movies = [
        "Wolverine",
        "X-men",
        "Harry Potter",
        "Inception"
    ];
    const harry = movies.find(movie => {
        return movie.includes('Harry');
    })
    console.log(harry);
}
function Filter() {
    let movies = [
        "Wolverine",
        "X-men",
        "Harry Potter",
        "Inception"
    ];
    const minLen = movies.filter(el => {
        return el.length >= 6;
    })
    minLen.forEach(t => console.log(t));
}
function EveryNSome() {
    let movies = [
        "Wolverine",
        "X-men",
        "Harry Potter",
        "Inception"
    ];
    //check if each element passes a check
    const minLenE = movies.every(el => {
        return el.length >= 9;
    })
    //check if any function passes the check
    const minLenS = movies.some(el => {
        return el.length >= 9;
    })
    console.log("Every: " + minLenE);
    console.log("Some: " + minLenS);
}
function Sort() {
    const num = [12, 13, 14, 15, 16, 17, 18, 19, 20];
    /*by default, array.sort() sorts array as per string values, not integers.
    for changing thi sdefault behaviour, we can use callbacks, like the following;
    arr.sort(compareFunction(a,b):
    if compareFunction(a,b) returns a value less than 0: sort a before b
    if compareFunction(a,b) returns a value equal to 0: leave a and b unchanged
    if compareFunction(a,b) returns a value greater than 0: sort b before a
    */
    /*this method MUTATES THE ORIGINAL ARRAY*/
    const sortedAsc = num.sort((a, b) => a - b);
    console.log("Ascending: ")
    sortedAsc.forEach(ele => console.log(ele));
    /*in order to not sort in place, we can create a copy of array using slice()*/
    const sortedDesc = num.slice().sort((a, b) => b - a);
    console.log("Descending: ")
    sortedDesc.forEach(ele => console.log(ele));
}
function Reduce() {
    /*executes a reducer function on each array element resulting in a single value.
    arr.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue;
    })
    */
    const num = [12, 13, 14, 15, 16, 17, 18, 19, 20];
    const maxVal = num.reduce((max, currentValue) => {
        if (currentValue > max) return currentValue;
        return max;
    })
    console.log("Maximum value in array: " + maxVal);
    const minVal = num.reduce((min, currentValue) => {
        if (currentValue < min) return currentValue;
        return min;
    })
    console.log("Minimum value in array: " + minVal);
    let bookObj = [
        {
            name: "The fault in our stars",
            author: "John Green",
            rating: "4.5",
            tag: "fiction"
        },
        {
            name: "Homo Sapiens",
            author: "Yuval Noah Harari",
            rating: "4.8",
            tag: "history"
        },
        {
            name: "Homo Deus",
            author: "Yuval Noah Harari",
            rating: "4.3",
            tag: "civilization"
        },
        {
            name: "Mindset",
            author: "Carol Dweck",
            rating: "4.6",
            tag: "selfhelp"
        },
        {
            name: "Range",
            author: "David Epstein",
            rating: "4.7",
            tag: "selfhelp"
        }

    ]
    /* const minVal = num.reduce((min, currentValue) => {
        if (currentValue < min) return currentValue;
        return min;
    }) */
    let bookString = bookObj.reduce((accumulator, currentValue) => {
        if (currentValue.tag === 'selfhelp') accumulator = accumulator + ' ' +currentValue.name;
        return accumulator;
    })
    console.log(bookString);
    //standalone version
    let bookString2 = (accumulator, currentValue) => {
        if (currentValue.tag.includes('civilization')) accumulator = accumulator + ' ' +currentValue.name;
        return accumulator;
    }
    console.log(bookObj.reduce(bookString2));
}

//function calls
Reduce();
//Sort();
//EveryNSome();
//Filter();
//ForEach();
//Map();
//Find();