1. Introduction to JavaScript Events
   What is an Event?

An event is any action performed by the user or the browser.
Examples:

User clicks a button
User types in a text box
Page finishes loading
Mouse moves over an element
A form is submitted
Events allow JavaScript to react to user interactions.

Why Events Are Important?
Events help you build interactive and dynamic web pages.

Real-world use cases:

Login button click
Form validation on submit
Showing/hiding modals
Shopping cart updates when “Add to Cart” is clicked
Live search while typing
Theme switching (light/dark mode)

2. Types of JavaScript Events

   2.1 Mouse Events

   Event Description
   click Left mouse click
   dblclick Double click
   mouseover Mouse enters element
   mouseout Mouse leaves element
   mousemove Moving mouse
   mousedown Pressing mouse button
   mouseup Releasing mouse button

   2.2 Keyboard Events
   Event Description
   keydown Key pressed
   keyup Key released

   2.3 Form Events
   Event Description
   submit Form submission
   change Value of input changes
   focus Input focused
   blur Input loses focus
   input Triggered on every keystroke

   2.4 Window Events
   Event Description
   load Page fully loaded
   resize Window resized
   scroll User scrolls
   DOMContentLoaded HTML parsed before images load

3. Ways to Add Event Listeners

JavaScript provides three ways to attach events.
We focus on best practices (event listeners) but introduce all approaches.

3.1 Inline Events (Old and Not Recommended)
<button onclick="greet()">Click Me</button>

Problems:

Hard to maintain

Mixed HTML + JS

Limited flexibility

3.2 DOM Property Method
button.onclick = function () {
console.log("Button clicked");
};

Limitation:

Only one handler allowed; assigning a new one will overwrite it.

3.3 addEventListener() – Modern & Recommended
Syntax
element.addEventListener(eventType, callbackFunction);

Example:

button.addEventListener("click", () => {
console.log("Button clicked!");
});

✔ Multiple event listeners allowed
✔ Cleaner separation of HTML & JS
✔ Supports advanced options like event capturing and removing listeners

4. Event Object (Very Important)

Whenever an event occurs, JS gives an event object to the callback.

Example:

button.addEventListener("click", function (event) {
console.log(event);
});

Properties often used:

event.target → element that triggered the event

event.type → the event name

event.preventDefault() → stop form submit or link navigation

5. Event Bubbling and Capturing
   What is Event Bubbling?

Events move from child to parent (default).

Example:
Click inside <button> inside <div> inside <body>
Order: button → div → body

What is Capturing?

Events move from parent to child.

To use capturing:

element.addEventListener("click", handler, true);

6. Stopping Event Propagation

Sometimes you don’t want event to bubble.

event.stopPropagation();

Useful in:

Nested buttons

Closing dropdown menus

7. Preventing Default Behavior

Some elements have default actions:

Form → submits

Anchor tag → redirects

Right-click → opens context menu

Stop default action:

event.preventDefault();

8. Real-World Practical Examples
   Example 1: Button Click

HTML:

<button id="btn">Click Me</button>

JS:

document.getElementById("btn").addEventListener("click", () => {
alert("You clicked the button!");
});

Example 2: Form Validation

HTML:

<form id="loginForm">
  <input type="text" id="email">
  <button type="submit">Login</button>
</form>
<p id="msg"></p>

JS:

document.getElementById("loginForm").addEventListener("submit", (e) => {
e.preventDefault();
let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("msg").textContent = "Invalid email!";
    } else {
        document.getElementById("msg").textContent = "Success!";
    }

});

Example 3: Live Search (Keyup Event)
searchInput.addEventListener("keyup", function () {
console.log("Current search:", this.value);
});

Example 4: Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

Example 5: Show/Hide Password
toggle.addEventListener("click", () => {
passInput.type = passInput.type === "password" ? "text" : "password";
});

9. Event Delegation (Advanced but essential)
   What is Event Delegation?

Instead of adding events to multiple child elements individually,
attach one event listener to the parent.

Why use it?

✔ Better performance
✔ Works for dynamically added elements

Example: Click any item inside a list
document.getElementById("list").addEventListener("click", (event) => {
if (event.target.tagName === "LI") {
console.log("Clicked:", event.target.textContent);
}
});
