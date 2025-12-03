1. Why Loops? (Concept Introduction)

In real-time applications, we often need to repeat actions:

✔ Display list of users
✔ Calculate totals in arrays
✔ Fetch multiple records from API
✔ Run a block of code until a condition is met

Instead of writing the same code again and again:

console.log(1);
console.log(2);
console.log(3);

We use loops to automate repetition.

2. Types of Loops in JavaScript

JavaScript provides:

for loop
while loop
do…while loop
for…in loop
for…of loop

Array iteration methods (ES6+)
forEach()
map(), filter(), reduce() (advanced)

3. The for Loop

Most commonly used loop.
Best when number of iterations is known.

Syntax
for (initialization; condition; increment/decrement) {
// code to execute
}

Example: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
console.log(i);
}

Real-time Example: Loop through product list
let products = ["Mobile", "Laptop", "Mouse", "Keyboard"];

for (let i = 0; i < products.length; i++) {
console.log("Product:", products[i]);
}

Common Beginner Mistakes

❌ Missing increment → infinite loop
❌ Using <= array.length (off-by-one error)

4. The while Loop

Used when number of iterations is unknown.
Executes only if condition is true.

Syntax
while (condition) {
// code
}

Example: Countdown
let count = 5;

while (count > 0) {
console.log(count);
count--;
}

5. The do…while Loop

Executes at least once, even if condition is false.

Syntax
do {
// code
} while (condition);

Example
let i = 1;

do {
console.log(i);
i++;
} while (i <= 5);

Real-time Example: User login attempt popup
let password;

do {
password = prompt("Enter password:");
} while (!password);

First iteration runs before checking correctness.

6. for…in Loop

Used to iterate over object keys.

Syntax
for (let key in object) {
// code
}

Example
let person = {
name: "Rahul",
age: 25,
city: "Hyderabad"
};

for (let key in person) {
console.log(key, ":", person[key]);
}

Real-time Use

✔ Inspect API response keys
✔ Validate required fields in forms

Warning

Not recommended for arrays → order is not guaranteed.

7. for…of Loop (ES6)

Used to iterate directly over values of:

Arrays

Strings

Syntax
for (let value of iterable) {
// code
}

Example
let colors = ["red", "green", "blue"];

for (let color of colors) {
console.log(color);
}

Real-time Example: Loop through characters
for (let char of "JavaScript") {
console.log(char);
}

8. Loop Control: break & continue
   break → exits loop
   for (let i = 1; i <= 10; i++) {
   if (i === 5) break;
   console.log(i);
   }

continue → skip iteration
for (let i = 1; i <= 5; i++) {
if (i === 3) continue;
console.log(i);
}
