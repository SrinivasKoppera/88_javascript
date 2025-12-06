1. Introduction to Functions
   What is a Function?

A function is a reusable block of code designed to perform a specific task.
Instead of rewriting the same logic multiple times, we put the logic inside a function and call it whenever needed.

Why Functions Are Important?

Reusability — Write once, use many times
Cleaner Code — Avoid repetition
Modularity — Break complex programs into smaller parts
Debugging becomes easy — Errors are isolated within functions
Scalability — Code is easier to maintain in real-world applications

Real-world analogy

A function is like a machine in a factory.
You give it input (raw material), it processes it, and returns output (finished product).

2. Function Types in JavaScript

JavaScript supports multiple ways of creating functions:

Function Declaration
Function Expression
Arrow Functions (ES6)
Anonymous Functions
Callback Functions
Immediately Invoked Function Expressions (IIFE)
Constructor Functions (for object creation)
Higher-Order Functions (HOF)

3. Function Declaration
   Syntax
   function functionName(parameters) {
   // code
   }

Example
function greet() {
console.log("Hello Students!");
}

greet(); // Function call

Characteristics

Hoisted (can be called before definition)
Easy to read and understand

Real-world Example

function calculateAreaOfRoom(length, width) {
return length \* width;
}

console.log(calculateAreaOfRoom(10, 20)); // 200 sqft

4. Function Parameters and Arguments

Parameters

    Variables written inside function definition.

Arguments

    Values we pass when calling the function.

Example
function add(a, b) {
return a + b;
}

console.log(add(10, 20)); // a = 10, b = 20

Default Parameters
function greet(name = "Student") {
console.log("Hello " + name);
}

greet(); // Hello Student
greet("Srinivas"); // Hello Srinivas

5. Return Statement

A function can send a value back using return.

Example
function multiply(a, b) {
return a \* b;
}

let result = multiply(5, 4);
console.log(result);

Important Notes

Code after return will not execute.

A function without return gives undefined.

6. Function Expression

A function stored in a variable.

Syntax
const greet = function() {
console.log("Hello!");
};

Characteristics

Not hoisted (cannot call before definition)

Useful when passing functions as data

Example
const square = function(num) {
return num \* num;
};

console.log(square(5)); // 25

7. Arrow Functions (ES6+)

A modern, shorter way to write functions.

Syntax
const functionName = (parameters) => {
// code
};

Examples
const add = (a, b) => a + b;
console.log(add(3, 4));

One Parameter
const double = x => x \* 2;

No Parameters
const greet = () => console.log("Hello!");

Real-world Example

Useful in array methods:

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num \* 2);
console.log(doubled);

8. Anonymous Functions

Functions without a name.

Used mostly in:

Callbacks
Event handlers

Example
setTimeout(function() {
console.log("Delayed message");
}, 2000);

9. Callback Functions

A function passed as an argument to another function.

Why needed?

To handle:

Asynchronous tasks (API calls, timers)
Array methods (map, filter, reduce)

Example
function processUserInput(callback) {
let name = "Ravi";
callback(name);
}

processUserInput(function(n) {
console.log("Hello " + n);
});

Real-world example (Asynchronous)

setTimeout(() => {
console.log("Fetching data...");
}, 2000);

10. Immediately Invoked Function Expression (IIFE)
    Purpose

Avoid polluting global scope
Create private environments

Syntax
(function() {
console.log("IIFE executed!");
})();

Example
let result = (function(num) {
return num \* 10;
})(5);

console.log(result); // 50

11. Higher-Order Functions (HOF)

A function that:

Accepts another function as argument

Returns a function

Example
function calculate(operation, a, b) {
return operation(a, b);
}

function multiply(x, y) {
return x \* y;
}

console.log(calculate(multiply, 5, 3));

12. Function Scope

Understanding scope is critical.

1. Local Scope

Variables inside a function are not accessible outside.

function test() {
let x = 10;
}
console.log(x); // Error

2. Global Scope

Variables declared outside functions are global.

3. Block Scope (let, const)

Using let and const restricts value to block.

13. Common Mistakes Beginners Make
    ❌ Forgetting to return value
    function add(a, b) {
    a + b; // Wrong
    }

❌ Using function before initialization (Function Expression)
add(3, 4); // Error
const add = function() {};

❌ Misunderstanding arguments vs parameters
❌ Overusing global variables inside functions
❌ Using arrow functions as constructors

Arrow functions cannot be used to create objects using new.

14. Best Practices

✔ Use function names that describe action
✔ Use arrow functions for short logic
✔ Use missing parameters default values
✔ Use return early to simplify conditions
✔ Avoid too many arguments → use objects instead
✔ Keep functions small and focused (Single Responsibility Principle)

Example of a clean function:
function calculateTax(amount, taxRate = 0.18) {
return amount \* taxRate;
}

15. Real-Time Examples for Class Demonstration
    Example 1: Form Validation
    function validateEmail(email) {
    return email.includes("@");
    }

console.log(validateEmail("test@gmail.com"));

Example 2: Shopping Cart Total
function calculateTotal(cart) {
return cart.reduce((sum, item) => sum + item.price, 0);
}

let cart = [
{ name: "Mobile", price: 12000 },
{ name: "Earphones", price: 1500 }
];

console.log(calculateTotal(cart));

Example 3: API Simulation
function fetchUser(callback) {
setTimeout(() => {
callback({ name: "Ram", age: 25 });
}, 2000);
}

fetchUser(user => {
console.log("User:", user);
});
