# Javascript Refresher

## Variables

You can use `var`, `let` and `const`.

### Difference between "var" and "let"

Starting wit JavaScript ES6 in 2015, we can also declare variable with `let` and `const`. Before 2015, only `var` was used.

`let` does not let you declare a variable twice.

> Recommandation: always `let` instead of `var`.

variable names are case sensitive. MyVariable is different of myVariable.

Look at the `Scopes` part, to see some examples.

### The const keyword

`const` has all the features of `let`, however, it is read-only, so you **cannot reassign** a const variable.

> Note: while you cannot reassign an array or an object declared with `const` you can mutate it (add, update and remove elements or properties). However, if you want to prevent data mutation of these arrays or objects, you can use the `Object.freeze` method.

```js
const MATH_CONSTANTS = {
  PI: 3.14,
};
Object.freeze(MATH_CONSTANTS);

MATH_CONSTANTS.PI = 99; // Error
```

### Scopes

#### Global scope

A variable `defined outside of a function` will have a global scope and can be accessed everywhere in the Javascript code.

A variable `defined without 'var' or 'let' or 'const' keyword` will have a global scope, `even if the variable has been defined inside of a function`.

#### Local scope

A variable `defined inside of a function with one of the key words 'var' or 'let' or 'const'` will have a local scope and will only be accessible within this function.

Functions parameters also have a local scope.

A variable defined with `let` inside a block which is inside a function will be accessible only in the block.

```js
function checkScope() {
  if (true) {
    let i = "block scope";
    console.log("Scope i is: ", i); // output: block scope
  }
  console.log("Scope i is: ", i); // Error: is is not defined
}
```

A variable defined with `var` inside a block which is inside a function will be accessible in this block and outside the block.

```js
function checkScope() {
  if (true) {
    var i = "block scope";
    console.log("Scope i is: ", i); // output: block scope
  }
  console.log("Scope i is: ", i); // output: block scope
}
```

```js
function checkScope() {
  var i = "function scope";
  if (true) {
    var i = "block scope"; // same without var
    console.log("Scope i is: ", i); // output: block scope
  }
  console.log("Scope i is: ", i); // output: block scope
}
```

```js
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Scope i is: ", i); // output: block scope
  }
  console.log("Scope i is: ", i); // output: function scope
}
```

#### Precedence / Priority

If a global and a local variable have the same name, then the local variable will take precedence over the global variable.

## Data types

- **undefined**: represents a declared but not assigned/initialized variable value. Type undefined
- **null**: represents an `explicitly` assigned variable with an empty or non-existent value. Type object
- **symbol**: guarentee creating unique property keys in objects.
- **boolean**
- **string**
- **number**
- **object**

## Strings

### Quoting Strings

you can use

- single quote ': you can use it to avoid escaping "" in a string
- double quote ""
- back quote `: you can use it to be a able to use single quote and double quote in a string as part of the string.
  - you can also use it to pass variable in a string `${myVar}`
  - it also support multilines strings

### Escaping caracters

- \' escape single quote
- \" escape double quote
- \\ escape backslash
- \n new line
- \r return
- \t tab
- \b backspace
- \f form feed

Example:

```js
let myStr = "First line\n\t\\Second line\nThird line";
console.log(myStr);
```

Output:

```
First line
	\Second line
Third line
```

### Operations on Strings

A String character is immutable.

```js
let myStr = "Jello World";
```

Will produce an error

```js
myStr[0] = "H";
```

## Operations on Arrays

- push(): adds a new element at the end of the array
- pop(): removes the last element of an array and returns it
- shift(): removes the first element of an array and returns it
- unshift(): adds a new element at the beginning of an array

## Operators

### Equals operator "==" vs "===" strict equals operator

It tries to perform a type conversion before evaluation.

Example:

```js
3 == "3";
```

Here, the '3' will be converted to a number before evaluation, resulting to `true`.

```js
3 === "3";
```

Here, a strict evaluation is done without type conversion, resulting to `false`.

Same for `!=` and `!==`.

## Javascript objects

Objects are similar to arrays in Javascript, but instead of accessing elements by index, objects use properties.

### Accessing objects

```js
const myObject = {
  firstname: "Diego",
  lastname: "Lee",
  future: "milliardaire",
};

// Accessing the object properties in 2 different ways
const firstname = myObject["firstname"];
const lastname = myObject.lastname;

console.log(firstname);
console.log(lastname);

// Updating object properties
myObject.future = "I'm a future milliardaire";

// Adding a new property to an object
myObject.age = 20;

// Deleting a property with the keyword "delete"
delete myObject.age;

// Checking if an object has a property
myObject.hasOwnProperty("age");
```

## Functions

### Anonymous and Arrow functions

Anonymous and Arrow functions do not have a name.

```js
// Anonymous function
let magic = function () {
  return new Date();
};

// Anonymous arrow function
const magic = () => {
  return new Date();
};

// Anonymous arrow function - if the function does not have any logic and just return one value, it can even be shorter, getting rid of the 'return' keyword and calibraces.
const magic = () => new Date();
```

> Note: whenever a function takes another function as a parameter, this is a good time to use an arrow function. Examples are filter or map functions on collections.

### Immediately Invoked Function Expression (IIFE)

`(function(){...})()` is an IIFE, meaning that the function if defined and immediately executed. It is a kind of self-invoking function that runs as soon as it is defined.

It is often used to create a private scope, ensuring that variables inside the function do not pollute the global namespace.

Example:

```js
const increment = (function () {
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(2, 3)); // Outputs: 5
```

- Inside this IIFE, there is another function (the increment function) that is returned by the IIFE.
- t immediately returns the increment function when it runs.
- The increment function is assigned to the increment constant.

### The REST operator

It allows a function to take a variable number of arguments.

Given:

```js
const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // output: 6
/**
 * reduce is a method that processes an array element by element, applying a function (in this case, (a, b) => a + b) and accumulating the result.
 * a is the accumulator (starts at 0 due to the second argument of reduce).
 * b is the current element of the array.
 */

// Reduce method
array.reduce((accumulator, currentValue) => {
  // logic
}, initialValue);
```

Instead of expecting (x, y, z) we want a dynamic number of arguments. So we will use `(...args)`. This will convert all passed parameters into an array.

```js
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); // output: 10
```

### The SPREAD operator

The SPREAD operator looks like the REST operator with `...`. But it spreads out or copy the contain of an already existing array, into another array with a different reference in the memory.

Given:

```js
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = arr1;
arr1[0] = "potato";

console.log(arr2); // output: [ 'potato', 'FEB', 'MAR', 'APR', 'MAY' ]
```

In the output, we can see that the first element of arr2 has the value 'potato', although we update happened on arr1. This is because arr2 is deep copy (same memory reference) of arr1. With the SPREAD operator, arr2 will have its own copy of arr1's data in a separate memory reference.

```js
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];
arr1[0] = "potato";

console.log(arr2); // output: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]
```

The SPREAD operator can be applied on these object types:

**1. Iterable Objects**

**a) Arrays**
You can spread elements of an array into another array or as arguments to a function.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

**b) Strings**
Strings are iterable, so you can spread characters into an array.

```js
const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
```

**c) Sets**
The spread operator can be used to convert a Set into an array, effectively removing duplicates.

```js
const mySet = new Set([1, 2, 3]);
const arr = [...mySet]; // [1, 2, 3]
```

**d) Maps**
You can spread a Map, but it produces an array of key-value pairs.

```js
const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);
const arr = [...myMap]; // [['a', 1], ['b', 2]]
```

**e) Typed Arrays**
Typed arrays, such as Int32Array or Uint8Array, can also be spread into regular arrays.

```js
const typedArray = new Int32Array([10, 20, 30]);
const normalArray = [...typedArray]; // [10, 20, 30]
```

**2. Plain Objects**

In ES2018 (ES9), the spread operator was extended to work with plain objects ({}). Unlike iterables, plain object spreading is specifically for copying or merging object properties.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Object Destructuring

It is a simple wy to assign object data to variable.

Destructuring objects

````js
let position = {
    x: 3.6,
    y: 7.4
};

// old way of assignement
let x = position.x;
let y = position.y;

// with destructuring
const {x, y} = position;
console.log("posX= " + x + " and posY= " + y);

// or
const {x: posX, y: posY} = position;
console.log("posX= " + posX + " and posY= " + posY);

// destructuring by passing only needed values as parameters to a function
const user = {
    firstname: "Diego",
    lastname: "Lee",
    age: 20
}

const isAdult = (function() {
    // instead of passing the whole user object from API response, we can just pass the age
    return function isAdult({age}) {
        return age >= 18;
    }
})();
console.log("Is user adult? ", isAdult(user)); // output: true

Destructuring arrays
```js
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a,b,c); // a=1, b=2, c=5

// permutate variable
let i = 8, j = 6;
[i, j] = [j, i];
console.log(i, j); // output: i=6, j=8

// remove the first two elements of a list using spread operator and destructuring
const source = [1, 2, 3, 4, 5, 6];
const [ , , ...arr] = source;
console.log(source);// output: [1, 2, 3, 4, 5, 6]
console.log(arr); // output: [3, 4, 5, 6]
````

### Simple fields

```js
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
```

If you know the returned object has the same field names as the parameters, you can simplify the function

```js
const createPerson = (name, age, gender) => ({ name, age, gender });
```

### Declarative functions

An object can contains a function

```js
const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};
```

You can simplify it by removing the function keyword and colom.

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
```

## Classess, Getters and Setters
```js
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
```

## Export files
We want to export files to make functions and variables available to other files project wide. I permit reusability of code block and global variables.

```js
//export a function
const capitalizeString = (string) => {
    return string.chartAt(0).toUpperCase() + string.slice(1);
};

export {capitalizeString};

// export variables
export const REALM = "zeventhub";
export const ORGANIZATION = "izigo-services";

// default export as fallback
export default function substract(x, y) {return x - y;}
```

## Import from files
```js
// import everything from a file
import * as capitalizeString from "./capitalize_string"

// import a specific item from a file
import {capitalizeString} from "./capitalize_string"

// import default - for default export you don't need {} when importing
import substract from "./capitalize_string"
```
