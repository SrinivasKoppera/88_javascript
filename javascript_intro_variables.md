1. What is JavaScript?

- JavaScript (JS) is a high-level, dynamic, interpreted programming language.
- It is primarily used to make web pages interactive.
- JS runs in the browser (like Chrome, Firefox) as well as on servers (using Node.js).

2. JavaScript Variables

- Variables are used to store data in JavaScript.

✔ A variable name can contain:
Letters (a–z, A–Z)
Numbers (0–9)
Underscore (\_)
Dollar sign ($)

✔ Naming Conventions:

1. camelCase
2. PascalCase
3. UPPERCASE
4. smallcase
5. snake_case

6. JavaScript provides three ways to declare variables:
   i. var
   ii. let
   iii. const

✔ What is var?

- var is the oldest way to declare variables in JavaScript (from 1995).
- It still works, but it has some problems, so modern JS prefers let and const.

✔ Characteristics of var:

1. Function-scoped

- If declared inside a function → accessible only inside that function.
- If declared outside → becomes a global variable.

  function example() {
  var x = 10;
  }
  console.log(x); // ❌ Error: x is not defined

2. Can be re-declared & updated

   var name = "John";
   var name = "Doe"; // Allowed
   name = "Sam"; // Allowed

3. Hoisted and initialized as undefined

- This means JS moves the declaration to the top automatically.
  console.log(a); // undefined
  var a = 5;

2️⃣ let
Introduced in ES6 (2015) — modern JavaScript.
✔ Characteristics of let

1. Block-scoped

Works only inside { }.

if (true) {
let x = 10;
}
console.log(x); // ❌ Error

2. Cannot be re-declared in the same scope

   let city = "Paris";
   let city = "London"; // ❌ Error

3. Can be updated

   let age = 20;
   age = 21; // ✔ allowed

4. Hoisted but NOT initialized

   This causes the Temporal Dead Zone (TDZ).

- What is the TDZ?

  The Temporal Dead Zone is the time between:
  When a variable is declared
  When the variable is actually initialized

During this time, JavaScript knows the variable exists, but you can’t use it yet.

console.log(a); // ❌ Error: Cannot access 'a' before initialization
let a = 5;

3️⃣ const

const is also introduced in ES6, used for constant values.

✔ Characteristics of const

1. Block-scoped

Just like let.

if (true) {
const x = 10;
}
console.log(x); // ❌ Error

2. Cannot be re-declared
   const name = "John";
   const name = "Doe"; // ❌ Error

3. Cannot be updated
   const age = 25;
   age = 26; // ❌ Error

But objects & arrays CAN be modified!
const protects the variable reference, not the inside values.

    const person = { name: "John" };
    person.name = "Sam"; // ✔ allowed
