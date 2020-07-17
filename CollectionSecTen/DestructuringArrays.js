function destructuringArrays() {
    const books = [
        'The Fault in our stars',
        'Range',
        'mindset'
    ];
    //withour destructuring
    const TFIOS = books[0];
    const range = books[1];
    const mind = books[2];

    //with destructuring
    const [TFIOUSd, rangeD, mindD] = books;
    console.log(TFIOUSd, rangeD, mindD);
    //to skip an index
    const [first, , third] = books;
    console.log(first, third);
    //collect rest of array as arrays: rest()
    const [element, ...others] = books;
    console.log(element, others);
}

function destructuringObjects() {
    let civilization = {
        name: "Homo Deus",
        author: "Yuval Noah Harari",
        rating: "4.3",
        tag: "civilization",
        language: 'eng',
        translation: 'japan'
    };
    /* //object destructuring
    const { name, author } = civilization;
    console.log(name, author);
    //object destructuring: renaming property names
    const { name: bookName, author: bookAuthor } = civilization;
    console.log(bookAuthor, bookName); */
    //destructuring parameters
    function dest(civilization){
        const {tag, author}=civilization;
        console.log(`${tag} ${author}`);
    }
    dest();
}
//function call
//destructuringArrays();
destructuringObjects();