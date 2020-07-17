/*shorthand properties*/
/* const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
} */
const array = [10, 11, 22, 12, 44, 21, 83, 92, 21];
//const stats = getStats(array);
/*in order to create an object with properties as calculated by getStats(), we can use shorthand notation 
like.*/
function WithOutShorthand() {
    const getStats = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const sum = arr.reduce((sum, r) => sum + r);
        const avg = sum / arr.length;
        return {
            max, min, sum, avg
        }
    }
    /*output doesn't changes with or without shorthand, just a writing convenience*/
    console.log("With shorthand: ");
    console.log(getStats(array));
}
/*without shorthand, it would look like this: */
function WithShorthand() {
    const getStats = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const sum = arr.reduce((sum, r) => sum + r);
        const avg = sum / arr.length;
        /*the change is reflected in return statement, where we don't need to assign the values again.*/
        return {
            max: max,
            min: min,
            sum: sum,
            avg: avg
        }
    }
    /*output doesn't changes with or without shorthand, just a writing convenience*/
    console.log("Without shorthand: ");
    console.log(getStats(array));
}
WithShorthand();
WithOutShorthand();