1. Introduction to the DOM
   What is the DOM?

DOM (Document Object Model) is a programming interface the browser provides.
It represents the webpage as a tree of nodes (elements, text, comments).
JavaScript can read, update, create, or delete these nodes to change the page dynamically.

Why DOM Manipulation Matters

With DOM manipulation, JavaScript can:
Change text, images, and styles.
Respond to user actions (clicks, typing, scrolling).
Dynamically add or remove content.
Build interactive UI components (menus, tabs, modals).

Simply put:
DOM manipulation connects JavaScript to the web page.

2. Selecting Elements

Selecting elements is the first step. JavaScript offers multiple methods:

2.1 Common Selection Methods
Method Description Example
document.getElementById() Selects by ID (fastest) document.getElementById("title")
document.querySelector() Selects first matching CSS selector document.querySelector(".btn")
document.querySelectorAll() Selects all matching elements document.querySelectorAll("p")
document.getElementsByClassName() Selects by class (HTMLCollection) document.getElementsByClassName("item")
Real-World Example

<h1 id="mainTitle">Welcome</h1>

const title = document.getElementById("mainTitle");
console.log(title.textContent); // "Welcome"

3. Reading & Changing Content
   3.1 textContent

Gets or sets the text inside an element.

title.textContent = "Hello Students!";

3.2 innerHTML

Reads or writes HTML inside an element.
Warning: Can expose your app to XSS attacks if used with untrusted input.

div.innerHTML = "<strong>Bold text</strong>";

3.3 value (for form inputs)
const nameInput = document.querySelector("#name");
console.log(nameInput.value);

4. Changing Styles and Classes
   4.1 Inline Styles
   title.style.color = "blue";
   title.style.fontSize = "2rem";

4.2 Adding/Removing Classes

Using classList (recommended):

title.classList.add("highlight");
title.classList.remove("hidden");
title.classList.toggle("active");

Real-World Example: Show/Hide a menu
menu.classList.toggle("open");

5. Creating, Inserting, and Removing Elements
   5.1 Creating Elements
   const newItem = document.createElement("li");
   newItem.textContent = "New Task";

5.2 Appending Elements
list.appendChild(newItem);

5.3 Modern Alternative
list.append(newItem); // can append text & multiple nodes

5.4 Removing Elements
newItem.remove();

Real-World Example: Adding a chat message
function addMessage(text) {
const msg = document.createElement("p");
msg.textContent = text;
chatBox.append(msg);
}

6. Event Handling

6.1 What Are Events?
Events are actions that happen on the page:
click
keydown
submit
mouseover

6.2 Adding Event Listeners
button.addEventListener("click", () => {
alert("Button clicked!");
});

Real-World Example: Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

7. Putting It All Together — Mini Project
   Project: Simple To-Do List

HTML:

<input id="taskInput" placeholder="New task">
<button id="addBtn">Add</button>
<ul id="taskList"></ul>

JavaScript:

const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

button.addEventListener("click", () => {
if (input.value.trim() === "") return; // prevent empty tasks

const li = document.createElement("li");
li.textContent = input.value;

li.addEventListener("click", () => {
li.classList.toggle("done");
});

list.append(li);
input.value = "";
});

8. Best Practices
   ✔ Prefer querySelector() for flexibility
   ✔ Use classList instead of modifying className
   ✔ Avoid innerHTML when possible

Prevents security issues and accidental layout changes.

✔ Cache selectors to improve performance

Avoid selecting the same element repeatedly.

✔ Keep logic separate from HTML

Favor:

button.addEventListener("click", handler);

Over:

<button onclick="handler()">Click</button>

9. Common Beginner Mistakes and How to Avoid Them
   ❌ Accessing elements before the page loads

Fix: Place script at the end of <body> or wrap in:

document.addEventListener("DOMContentLoaded", () => {
// safe DOM access
});

❌ Forgetting the “#” or “.” in query selectors
document.querySelector("button") // good
document.querySelector("myButton") // wrong (missing #)

❌ Confusing textContent and innerHTML

Use innerHTML only when HTML is required.
