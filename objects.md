1. What Is an Object?

An object is a collection of key–value pairs where:
Key = property name
Value = data or function

Example:
let user = {
name: "Ravi",
age: 25,
city: "Hyderabad"
};

Objects represent real-world entities:

user
product
employee
student
customer
order

2. Why Do We Need Objects?

Arrays store lists.
Objects store detailed data about a single item.

Example from real-world:

Product:
name, price, brand, stock

User:
name, email, role

Objects group multiple properties of same entity.

3. Creating Objects
   A. Object Literal
   let person = { name: "Kiran", age: 22 };

B. Using new Object()
let obj = new Object();
obj.name = "Rahul";

C. Constructor Function (Used before classes)
function Person(name, age){
this.name = name;
this.age = age;
}

D. ES6 Class
class Person {
constructor(name, age){
this.name = name;
this.age = age;
}
}

4. Accessing Object Properties
   Dot Notation
   console.log(user.name);

Bracket Notation

Used when key has space or comes dynamically.

console.log(user["city"]);

Dynamic key:

let key = "age";
console.log(user[key]);

5. Adding / Updating / Deleting Properties
   Add
   user.email = "test@gmail.com";

Update
user.age = 30;

Delete
delete user.city;

6. Looping Through Objects
   for…in
   for (let key in user) {
   console.log(key, user[key]);
   }

7. Nested Objects

Objects can contain objects.

let student = {
name: "Arun",
address: {
city: "Vizag",
pin: 530016
}
};

Access:

console.log(student.address.city);

8. Array of Objects (VERY IMPORTANT for Real Projects)

Most real-world APIs return array of objects.

Example:

let products = [
{ id: 1, name: "Mobile", price: 12000 },
{ id: 2, name: "Laptop", price: 45000 },
{ id: 3, name: "TV", price: 30000 }
];

Looping through:
for (let p of products) {
console.log(p.name);
}

Filtering:
let expensive = products.filter(p => p.price > 20000);

Mapping:
let names = products.map(p => p.name);

Total (reduce):
let total = products.reduce((sum, p) => sum + p.price, 0);

These examples are extremely useful because almost all frontend & backend tasks involve arrays of objects.

9. Object Methods (Functions Inside Objects)

Example:

let car = {
brand: "BMW",
start() {
console.log("Car is starting...");
}
};

car.start();

Important for OOP & classes.

10. this Keyword (Must Explain Carefully)

this refers to current object inside methods.

let user = {
name: "Teju",
greet() {
console.log("Hello " + this.name);
}
};

11. Real-Time Use Cases of Objects

✔ User profile
✔ Cart item details
✔ API response
✔ Configurations
✔ Form data
✔ Bank transaction details

Example:

let order = {
id: 1234,
items: 4,
amount: 799.50,
payment: "UPI"
};

12. Common Student Mistakes
    ❌ Using dot notation for dynamic keys
    let key = "email";
    user.key // wrong

Correct:

user[key]

❌ Not understanding reference behavior:

let a = {name: "Ram"};
let b = a;

b.name = "Shyam";
console.log(a.name); // Shyam

Because both a and b reference the same object in memory.
