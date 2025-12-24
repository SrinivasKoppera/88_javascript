1️⃣ What Is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

You order food online

Pending → Order placed
Fulfilled → Food delivered
Rejected → Order cancelled

1. Promise.all([promises1, promise2, promises3]) Method

Purpose: Promise.all() takes an array of promises and returns a single promise that resolves when all the promises are resolved or rejects when any of them reject.

It is useful when you want to wait for multiple promises to complete.

let promise1 = Promise.resolve(3);
let promise2 = Promise.resolve(5);
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Hello"));

Promise.all([promise1, promise2, promise3])
.then((values) => {
console.log(values); // [3, 5, "Hello"]
})
.catch((error) => {
console.error("One of the promises failed:", error);
});
If any of the promises reject, Promise.all() will immediately reject and call the .catch() method.

2. Promise.race() Method

Purpose: Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise in the array settles (either resolves or rejects).

It is useful when you want to race multiple asynchronous operations, and you're only interested in the first one to complete.

let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 200, "First"));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2])
.then((result) => {
console.log(result); // "Second" (because it resolves first)
})
.catch((error) => {
console.error(error);
});

3. Promise.allSettled() Method

Purpose: Promise.allSettled() is used when you want to know the outcome of all promises, regardless of whether they are fulfilled or rejected.

It returns an array of objects with the status (fulfilled or rejected) and the value or reason for each promise.

let promise1 = Promise.resolve(42);
let promise2 = Promise.reject("Error!");

Promise.allSettled([promise1, promise2])
.then((results) => {
console.log(results);
// [{ status: "fulfilled", value: 42 }, { status: "rejected", reason: "Error!" }]
});

4. Promise.any() Method

Purpose: Promise.any() takes an array of promises and returns the first promise that resolves. If all promises reject, it will reject with an AggregateError.

let promise1 = Promise.reject("First error");
let promise2 = Promise.reject("Second error");
let promise = Promise.resolve("Third success");

Promise.any([promise1, promise2, promise3])
.then((result) => {
console.log(result); // "Third success"
})
.catch((error) => {
console.error("All promises were rejected:", error);
});
