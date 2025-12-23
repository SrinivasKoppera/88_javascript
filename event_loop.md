1. First: Why Do We Even Need These?

JavaScript is single-threaded, meaning:

👉 It can do one thing at a time
👉 It cannot execute two pieces of code simultaneously

So JavaScript needs a system to:

Track what function is currently running

Handle delayed tasks (like timers, clicks, API calls)

That’s where the Call Stack and Event Loop come in.

2. Call Stack (The Execution Tracker)
   What is the Call Stack?

The Call Stack is a place where JavaScript keeps track of which function is being executed right now.

Think of it as a stack of plates:

Last plate added → removed first (LIFO)

LIFO = Last In, First Out

How the Call Stack Works

A function is called → pushed onto the stack

The function finishes → popped off the stack

JavaScript moves to the next task

Simple Example
function first() {
console.log("First");
}

function second() {
first();
console.log("Second");
}

second();

Call Stack Flow
Call second()
→ Push second
→ Call first()
→ Push first
→ Execute console.log("First")
→ Pop first
→ Execute console.log("Second")
→ Pop second

Output:
First
Second

Key Rule

❗ JavaScript cannot move to the next task until the call stack is empty

3. What Happens When Code Takes Time?

Example:

setTimeout(() => {
console.log("Hello after 2 seconds");
}, 2000);

console.log("Hello now");

You might expect:

(wait 2 seconds)
Hello after 2 seconds
Hello now

But the actual output is:

Hello now
Hello after 2 seconds

Why? 🤔
Because setTimeout does NOT go into the call stack immediately.

4. Web APIs (The Waiting Room)

Some tasks take time:

Timers (setTimeout)
Fetching data (fetch)
DOM events (clicks)

These are handled by Web APIs (provided by the browser, not JavaScript itself).

Flow:

JavaScript sends the task to Web APIs

Web APIs handle the delay

When done → callback moves to the Task Queue

5. Task Queue (Callback Queue)

The Task Queue stores:

setTimeout callbacks
Click handlers
Event callbacks

It waits until:
✅ Call Stack is empty

6. Event Loop (The Traffic Controller)
   What is the Event Loop?

The Event Loop constantly checks:

“Is the Call Stack empty?”
If YES → move task from Queue → Call Stack

Visual Flow (Mental Model)
Call Stack ←── Event Loop ←── Task Queue

7. Full Example with Step-by-Step Execution
   console.log("Start");

setTimeout(() => {
console.log("Timeout");
}, 0);

console.log("End");

Execution Steps

1️⃣ console.log("Start") → Call Stack → executed
2️⃣ setTimeout → sent to Web API
3️⃣ console.log("End") → Call Stack → executed
4️⃣ Call Stack is empty
5️⃣ Event Loop moves Timeout callback to Call Stack

Output:
Start
End
Timeout

💡 Even with 0ms, it waits until the stack is empty.

///////////////////////////////////////////////////////////

1️⃣ Why async / await Came Into JavaScript

Before async/await, JavaScript handled asynchronous tasks using:

Callbacks ❌ (callback hell)

Promises ✅ (better but still chaining)

Problem with Promises
fetchData()
.then(res => process(res))
.then(data => save(data))
.catch(err => console.log(err));

✔ Works
❌ Hard to read
❌ Looks different from normal synchronous code

Solution: async / await

➡ Makes asynchronous code look synchronous
➡ Improves readability, debugging, and maintenance

2️⃣ What Is async?

async is a keyword used before a function to make it asynchronous and ensure it always returns a Promise.

Example
async function greet() {
return "Hello";
}

console.log(greet());
// Promise { "Hello" }

Even though "Hello" is returned, JavaScript wraps it inside a Promise.

3️⃣ What Is await?

await pauses the execution of an async function until the Promise is resolved or rejected.

Important Rules

✔ await can be used only inside async functions
✔ It waits without blocking the call stack
✔ It unwraps the resolved value of a Promise

4️⃣ Basic Example: Promise vs async/await
Using Promise
function getData() {
return new Promise(resolve => {
setTimeout(() => resolve("Data loaded"), 2000);
});
}

getData().then(result => console.log(result));

Using async/await
async function loadData() {
const result = await getData();
console.log(result);
}

loadData();

👉 Same result, much cleaner code

5️⃣ How async/await Works Internally

async function test() {
console.log("Start");
await fetchData();
console.log("End");
}

Execution Flow

"Start" is printed

fetchData() Promise goes to Web APIs

JS engine pauses function execution

Call stack is free (non-blocking)

Promise resolves → Event Loop resumes function

"End" is printed

💡 This is why JavaScript remains fast and responsive.

6️⃣ Real-Time Example: Fetch API Data
Without async/await
fetch("https://api.example.com/users")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

With async/await
async function getUsers() {
const response = await fetch("https://api.example.com/users");
const data = await response.json();
console.log(data);
}

getUsers();

✔ Easier to read
✔ Looks like synchronous code
✔ Easier debugging

7️⃣ What Is try...catch?
Definition

try...catch is used to handle runtime errors gracefully without crashing the program.

Syntax
try {
// risky code
} catch (error) {
// error handling
}

8️⃣ Why try...catch With async/await?

When a Promise rejects, it throws an error.

await fetch("wrong-url"); // throws error

So we must handle it.

9️⃣ async/await + try...catch (MOST IMPORTANT PATTERN)
Example
async function getData() {
try {
const response = await fetch("https://api.example.com/data");
const result = await response.json();
console.log(result);
} catch (error) {
console.log("Error occurred:", error.message);
}
}

✔ Handles network failure
✔ Prevents app crash
✔ Production-ready code

🔟 Real-World Use Case Examples
🛒 E-commerce: Fetch products
async function loadProducts() {
try {
const res = await fetch("/products");
const products = await res.json();
renderProducts(products);
} catch (err) {
showError("Unable to load products");
}
}

🔐 Login API
async function loginUser(credentials) {
try {
const res = await fetch("/login", {
method: "POST",
body: JSON.stringify(credentials)
});

    const data = await res.json();
    console.log("Login successful");

} catch (error) {
console.log("Login failed");
}
}

📦 File Upload
async function uploadFile(file) {
try {
await uploadToServer(file);
alert("Upload successful");
} catch {
alert("Upload failed");
}
}
