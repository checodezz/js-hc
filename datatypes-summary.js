// Primitive
// 7 types : String,  Number, Boolean, null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.4

const isLoggedIn = false
const outsiseTemp = null
let userEmail; //undefined

//symbol ex
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//bigint
const bigNumber = 28374274724247923n;


//Reference (Non primitive)

// Array, Object, Functions 

const heros = ["shaktiman", "naagraj", "doga"];

let muObj = {
    name: "chethan",
    age: 22
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof myFunction);