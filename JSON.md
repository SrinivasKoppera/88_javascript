1. JavaScript JSON (JavaScript Object Notation)
   1.1 What is JSON?

JSON is a data format, not a programming language.
It is mainly used to store and exchange data, especially between a browser and a server.

Think of JSON as a common language that different systems understand.

1.2 Why JSON is Important

Used in APIs (most backend servers send JSON)
Easy for humans to read
Easy for machines to parse
Language-independent

1.3 JSON Structure

JSON looks very similar to JavaScript objects, but it is more strict.

{
"name": "Alice",
"age": 25,
"isStudent": false,
"skills": ["JavaScript", "HTML", "CSS"]
}

1.4 Rules of JSON (Very Important)

✅ Keys must be in double quotes
✅ Strings must use double quotes
❌ No functions
❌ No undefined
❌ No comments

1.5 JSON vs JavaScript Object
// JavaScript Object
const user = {
name: "Alice",
greet: function () {
console.log("Hello");
}
};

// JSON (this would be INVALID)
{
"name": "Alice",
"greet": function() {}
}

1.6 JSON Methods in JavaScript
JSON.stringify() → Object → JSON string
const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);

console.log(jsonString);
// '{"name":"Alice","age":25}'

JSON.parse() → JSON string → Object
const jsonString = '{"name":"Alice","age":25}';
const user = JSON.parse(jsonString);

console.log(user.name); // Alice

Common Beginner Mistakes

❌ Forgetting double quotes in JSON
❌ Trying to store functions in JSON
❌ Confusing JSON with JavaScript objects
