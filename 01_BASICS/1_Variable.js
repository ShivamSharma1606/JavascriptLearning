const accountId = 101 // value cannot be change
let email = "shivam@gmail.com" // value can be change and follow the scope
var password = "123" // value can be change but do not follow scope
city = "delhi" // automatic variable defined
let state // udefined as no value assign to variable

// const accountId = 1
// console.log(accountId); // not allowed

console.table([email, password, city, state])

; // is optional in javascript

/*
    prefer do not to use var 
    as it do not follow the scope
*/

"use strict"; // treat all js code as newer version
/*
    Strict Mode in JavaScript is a feature introduced in ECMAScript 5 that allows developers to opt into a restricted variant of JavaScript. This mode enforces stricter parsing and error handling, making the language less forgiving of certain coding practices that might otherwise lead to silent errors or problematic behaviors in "sloppy mode" (the default, non-strict mode).
*/
