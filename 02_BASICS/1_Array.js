//array

const myArr= [0,1,2,3,4,5]
//size of array is re-sizeable
console.log(myArr[0])
//Another way of declaring array
const myArr1 = new Array(1,2,3,4,5,6)
console.log(myArr.length);

//insert and delete operation
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(100)  //to insert the element at first position
console.log(myArr)
myArr.shift() //to remove element at first position
console.log(myArr)

//to check element present in array or not
console.log(myArr.includes(9));
//to finding the index of an element
console.log(myArr.indexOf(5));
console.log(myArr.indexOf(9));


//to insert elment between array
const myArr2 = myArr.join("and") 

console.log(myArr)  // data-type : same as before
console.log(myArr2)   // data-type : string
console.log(typeof myArr2)  // the data-type of join array always be a string

//slice, splice
console.log("A", myArr);

//give sub-array of array but original array will not change
console.log(myArr.slice(1,3)) //last element value not include
console.log("B", myArr);

//given sub-array will remove from the original array
console.log(myArr.splice(1,3)) //last element value will include
console.log("C", myArr);


/*
METHODS OF ARRAY
length
: 
0
[[Prototype]]
: 
Array(0)
at
: 
ƒ at()
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.unscopables)
: 
{at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]
: 
Object
*/