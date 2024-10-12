let dc = ["superman", "batman", "aquaman"]
let marvel = ["spiderman", "venom", "deadpool"]
// why I create new array with same value because in js array work on shallow copy i.e 
// if [let dc1=dc] then change in dc will also be change in dc1
let dc1 =  ["superman", "batman", "aquaman"]
let marvel1 = ["spiderman", "venom", "deadpool"]


dc.push(marvel)
console.log(dc, dc.length)  // marvel element do not simply push as element , whole array is push an elemnt
console.log(dc[3], dc[3][1])


let heros = dc1.concat(marvel1)
console.log(heros, heros.length)

//another and most common way to combine two array
let crossover= [...dc1,...marvel1]
console.log(crossover);

//flat the elements of array
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]
const flatArray= arr1.flat(Infinity)  //Infinity mean infinite depth
const flatArray1= arr1.flat(1)  

console.log(flatArray)
console.log(flatArray1)

//checking the creadibility of array
console.log(Array.isArray("shivam"))
console.log(Array.isArray(arr1))

//converting to array
console.log(Array.from("shivam"))

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));

