let myStr = "First line\n\t\\Second line\nThird line"
console.log(myStr)

// Javascript Objects
const myObject = {
    "firstname": "Diego",
    "lastname": "Lee",
    "future": "milliardaire"
}

// Accessing the object properties in 2 different ways
const firstname = myObject['firstname'];
const lastname = myObject.lastname;

console.log("My firstname is " + firstname);
console.log("My lastname is " + lastname);

// Adding a property
myObject.age = 20;
console.log(myObject);

// Checking if an object has a property
const hasProperty = myObject.hasOwnProperty('age');
console.log('myObject has property "age"? ' + hasProperty);

// Deleting a property
delete myObject.age;
console.log(myObject);


function checkScope(){
//"use strict";
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Scope i is: ", i);
    }
    console.log("Scope i is: ", i);
}

checkScope();

// IIFE
const increment = (function() {
    return function increment(number, value) {
        return number + value;
    }
})();

// REST operator
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    }
})();
console.log(sum(1, 2, 3)); // output: 6

/// SPREAD operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
arr1[0] = 'potato';

console.log(arr2);

// Object Deconstruction
let position = {
    x: 3.6,
    y: 7.4
};

// old way of assignement
// let x = position.x;
// let y = position.y;

// with destructuring
const {x: posX, y: posY} = position;
console.log("posX= " + posX + " and posY= " + posY);

// or
const {x, y} = position;
console.log("posX= " + x + " and posY= " + y);

// destructuring by passing only needed values as parameters to a function
const user = {
    firstname: "Diego",
    lastname: "Lee",
    age: 20
}

const isAdult = (function() {
    return function isAdult({age}) {
        return age >= 18;
    }
})();
console.log("Is user adult? ", isAdult(user)); // output: true


//Destructuring from arrays
const [a, b, , , c] = [1, 2, 3, 4, 5, 6]; // a=1, b=2, c=5
console.log(a,b,c);

// permutate variable
let i = 8, j = 6;
[i, j] = [j, i];
console.log(i, j); // output: i=6, j=8

// remove the first two elements of a list using spread operator and destructuring
const source = [1, 2, 3, 4, 5, 6];
const [ , , ...arr] = source;
console.log(source);// output: [1, 2, 3, 4, 5, 6]
console.log(arr); // output: [3, 4, 5, 6]

// classes, getters and setters
class Book {
    #author; // private field
    constructor(author){
        this.#author = author;
    }

    get author(){
        return this.#author;
    }

    set author(author){
        this.#author = author;
    }
}

let myBook = new Book('Diego');
console.log("myBook author is: ", myBook.author);
myBook.author = "Lee";
console.log("myBook author is: ", myBook.author);




