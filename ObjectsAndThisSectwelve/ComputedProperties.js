/*Add property with a dynamic key: We can use a variable as a key name in an
object literal property.*/
function WithoutComputedProperties() {
    const book = "Range";
    const author = "David Epstein";
    const ratingWeb = "GoodReads";
    const ratingGR = 4.6;
    /*This is where change is reflected.*/
    const BookDetail = {};
    BookDetail[book] = author;
    BookDetail[ratingWeb] = ratingGR;
    console.log(BookDetail);
}
function ComputedProperties() {
    const book = "Range";
    const author = "David Epstein";
    const ratingWeb = "GoodReads";
    const ratingGR = 4.6;
    /*This is where change is reflected, we can assign values all at once.
    Again, output doesn't change, just a coding convenience.*/
    const BookDetail = {
        [book]: author,
        [ratingWeb]: ratingGR
    }
    console.log(BookDetail);
}
function addPropertyWithoutCP() {
    const copy = {
        ...obj
    };
    copy[key] = val;
    return copy;
}
const addPropertyWithCP = (obj, key, val) => {
    return {
        ...obj,
        [key]: val
    }
}
ComputedProperties();
WithoutComputedProperties();