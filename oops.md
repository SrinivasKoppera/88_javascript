1. What Is OOP and Why Does JavaScript Use It?

Object-Oriented Programming (OOP) is a way of organizing code so it’s:

Easier to understand
Easier to reuse
Easier to maintain as programs grow
Instead of writing scattered functions and variables, we group data and behavior together into objects.

Think of a student:
Data: name, age, grade
Behavior: study(), takeExam()

In OOP, we model this as an object.

2. Objects in JavaScript (The Foundation of OOP)

In JavaScript, almost everything is an object.

What Is an Object?

An object is a collection of:

Properties → data
Methods → functions inside an object

Example
const student = {
name: "Alex",
age: 15,
study: function () {
console.log("Alex is studying");
}
};

name, age → properties

study() → method

Why Objects Are Useful

Keep related data together
Make code easier to read

Represent real-world things clearly

3. Functions vs Methods
   Function

A standalone block of code:

function greet() {
console.log("Hello!");
}

Method

A function inside an object:

const user = {
greet: function () {
console.log("Hello!");
}
};

✅ Best Practice:
If a function works on object data, make it a method.

4. Classes
   What Is a Class?

A class is like a blueprint used to create multiple objects with the same structure.

Class → House blueprint
Objects → Actual houses built from it

Example
class Student {
constructor(name, age) {
this.name = name;
this.age = age;
}

study() {
console.log(this.name + " is studying");
}
}

Creating Objects from a Class
const student1 = new Student("Alex", 15);
const student2 = new Student("Sam", 16);

student1.study(); // Alex is studying

5. The this Keyword
   What Is this?

this refers to the current object that is using the method.

study() {
console.log(this.name);
}

this.name → the name of the object calling the method

Common Beginner Mistake ❌
Using this outside an object or class incorrectly.

✅ Rule to remember:

this only makes sense inside objects or classes

6. Constructors (Setting Up Objects)
   What Is a Constructor?

A special method that runs automatically when an object is created.

constructor(name, age) {
this.name = name;
this.age = age;
}

Why Constructors Matter

Initialize object data

Avoid repeating code

//////////////

1. Encapsulation – “Protect and Control the Data”
   What Is Encapsulation?

Encapsulation means keeping data and the methods that work on that data together, and controlling how the data is accessed.

Instead of letting anyone change data directly, we use methods.

Real-World Example: Bank Account 🏦

You don’t directly change your bank balance.
You:

Deposit money

Withdraw money

The balance is protected.

JavaScript Example
class BankAccount {
constructor(balance) {
this.balance = balance;
}

deposit(amount) {
this.balance += amount;
console.log("Deposited:", amount);
}

withdraw(amount) {
if (amount <= this.balance) {
this.balance -= amount;
console.log("Withdrawn:", amount);
} else {
console.log("Insufficient balance");
}
}
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited: 500
account.withdraw(300); // Withdrawn: 300

Why Encapsulation Is Useful

✅ Protects important data
✅ Prevents incorrect usage
✅ Makes code safer and easier to maintain

2. Inheritance – “Reuse What Already Exists”
   What Is Inheritance?

Inheritance allows one class to reuse properties and methods of another class.

Instead of rewriting code, we extend it.

Real-World Example: Vehicles 🚗🚲

All vehicles:

Start

Stop

But each has its own behavior.

JavaScript Example
class Vehicle {
start() {
console.log("Vehicle started");
}
}

class Car extends Vehicle {
drive() {
console.log("Car is driving");
}
}

class Bike extends Vehicle {
ride() {
console.log("Bike is riding");
}
}

const car = new Car();
car.start(); // Vehicle started
car.drive(); // Car is driving

Why Inheritance Is Useful

✅ Reduces code duplication
✅ Organizes code logically
✅ Makes maintenance easier

3. Polymorphism – “Same Action, Different Behavior”
   What Is Polymorphism?

Polymorphism means the same method name behaves differently for different objects.

Real-World Example: Animals 🐶🐱

All animals:

Speak
But:
Dog barks
Cat meows

Same action → different results

JavaScript Example
class Animal {
speak() {
console.log("Animal makes a sound");
}
}

class Dog extends Animal {
speak() {
console.log("Dog barks");
}
}

class Cat extends Animal {
speak() {
console.log("Cat meows");
}
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

Output:
Dog barks
Cat meows

Why Polymorphism Is Useful

✅ Flexible code
✅ Easy to extend
✅ Cleaner logic (no big if-else chains)

4. Abstraction – “Show What Matters, Hide How It Works”
   What Is Abstraction?

Abstraction means hiding complex implementation details and showing only what the user needs to use.

You don’t need to know how something works internally—only how to use it.

Real-World Example: Driving a Car 🚗

When you drive:
You use the steering wheel
You press the accelerator
You press the brake

You don’t care how:
The engine works
Fuel ignites
Gearbox operates

That complexity is hidden.

JavaScript Example (Abstraction Using Methods)

class Car {
startEngine() {
this.injectFuel();
this.ignite();
console.log("Car started");
}

injectFuel() {
console.log("Fuel injected");
}

ignite() {
console.log("Engine ignited");
}
}

const myCar = new Car();
myCar.startEngine();

What’s Happening?

User calls: startEngine()

Internal details (injectFuel, ignite) are hidden

User doesn’t worry about how it works

👉 That’s abstraction.

Why Abstraction Is Important

✅ Reduces complexity
✅ Makes code easier to use
✅ Improves maintainability
✅ Allows changes without breaking users

/////////////

Getter = get a value

Runs when you read a property.

const person = {
get name() {
return "Alex";
}
};

console.log(person.name); // "Alex"

👉 You read it like a normal property, no ().

Setter = set a value

Runs when you change a property.

const person = {
set name(value) {
console.log("Name is:", value);
}
};

person.name = "Jamie";
// "Name is: Jamie"

Getter + Setter together
const person = {
\_name: "Alex",

get name() {
return this.\_name;
},

set name(value) {
this.\_name = value;
}
};

console.log(person.name); // Alex
person.name = "Jamie";
console.log(person.name); // Jamie

Remember this

Getter → when you read

Setter → when you write

Look like properties, act like functions

No parentheses

//////////////////////////////

1. Public variables in JavaScript classes

Public variables (fields) can be accessed from anywhere—inside the class and outside it.

Example
class Student {
constructor(name, age) {
this.name = name; // public
this.age = age; // public
}
}

const s1 = new Student("Alex", 16);

console.log(s1.name); // Alex
console.log(s1.age); // 16

➡️ name and age are public because they are created using this.variableName.

2. Private variables in JavaScript classes

Private variables can be accessed only inside the class.

JavaScript uses the # symbol to make variables private (introduced in ES2022).

Example
class BankAccount {
#balance; // private variable

constructor(amount) {
this.#balance = amount;
}

getBalance() {
return this.#balance; // allowed
}
}

const account = new BankAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.#balance); // ❌ Error (not accessible)

Key points

#balance is private

It cannot be accessed or modified outside the class

Helps protect data and avoid accidental changes
