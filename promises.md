1️⃣ Why Do We Need Asynchronous Code in JavaScript?

JavaScript is single-threaded
➡️ It can do only one task at a time

But real applications need to:

Fetch data from server
Read files
Call APIs
Wait for user actions
Use timers

These tasks take time and cannot block the main thread.

So JavaScript uses asynchronous programming.

2️⃣ The Old Way: Callbacks
What is a Callback?

A callback is a function passed as an argument to another function, executed later.

function fetchData(callback) {
setTimeout(() => {
callback("Data received");
}, 2000);
}

fetchData(function(result) {
console.log(result);
});

✔ Works
❌ But creates problems as applications grow

3️⃣ Problems with Callbacks (WHY PROMISES CAME)
🔴 Problem 1: Callback Hell

Nested callbacks become unreadable and unmaintainable.

login(user, () => {
getProfile(() => {
getOrders(() => {
getPayments(() => {
console.log("Done");
});
});
});
});

This is called Callback Hell / Pyramid of Doom.

🔴 Problem 2: Error Handling is Messy

Errors must be handled at each level.

doTask1((err, res) => {
if (err) { ... }
doTask2((err, res) => {
if (err) { ... }
});
});

Hard to manage, easy to miss errors.

🔴 Problem 3: Inversion of Control

You trust another function to call your callback correctly:

Once?

Multiple times?

Never?

You lose control.

👉 Solution: Promises
4️⃣ What is a Promise? (Core Definition)

A Promise represents a value that will be available now, later, or never.

It is an object that represents the eventual completion or failure of an asynchronous operation.

5️⃣ Promise States (VERY IMPORTANT)
State Meaning
pending initial state, waiting
fulfilled operation completed successfully
rejected operation failed
finally

👉 A promise can change state only once

7️⃣ Creating a Promise
Syntax
let promise = new Promise((resolve, reject) => {
// async operation
});

resolve(value) → success

reject(error) → failure

Example: Simple Promise
let promise = new Promise((resolve, reject) => {
let success = true;

if (success) {
resolve("Task completed");
} else {
reject("Task failed");
}
});

8️⃣ Consuming a Promise: .then() and .catch()
Basic Usage
promise
.then(result => {
console.log(result);
})
.catch(error => {
console.log(error);
});

✔ Clean
✔ Readable
✔ Centralized error handling

9️⃣ Promise with Asynchronous Code (Real Example)

Using setTimeout
function getData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Data fetched");
}, 2000);
});
}

getData().then(data => console.log(data));

🔟 Why Promises Are Better Than Callbacks (Comparison)
Feature Callback Promise
Readability Poor Clean
Error handling Complex .catch()
Chaining Difficult Easy
Control Lost Maintained
Async flow Nested Linear
11️⃣ Promise Chaining (IMPORTANT)

Promises allow sequential async operations.

getUser()
.then(user => getOrders(user))
.then(orders => getPayments(orders))
.then(payment => console.log(payment))
.catch(err => console.log(err));

✔ Looks like synchronous code
✔ No callback hell

12️⃣ How Promise Chaining Works (Internally)

.then() always returns a new promise

Value returned → passed to next .then()

Error → jumps to nearest .catch()

13️⃣ Error Handling in Promises
Rejecting
reject("Something went wrong");

Catching
.catch(error => console.log(error));

Throw inside .then()
.then(data => {
throw new Error("Error occurred");
})
.catch(err => console.log(err.message));
