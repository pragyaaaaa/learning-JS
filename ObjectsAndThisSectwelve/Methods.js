/*When we add functions as properties on objects, they are called methods.*/
function methods() {
    const book = {
        title: function (str) {//method one
            return str;
        },
        author: function (str) {//method two
            return str;
        },
        ratings: function (num) {//method three
            return num;
        }
    }
    console.log(book.author("Cal Newport"));
}
function ShorthandForMethods(){
    const book = {
        title (str) {//here we don't need key:value notation with function keyword.
            return str;
        },
        author (str) {//method two
            return str;
        },
        ratings(num) {//method three
            return num;
        }
    }
    console.log(book.author("Cal Newport"));    
}
//methods();
ShorthandForMethods();