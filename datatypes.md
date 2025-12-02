1.  Introduction to JavaScript Data Types
    JavaScript is a loosely typed / dynamically typed language.
    ✔ Variables don’t need a type at declaration.
    ✔ Type is decided at runtime based on the assigned value.
    let x = 10; // number
    x = "Hello"; // now string

2.  JavaScript Data Types
    JavaScript has 7 primitive types + 1 non-primitive type.
    2.1 Primitive Data Types
    Primitive values are immutable and stored directly in memory.

    1.  Number
        Represents both integer & floating-point values.
        let age = 25;
        let price = 99.99;
        Special numeric values:
        Infinity
        -Infinity
        NaN (Not-a-Number)
        console.log(10 / 0); // Infinity
        console.log("abc" \* 3); // NaN

                    2.  String
                        Text data enclosed in:
                            single quotes ' '
                            double quotes " "
                            template literals ` ` (ES6)

                                let name = "Srinivas";
                                let greet = `Hello ${name}`;
                                Strings are immutable.
                    3. Boolean
                        Only two values: true and false
                        Used in conditions:
                            let isLoggedIn = true;
                    4. Undefined
                        A variable declared but not assigned a value.
                            let x;
                            console.log(x); // undefined
                    5. Null
                        Represents intentional empty value.
                            let data = null;
                            Important:
                            typeof null → "object"
                    6. Symbol (ES6)
                        Unique identifier.
                            let id = Symbol("userId");
                    7. BigInt (ES2020)
                        Used for very large integers beyond Number.MAX_SAFE_INTEGER.
                            let big = 1234567890123456789012n;

            2.2 Non-Primitive Data Type
                8. Object
                    Collection of key-value pairs.
                        let person = {
                            name: "Srinivas",
                            age: 30
                            };
                        Other data structures under Object:
                            Array
                            Function
                            Date
                            RegExp
                            Map, Set,

3.  typeof Operator
    Used to check data type.
    typeof 10; // "number"
    typeof "hello"; // "string"
    typeof true; // "boolean"
    typeof undefined; // "undefined"
    typeof null; // "object" (special case)
    typeof {}; // "object"
    typeof []; // "object"
    typeof function(){}; // "function"

4.  Type Conversion
    JavaScript automatically converts types when needed.
    4.1 Implicit Type Conversion (Type Coercion)

    Example:
    "10" + 20 // "1020" (string concatenation)
    "10" - 2 // 8 (string → number)
    true + 1 // 2 (true → 1)
    false + 1 // 1 (false → 0)

    4.2 Explicit Type Conversion

    Convert to number

    Number("10") // 10

    parseInt("10")
    parseFloat("10.5")

    Convert to string

    String(10) // "10"

    Convert to boolean

    Boolean(1) // true
    Boolean(0) // false
    Boolean("") // false
