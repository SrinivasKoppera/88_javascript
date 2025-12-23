1. JavaScript Destructuring

1.1 What is Destructuring?

Destructuring is a way to extract values from arrays or objects and store them in variables in a single line.

Think of it as unpacking values from a box.

1.2 Array Destructuring
Without destructuring:

const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];

With destructuring:
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first); // red
console.log(second); // green

Skipping values:
const [, , third] = colors;
console.log(third); // blue

1.3 Object Destructuring
Without destructuring:
const user = {
name: "Alex",
age: 16,
country: "Canada"
};

const name = user.name;
const age = user.age;

With destructuring:
const { name, age } = user;
console.log(name, age);

Renaming variables:
const { name: userName } = user;
console.log(userName);

1.4 Real-World Use Case

When working with APIs or function parameters:

function displayUser({ name, age }) {
console.log(`${name} is ${age} years old`);
}

Common Mistakes

❌ Trying to destructure undefined or null
✅ Always ensure the object or array exists

2. Spread (...) and Rest (...) Operators

Important: Spread and Rest use the same syntax (...) but work differently depending on context.

2.1 Spread Operator (Expanding)
What does Spread do?

It spreads values out of an array or object.

Spread with Arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1,2,3,4,5]

Spread with Objects
const user = { name: "Alex", age: 16 };
const updatedUser = { ...user, country: "Canada" };

Real-World Use Case

Avoid mutating original data (important in React & modern JS):

const scores = [10, 20, 30];
const updatedScores = [...scores, 40];

2.2 Rest Operator (Collecting)
What does Rest do?

It collects multiple values into a single array.

Rest in Functions
function sum(...numbers) {
return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10

Rest in Destructuring
const [first, ...others] = [1, 2, 3, 4];
console.log(others); // [2,3,4]

Common Mistakes

❌ Using rest not as the last parameter
✅ Rest must always be last

3. Callbacks
   3.1 What is a Callback?

A callback is a function passed into another function to be run later.

JavaScript is asynchronous — callbacks help handle tasks that take time.

Simple Example
function greet(name, callback) {
console.log("Hello " + name);
callback();
}

greet("Alex", function () {
console.log("Welcome to JavaScript!");
});

Real-World Example: Timers
setTimeout(() => {
console.log("This runs after 2 seconds");
}, 2000);

Problem with Callbacks: Callback Hell
doTask1(() => {
doTask2(() => {
doTask3(() => {
console.log("Done");
});
});
});

❌ Hard to read
❌ Hard to debug

➡️ This is why Promises were introduced.
