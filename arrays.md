1. What Is an Array?

An Array is an ordered list of values.
Values are stored by index starting from 0.

Why Arrays?

They are used to store:
list of users
list of items/products
list of scores
list of images/videos
list of API response data

Example:
let fruits = ["Apple", "Banana", "Mango", 12, {}];

2. How Arrays Work Internally (Deep Understanding)

Arrays are actually objects behind the scenes.
Keys are numeric indexes converted to strings.
length is not the count of items—it is highest index + 1.
JavaScript arrays can contain mixed data types, unlike typed languages.

Example:
let mixed = [10, "Hello", true, null, {name: "Ravi"}];

3. Array Indexing & Accessing Values
   Access:
   let arr = ["red", "green", "blue"];
   console.log(arr[0]); // red

Update:
arr[1] = "yellow"; // green → yellow

Add new value:
arr[3] = "black";

4. Important Array Properties
   length
   let a = [10, 20, 30];
   console.log(a.length); // 3

⚠ length is mutable
a.length = 1; // now array becomes [10]

5. Array Methods –
   A. Adding/Removing Elements
1. .push() — add at end
   fruits.push("Orange");

1. .pop() — remove from end
   fruits.pop();

1. .unshift() — add at beginning
   fruits.unshift("Papaya");

1. .shift() — remove from beginning
   fruits.shift();

B. Searching in Array
.indexOf()
fruits.indexOf("Mango");

.includes()
fruits.includes("Mango");

C. Extracting Portions
.slice()
let part = fruits.slice(1, 3);

.splice() → destructive (modifies original)
fruits.splice(1, 1); // delete 1 item at index 1

D. Looping Through Arrays (Real-Time Examples)
for loop
for (let i = 0; i < users.length; i++) {
console.log(users[i]);
}

for…of
for (let user of users) {
console.log(user);
}

forEach()
users.forEach(u => console.log(u));

E. Transform, Filter, Reduce (Important Modern JS Concepts)

1. .map() → transform values, returns NEW array

(Used in React UI lists, formatting API data)

let priceWithTax = prices.map(p => p \* 1.18);

2. .filter() → pick items based on condition

(Used in search, filtering products)

let adults = ages.filter(a => a >= 18);

3. .reduce() → sum / total / aggregate values

(Used in cart total calculation in e-commerce)

let total = cart.reduce((sum, item) => sum + item.price, 0);

6. Real-Time Use Cases of Arrays
   ✔ Display product list
   ✔ Search users by name
   ✔ Calculate order totals
   ✔ Store API response list
   ✔ Display table rows dynamically

7. Common Mistakes Students Make
   ❌ Using for…in for arrays
   for (let i in arr) // wrong!

It loops keys, not values.

❌ Using splice() instead of slice() when only extraction is needed
❌ Assuming array length means number of actual items
