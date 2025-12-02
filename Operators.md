1.  JavaScript Operators
    Operators are symbols that perform operations on values.

    1.1 Types of Operators

    Arithmetic Operators
    Assignment Operators
    Comparison Operators
    Logical Operators
    String Operators
    Unary Operators
    Ternary Operator
    Bitwise Operators

2.  Arithmetic Operators
    Operator Meaning Example

    - Addition 10 + 20
    - Subtraction 20 - 10
    - Multiplication 10 \* 3
    - / Division 10 / 2
    - % Modulus (remainder) 10 % 3 → 1
    - ** Exponent 2 ** 3 → 8
    - Increment / Decrement
    - ++x : pre-increment
    - x++ : post-increment

3.  Assignment Operators
    Operator Meaning
    - = Basic assignment
    - += a = a + b
    - -= a = a - b
    - _= a = a _ b
    - /= a = a / b
    - %= a = a % b
4.  Comparison Operators
    Used to compare values and return true/false.
    Operator Meaning Example
    - == Loose equality (allows type coercion) "10" == 10 → true
    - === Strict equality (no coercion) "10" === 10 → false
    - != Not equal 10 != 20
    - !== Strict not equal "10" !== 10
    - > Greater than
    - < Less than
    - > = Greater or equal
    - <= Less or equal
5.  Logical Operators
    Operator Meaning

    - && Logical AND
    - || Logical OR
    - ! Logical NOT

6.  Truthy / Falsy values

        - Falsy values:
        - 0
        - ""
        - null
        - undefined
        - false
        - NaN

    Everything else is truthy.

7.  String Operators

- is used for string concatenation.
  "hello" + " world"

8. Unary Operators

   typeof
   delete
   delete obj.key;
   void
   Evaluates but returns undefined.

   Why is it used?
   To ensure an expression returns undefined.
   Commonly used in old JavaScript bookmarks (bookmarklets).

9. Ternary Operator

   Short form of if-else
   let result = (age >= 18) ? "Adult" : "Minor";

10. Bitwise Operators (For advanced students)
    & AND
    | OR
    ~ NOT
    ^ XOR
    << left shift

    > > right shift

Example:

Let's compare 12 and 7 in binary:
12 in binary: 1100
7 in binary: 0111
Performing 12 & 7:
1100 (12 in binary)
& 0111 (7 in binary)

---

0100 (Result: 4)

11. Interview-Level Key Points

✔ JavaScript is dynamically typed.
✔ null is an object due to an old language bug.
✔ == vs === is one of the most asked interview questions.
✔ Type coercion is automatic but can cause bugs.
✔ Objects & arrays are reference types.
