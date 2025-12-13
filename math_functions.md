## 🕒 1. JavaScript Time Functions

JavaScript provides two major categories of time-based functionality:

✔ 1. Date & Time Handling — using the Date object
✔ 2. Timers — using setTimeout() & setInterval()

⭐ 1.1 JavaScript Date Object
➤ Creating Date Objects
let now = new Date(); // current date & time
let specific = new Date(2024, 0, 15); // Jan 15, 2024 (months start from 0)
let fromString = new Date("2024-01-15 10:30");

⭐ 1.2 Reading Values from the Date Object
Method Description
getFullYear() Returns year
getMonth() Returns month (0–11)
getDate() Returns date (1–31)
getHours(), getMinutes(), getSeconds() Time components
getDay() Day of week (0–6)
Example:
let d = new Date();
console.log("Year:", d.getFullYear());
console.log("Month:", d.getMonth() + 1); // +1 for readability
console.log("Day:", d.getDate());
console.log("Hours:", d.getHours());

⭐ 1.3 Setting Values into Date Object
let d = new Date();
d.setFullYear(2025);
d.setMonth(5);
d.setDate(10);

⭐ 1.4 Real-World Example — Digital Clock

<h2 id="clock"></h2>

<script>
setInterval(() => {
    let time = new Date();
    document.getElementById("clock").innerText =
        `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}, 1000);
</script>

✔ Demonstrates continuous time updates
✔ Students clearly visualize the concept

---

## ⏳ 2. JavaScript Timer Functions

JavaScript provides two built-in timer methods:

⭐ 2.1 setTimeout()

Runs once after a delay.

Syntax:
setTimeout(function, delay);

Example:
setTimeout(() => {
console.log("This runs after 3 seconds");
}, 3000);

⭐ 2.2 setInterval()

Runs repeatedly at regular intervals.

Example:
let count = 0;

let timer = setInterval(() => {
console.log("Running...", count++);
if (count === 5) clearInterval(timer);
}, 1000);

✔ Excellent example for repeating tasks
✔ Shows how to stop intervals with clearInterval()

⭐ 2.3 Real-Time Example — Auto Logout Timer
let logoutTimer = setTimeout(() => {
alert("You have been logged out due to inactivity!");
}, 300000); // 5 minutes

⭐ Common Mistakes to Avoid
Mistake Correction
Forgetting to clear a timer Use clearTimeout() / clearInterval()
Using very short intervals causing performance issues Always use reasonable delays

---

## 💾 3. JavaScript Client-Side Storage

Client-side storage allows saving data in the browser without a database.

JavaScript supports:

✔ localStorage
✔ sessionStorage
✔ Cookies

Let’s explain each one.

⭐ 3.1 localStorage

Stores data permanently (until user clears manually).

➤ Key Features

No expiration
Max size ~ 5MB
Stores only strings

➤ localStorage Methods
Method Function
setItem(key, value) Save data
getItem(key) Retrieve data
removeItem(key) Delete one entry
clear() Clear everything
Example:
localStorage.setItem("username", "John");
console.log(localStorage.getItem("username")); // John

localStorage.removeItem("username");
localStorage.clear();

⭐ 3.2 sessionStorage

Stores data only until the browser tab is closed.

Same methods as localStorage:

sessionStorage.setItem("token", "abcd1234");
console.log(sessionStorage.getItem("token"));

⭐ 3.3 Cookies

Cookies send data to server with every request.

Example:
document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC";

➤ When to use what?
Feature localStorage | sessionStorage | Cookies
Lifespan Forever Until | tab closes With | expiry
Size ~5MB | ~5MB | ~4KB
Sent to server ❌ No ❌ No ✔ Yes
Use Case Preferences, theme Temporary data Login tokens (rare), settings

---

## 🔢 4. JavaScript Math Functions

JavaScript provides a global Math object with useful numeric methods.

⭐ 4.1 Important Math Methods
Method Description
Math.round() Round to nearest integer
Math.ceil() Round up
Math.floor() Round down
Math.random() Random number 0–1
Math.max(a,b) / Math.min(a,b) Largest/Smallest
Math.pow(a,b) aⁿ
Math.sqrt(n) Square root
Math.abs(n) Absolute value
Real-Time Example – Random OTP Generator
function generateOTP() {
return Math.floor(100000 + Math.random() \* 900000);
}

console.log(generateOTP());

✔ Uses Math.random() + Math.floor()
✔ Perfect demo for real-world app use

⭐ Real-Time Example — Discount Calculator
let price = 999;
let discount = 25; // 25%

let finalPrice = price - (price \* (discount / 100));
console.log("Final Price:", Math.round(finalPrice));
