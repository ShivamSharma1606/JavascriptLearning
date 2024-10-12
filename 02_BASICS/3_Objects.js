// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "shivam",
    "last name": "sharma",
    [mySym]:"myKey1", //[] use square bracket to define symbol in objects without [] it is treat as string
    age: 21,
    location: "Jaipur",
    email: "shivam@gmail.com",
    isLoggedIn: false
}

console.log(JsUser.email)
console.log(JsUser["email"])  // another way of accessing
// we can access last name only using 2nd method i.e
console.log(JsUser["last name"]);
// how to access symbol
console.log(JsUser[mySym])

//overwrite a value
JsUser.email="shivam@yahoo.com"

//freez an object so no change can apply
// Object.freeze(JsUser)
// JsUser.email="shivam@outlook.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello user")
}

JsUser.greeting2 = function(){
    console.log(`hello user,${this.name}`) // this is used to access it's own object
}


console.log(JsUser.greeting())
console.log(JsUser.greeting2())