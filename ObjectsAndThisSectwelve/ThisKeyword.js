/*'this' is a reference to an object and that object represents the current execution scope.*/
function thisObj() {
    const book = {
        title: 'Deep Work',
        author: 'Cal Newport',
        detail() {
            console.log(this);
        }
    }
    book.detail();
}
thisObj();