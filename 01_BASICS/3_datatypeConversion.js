let a=44;
let b="44";
let c="44abc";
let d=null;
let e=undefined 
let f=true
let g=1
let h="" //empty string
let i="shivam"
let j="11"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

let a1=Number(a) // alread number
let b1=Number(b) // convert to integer
let c1=Number(c) // convert to integer but return NaN
let d1=Number(d) // return 0
let e1=Number(e) // return NaN
let f1=Number(f) // return 1
let g1=Boolean(g) // return true
let h1=Boolean(h) // return false as string is empty
let i1=Boolean(i) // return true as string is not empty
let j1=String(j) // return 11 as string datatype

console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1);
console.log(e1);
console.log(f1);

console.log(2**4)
console.log(4%2)

let s1="shivam"
let s2=" sharma"
console.log(s1+s2)


// some interesting case

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2); //122 [ if string come first then no arthimetic operation will done]
console.log(1+2+"3"); //33 [if number come first then arthimetic operation will done]

console.log(true) //true
console.log(+true) //1
// console.log(true+);  // give error

// some interesting comparison

console.log(null>0); //false
console.log(null==0); //false  // it work another way[same as kotlin]
console.log(null>=0) //true

console.log("2"==2) // true [js first convert "2" to int 2 then compare its value]
console.log("2"===2) // false both datatype and value are compare

/*
Examples of the Unary Plus Operator in action:

+true  => 1

+false => 0

+'10'   => 10

+'Hello' => NaN (Not a Number, because it can't be converted to a valid number)

+[]    => 0 (An empty array is coerced to 0)

+[1]   => 1

+['10'] => 10

+['10', '20'] => NaN (An array with multiple elements cannot be coerced to a single number)

+null  => 0

+undefined => NaN

The unary plus operator provides a clean and often preferred alternative to Number(), especially in situations where you want to explicitly signal a type conversion.
*/


