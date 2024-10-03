const a="shivam"
const b=16062003
console.log(a+"sharma"+b)
console.log(`hello my name is ${a} and my dob is ${b}`);  // it is better way

//if want to use method of string then we have declare string like that

const str = new String('shivam')
console.log(str);

console.log(str[0])
console.log(str.length);
console.log(str.toUpperCase())  //original value do not change for all method as string is primitive data type
console.log(str.charAt(2));
console.log(str.indexOf('m'))

const nstr= str.substring(0,4)
console.log(nstr);

const nstr2 =str.slice(-6,4)  // if we give negative value in slice it start from the revers
console.log(nstr2);

const nstr3 = "  shivam.  "
console.log(nstr3)
console.log(nstr3.trim())

const url="https://youtube.com/shivam%20sharma"
console.log(url.replace('%20','-'))
console.log(url.includes('shivam'))
console.log(url.includes('abes'));

const name="shivam-sharma-jaga-ram"
console.log(name.split('-'))  //convert the string into array on the basis of '-' symbol(s)



/*
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()

*/




