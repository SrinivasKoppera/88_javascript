// const name = "World";
// const NAME = "JavaScript";
// const firstName = "John"; // CAMEL_CASE -- javascript
// const FirstName = "Doe"; // PASCAL_CASE
// const snake_case_variable = "snake case"; // SNAKE_CASE --python

// const stName1 = "Invalid"; // Invalid: cannot start with a number
// const firstame = "Invalid"; // Invalid: cannot contain spaces

// console.log("Hello, " + name + "!");

/* JavaScript Variable Naming Rules:
✔ A variable name must begin with a letter, underscore (_), or dollar sign ($).
*/

// const greet = () => {
//   var a = 10;
//   console.log(a);
// };

// greet();
// var firstName = "Alice";
// firstName = "Bob"; // This will not cause an error with 'var'

// const firstName = "Srinivas";
// firstame = "Ravi"; // This will cause an error with 'const'

// console.log(firstName); // Output: Bob
// if (true) {
//   let lastName = "Smith";
//   console.log(lastName); // Output: Smith
// }

// console.log(lastName);

// let count = 1;
// let count = 2; // This will cause an error with 'let'
// let greeting = "Hello";
// greeting = greeting + ", World!";
// console.log(greeting); // Output: Hello, World!

// const pi = 3.14;
// const pi = 3.14159; // This will cause an error with 'const'
// pi = 3.14159; // This will also cause an error with 'const'

// var name = "Charlie";
// var name = "Dave"; // redeclaration is allowed with 'var'
// name = "Eve"; // updation is also allowed with 'var'

// let age = 25;
// let age = 30; // redeclaration is not allowed with 'let'
// age = 30; // updation is allowed with 'let'

// const country = "USA";
// const country = "Canada"; // redeclaration is not allowed with 'const'
// country = "Canada"; // updation is not allowed with 'const'

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(10, 20));

// {
//   name: "Ravi";
// }

// console.log(name);
// let name = "Ravi";
// console.log(name);

// let firstame = "Ravi";

// console.log(a); // Output: undefined
// var a = 10;
// console.log(a); // Output: 10

// console.log(b); // ReferenceError: Cannot access 'b' before initialization

// const c = 20;

// const name = false;

// console.log(10 === "10");

// const a = 10; // integer
// const b = 10.445; // float

// console.log(typeof(a)); // Output: number

// const stringVar = `String`; // string

// const names = "Ravi"; // string

// const fullName = `My name is ${names}`;

// console.log(fullName);

// const isAvailable = false; // boolean

// let aa;

// let bb = null;

// console.log(aa); // Output: undefined
// console.log(typeof aa); // Output: undefined

// const name = "Srinivas";

// const names = ["Srinivas", "Ravi", "Kumar"];

// // console.log(names);

// name[0] = "R";

// console.log(name[0]);

// // console.log(names);

// const name = "Srinivas";

// const names = {
//   name: "Srinivas",
//   age: 30,
//   isMarried: false,
// };

// const person = names;
// person.age = 31;
// console.log(names.age);

// console.log(10 + 10);

// const a = 10;
// const b = 20;
// let c = 30;

// console.log(a + b / 2);
// console.log(a - b);
// console.log(a * b);
// console.log(b / a);
// console.log(b % a);
// console.log(a ** 2);

// console.log(++c);
// console.log(c++);
// console.log(c);

// c += a; // -- c + a

// console.log(a == b); // false

// const a = 10;
// const b = "10";

// console.log(a === b);

// const a = 10;
// const b = 20;

// console.log(!true);

// console.log(0);

// console.log("Hello" + " World");

// if (true) {
//   console.log("Condition is true");
// } else if (false) {
//   console.log("Condition is false in else if");
// } else {
//   console.log("Condition is false");
// }

// console.log(10 > 5 ? (10 < 5 ? "8" : "6") : "Five is greater");

// if (10 > 5 && 20 > 15) {
//   console.log("Both conditions are true");
// } else {
//   console.error("One or both conditions are false");
// }

// const a = 10.64747; // integer
// console.log(`${a}`); // Output: "10"
// const num = 100;
// console.log(Boolean(num)); // Output: true

// const a = 10; // integer
// const a = 20
// a = 20;

// const age = 10;

// if (age >= 18) {
//   console.log("You are eligible to vote");
// }

// const temperature = 25;

// if (temperature > 30) {
//   console.log("It's a hot day");
// } else {
//   console.log("It's not a hot day");
// }

// const marks = 55;

// if (marks >= 90) {
//   console.log("Grade: A+");
// } else if (marks >= 75) {
//   console.log("Grade: A");
// } else if (marks >= 60) {
//   console.log("Grade: B");
// } else {
//   console.log("Grade: C");
// }

// const nationality = "American";

// if (nationality === "Indian") {
//   if (age >= 18) {
//     console.log("You are eligible to vote in India.");
//   } else {
//     console.log(
//       "You are not eligible to vote in India. you must be at least 18 years old."
//     );
//   }
// } else {
//   console.log(
//     "You are not eligible to vote in India. only Indian citizens can vote."
//   );
// }

// const day = "jhsdlkfjh";

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// console.log(10 > 5 ? "10 is greater" : "5 is greater");
// const name = prompt(
//   "Refactor conditional statements section for clarity and consistency"
// );

// console.log(name);

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let password;

// do {
//   password = prompt("Enter password:");
// } while (!password);

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   phoneNumber: "123-456-7890",
//   email: "john@example.com",
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const names = ["Srinivas", "Ravi", "Kumar"];

// for (const name of names) {
//   console.log(name);
// }

// const string = "Srinivas";

// for (let char of "JavaScript") {
//   console.log(char);
// }

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => console.log(num));

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// const arr = new Array(5);
// const arr1 = [1, 2, 3, 4, 5, "srinivas", true];

// console.log(arr1.length);

// // console.log(typeof arr);
// // Array values accessing
// console.log(arr1[4]);

// // Array Updation
// arr1[4] = "Ravi";

// Array methods

const numbers = [10, 20, 30, 40, 50, 60, 70];

// 1. push
// numbers.push(90);
// console.log(numbers);

// // 2. pop
// numbers.pop();
// console.log(numbers);

// // 3. unshift
// numbers.unshift(5);
// console.log(numbers);

// // 4. shift
// numbers.shift();
// console.log(numbers);

// // 5. indexOf
// const index = numbers.indexOf(100);
// console.log(index);

// //6. includes
// const isAvailable = numbers.includes(130);
// console.log(isAvailable);

// // 7. slice

// const slicedArray = numbers.slice(2, 5);
// console.log(slicedArray);

// // 8. splice
// const splicedArray = numbers.splice(2, 1, 100);

// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 1. forEach
// const forEachMethod = numbers.forEach((num) => num * 2);
// console.log(forEachMethod);

// // 2. map
// const mapMethod = numbers.map((num) => num * 1);
// console.log(mapMethod);

// // 3. filter

// const filterMethod = numbers.filter((num) => num > 50);
// console.log(filterMethod);

// // 4. reduce
const reduceMethod = numbers.reduce((a, b) => a + b);
console.log(reduceMethod);

// const first = 0 +10 => 10
// const second = 10 + 20 =>30
// const third = 30 + 30 =>60
// const fourth = 60 + 40 =>100
// const fifth = 100 + 50 =>150
// const sixth = 150 + 60 =>210
// const seventh = 210 + 70 =>280
