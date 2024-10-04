const score=100
console.log(score)

const balance=new Number(400)
console.log(balance);

//converting number to string 
console.log(balance.toString().length)

//how many decimal point we want
const num1= new Number(400.274322)
console.log(num1.toFixed(2));

//using for presion [try the value 1,2,3,4,5] find interesting result
console.log(num1.toPrecision(4))

const num2=10000000
//to show result as standard value [if no parameter is given then it is default to US values]
console.log(num2.toLocaleString('en-IN'))


// +++++++++++++++++ MATHS +++++++++++++++++++
console.log(Math)   //return object

console.log(Math.abs(-4))
console.log(Math.round(-4.75))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.sqrt(45))
console.log(Math.min(4,6,2,1))
console.log(Math.max(4,6,2,1))

//important
console.log(Math.random()) //alway value between 0 and 1
console.log((Math.random()*10)+1)  // to ensure value between 1 and 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) //to ensure value between min and max[i.e value alway between 10 and 20]


/*
  NUMBERS METHODS

ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
*/

/*
    MATHS METHODS

    E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math"
*/