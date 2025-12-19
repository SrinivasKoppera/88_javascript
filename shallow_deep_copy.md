1. Understanding Memory in JavaScript (Foundation Concept)

JavaScript stores data in two ways:

1️⃣ Primitive Types

Stored by value

Example: number, string, boolean

let a = 10;
let b = a;
b = 20;

console.log(a); // 10

✔ Changes do NOT affect original

2️⃣ Reference Types

Stored by reference

Example: object, array, function

let obj1 = { name: "Ravi" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul

❗ Both point to same memory

This is where copying problems begin.

2. What Is a Shallow Copy?

A shallow copy:

Copies only the first level

Nested objects still share memory

Methods That Create Shallow Copies

Object.assign()

Spread operator {...obj}

Array spread [...arr]

Array.prototype.slice()

Example: Shallow Copy Problem
let user1 = {
name: "Anil",
address: {
city: "Hyderabad"
}
};

let user2 = { ...user1 };

user2.address.city = "Bangalore";

console.log(user1.address.city); // Bangalore ❌

❗ Why?

Because address is still shared reference.

Real-World Example

In React:

setUser({...user, address: {...user.address}})

Failing to deep copy causes UI bugs.

Deep Copy in JavaScript – Clear Theory with Examples

DEEP COPY

1. First, Understand the Problem (Why Deep Copy Exists)

In JavaScript, objects and arrays are stored by reference, not by value.

That means:

Variables don’t store the object itself

They store a reference (address in memory)

So when we copy an object incorrectly, both variables may point to the same memory location.

This causes unexpected bugs.

2. What Is a Deep Copy? (Core Definition)
   Theoretical Definition

A deep copy is a copy where:

✔ All levels of an object are copied
✔ No memory is shared between original and copied object
✔ Changes in one object do NOT affect the other

In simple words:
Deep copy creates a completely independent duplicate of the original data.

3. Why Shallow Copy Fails (Important to Understand Deep Copy)
   Example
   let original = {
   name: "Ravi",
   address: {
   city: "Hyderabad"
   }
   };

let shallowCopy = { ...original };

shallowCopy.address.city = "Bangalore";

console.log(original.address.city); // Bangalore ❌

Why This Happens (Theory)

name → primitive → copied by value

address → object → copied by reference

Both objects point to the same address object

This is NOT a deep copy.

4. What a Deep Copy Actually Does (Mental Model)

A deep copy:

Creates a new object

Copies each property

If a property is an object:

Creates a new object again

Copies its properties

Continues recursively until all levels are copied

Think of it as “copy everything inside, not just the container.”

5. Example of a Proper Deep Copy
   Original Object
   let user = {
   name: "Sita",
   skills: ["JS", "React"],
   address: {
   city: "Delhi",
   pin: 110001
   }
   };

Deep Copy
let copy = structuredClone(user);

copy.address.city = "Mumbai";
copy.skills.push("Node");

console.log(user.address.city); // Delhi ✅
console.log(user.skills); // ["JS", "React"] ✅

Key Observation

✔ Original object is unchanged
✔ No shared memory
✔ Fully independent data

This is true deep copy behavior.

Method 2: JSON Method (Beginner-Friendly)
let deepCopy = JSON.parse(JSON.stringify(obj));

How It Works (Theory)

JSON.stringify() → converts object to string

JSON.parse() → creates a brand-new object from string

New memory is allocated

Example
let original = {
name: "Amit",
details: {
age: 30
}
};

let copy = JSON.parse(JSON.stringify(original));

copy.details.age = 40;

console.log(original.details.age); // 30

Limitations (Very Important for Students)

JSON method:
❌ Removes functions
❌ Removes undefined
❌ Breaks Date, Map, Set
❌ Fails for circular references

Example:

let obj = {
date: new Date(),
greet: () => console.log("Hi")
};

These will be lost.
