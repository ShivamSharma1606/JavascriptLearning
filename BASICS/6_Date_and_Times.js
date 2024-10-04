
let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())

console.log(typeof mydate)

let mycreatedate = new Date(2003, 5, 16) //months start from 0 i.e jan is 0 and june is 5
console.log(mycreatedate.toLocaleString());

//another syntax
let mycreatedate2 = new Date("2003-06-16")  // now months start from 1
console.log(mycreatedate2.toLocaleString());


//++++++++++++++++++++ TIME ++++++++++++++++++++