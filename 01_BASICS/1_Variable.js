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
