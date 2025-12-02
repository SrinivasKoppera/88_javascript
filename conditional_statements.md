1. What Are Conditional Statements?

Conditional statements allow JavaScript to make decisions based on certain conditions.

Think of real life:
✔ If it rains → carry an umbrella
✔ If battery < 20% → show low battery warning

JavaScript works the same way.

2. Types of Conditional Statements in JavaScript

if
if…else
else if
Nested if
switch…case
Ternary operator condition ? true-case : false-case

3. if Statement

Used when you want to run a block only if a condition is true.

Syntax
if (condition) {
// code to run
}

Example
let age = 21;

if (age >= 18) {
console.log("You are eligible to vote");
}

4. if…else Statement

Used when there are two possibilities.

Example
let temperature = 15;

if (temperature > 20) {
console.log("Weather is warm");
} else {
console.log("Weather is cold");
}

Use Case:
Login system → If password correct → go inside, else → show error.

5. if…else if…else

Used for multiple conditions.

Example
let marks = 75;

if (marks >= 90) {
console.log("Grade: A+");
} else if (marks >= 75) {
console.log("Grade: A");
} else if (marks >= 60) {
console.log("Grade: B");
} else {
console.log("Grade: C");
}

Use Case:
Student grading system, salary calculation, shipping charges, tax calculation.

6. Nested if

An if inside another if.

Example
let username = "admin";
let password = "12345";

if (username === "admin") {
if (password === "12345") {
console.log("Login successful");
} else {
console.log("Wrong Password");
}
} else {
console.log("Invalid Username");
}

7. switch…case Statement

Used when comparing one value with multiple options.

Syntax
switch(expression) {
case value1:
// code
break;

    case value2:
        // code
        break;

    default:
        // code

}

Example
let day = 3;

switch (day) {
case 1:
console.log("Monday");
break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");

}

Use Case:

✔ Payment status (pending, success, failed)
✔ Order status (packed, shipped, delivered)
✔ User roles (admin, editor, viewer)

8. Ternary Operator

Short form of if…else (one-line decision).

Syntax
condition ? resultIfTrue : resultIfFalse;

Example
let age = 16;

let message = (age >= 18) ? "Adult" : "Minor";
console.log(message);

Use Case:
Quick checks for UI like:

Show Login or Profile

Product In Stock or Out of Stock

9. Real-Time Practical Examples
   Example 1: Login Validation (if…else)
   let email = "test@gmail.com";
   let enteredEmail = "test@gmail.com";
   let enteredPassword = "12345";
   let password = "12345";

if (email === enteredEmail && password === enteredPassword) {
console.log("Login successful!");
} else {
console.log("Invalid login details");
}

Example 2: E-commerce Discount Logic (if…else if)
let amount = 1200;

if (amount > 2000) {
console.log("Discount: 20%");
} else if (amount > 1000) {
console.log("Discount: 10%");
} else {
console.log("No discount");
}

Example 3: Movie Ticket Pricing (Nested if)
let age = 65;
let isStudent = false;

if (age >= 60) {
if (isStudent) {
console.log("Ticket price: 100 Rs");
} else {
console.log("Ticket price: 150 Rs");
}
}

Example 4: Payment Status Message (switch case)
let status = "success";

switch (status) {
case "pending":
console.log("Payment is processing...");
break;

    case "success":
        console.log("Payment successful!");
        break;

    case "failed":
        console.log("Payment failed. Try again.");
        break;

    default:
        console.log("Unknown status");

}

Example 5: Even or Odd (Ternary)
let num = 9;

let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

10. Truthy and Falsy Values

Important in conditional checking.

Falsy Values
false
0
"" (empty string)
null
undefined
NaN

Example
if ("") {
console.log("Truthy");
} else {
console.log("Falsy");
}

This prints Falsy.

11. Common Mistakes (Explain to Students)
    ❌ Mistake 1: Using = instead of == or ===
    if (x = 10) // Assignment, not comparison!

    ❌ Mistake 2: Forgetting break in switch-case
    → Causes fall-through.

    ❌ Mistake 3: Not using === (strict equality)
    "10" == 10 → true
    "10" === 10 → false ✔ (best practice)
