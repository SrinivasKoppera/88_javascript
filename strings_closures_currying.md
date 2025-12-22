1. What is a String in JavaScript?

A string is a sequence of characters used to represent text.

let name = "JavaScript";

Important Concept

✔ Strings are immutable
✔ Any string method returns a new string, it does not modify the original

let str = "hello";
str.toUpperCase();
console.log(str); // still "hello"

2. Commonly Used String Methods
   2.1 length

Returns number of characters.

let email = "test@gmail.com";
console.log(email.length);

📌 Use case:

Validate password length
Limit input size

2.2 toUpperCase() / toLowerCase()
let city = "Hyderabad";
city.toUpperCase(); // "HYDERABAD"

📌 Use case:

Case-insensitive comparison
Search features

2.3 trim()

Removes spaces from start and end.

let username = " admin ";
username.trim();

📌 Real-world:

Form input cleanup
Prevent login issues due to spaces

2.4 includes()

Checks if string contains text.

let msg = "Welcome to JavaScript";
msg.includes("JavaScript"); // true

📌 Use case:

Search bar
Keyword detection

2.5 indexOf()

Returns position of substring.

let text = "hello world";
text.indexOf("world"); // 6

2.6 slice(start, end)

Extracts part of string.

let str = "JavaScript";
str.slice(0, 4); // "Java"

📌 Use case:

Masking phone numbers
Showing preview text

2.7 split()

Converts string to array.

let csv = "red,green,blue";
csv.split(",");

📌 Use case:

Convert user input
Process API data

2.8 replace()

Replaces first occurrence.

let msg = "Hello World";
msg.replace("World", "JS");

3. Common Beginner Mistakes (Strings)

❌ Forgetting trim() in form validation
❌ Using == for string comparison with spaces
❌ Confusing slice() and substring()

PART 2: JavaScript Closures

4. What is a Closure?

A closure is created when a function remembers variables from its outer scope, even after the outer function has finished executing.

4.1 Basic Example
function outer() {
let count = 0;

function inner() {
count++;
console.log(count);
}

return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

✔ count is remembered
✔ outer() is finished
✔ Still works → closure

4.2 Why Closures Exist

JavaScript uses lexical scoping.
Functions remember where they were created, not where they are called.

4.3 Real-World Use Cases

✔ Data privacy
✔ Counters
✔ Caching
✔ Event handlers
✔ React hooks (useState concept)

4.4 Example: Private Variable
function bankAccount() {
let balance = 1000;

return {
deposit(amount) {
balance += amount;
console.log(balance);
}
};
}

let acc = bankAccount();
acc.deposit(500); // 1500

❌ balance cannot be accessed directly

PART 3: JavaScript Currying

5. What is Currying?

Currying is a technique where a function takes one argument at a time and returns a new function.

5.1 Normal Function

function add(a, b) {
return a + b;
}

5.2 Curried Function
function add(a) {
return function (b) {
return a + b;
};
}

add(5)(3); // 8

5.3 Why Currying is Useful

✔ Reusability
✔ Cleaner code
✔ Functional programming
✔ Used in React & Redux

5.5 Common Mistakes

❌ Forgetting to call second function
❌ Overusing currying unnecessarily
❌ Confusing currying with closures (they are related but not same)

PART 4: JavaScript Recursive Functions

6. What is Recursion?

A function that calls itself until a base condition is met.

6.1 Basic Structure

function recurse() {
// base condition
// recursive call
}

6.2 Example: Countdown
function countdown(n) {
if (n === 0) return;
console.log(n);
countdown(n - 1);
}

countdown(5);

6.3 Important Concepts

✔ Base case → stops recursion
✔ Recursive case → function calls itself
✔ Without base case → stack overflow

6.4 Real-World Use Cases

✔ Tree structures (DOM)
✔ Folder/file traversal
✔ JSON parsing
✔ Algorithms (factorial)

6.5 Example: Factorial
function factorial(n) {
if (n === 1) return 1;
return n \* factorial(n - 1);
}

factorial(5); // 120

6.6 Common Mistakes (Recursion)

❌ Missing base condition
❌ Too deep recursion → call stack overflow
❌ Using recursion where loop is simpler
