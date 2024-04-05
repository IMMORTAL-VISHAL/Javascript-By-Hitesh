// primitive datatypes

// 7 types : String , Number , Boolean , Null , Undefined, Symbol, BigInt

// Javascript is a dynamically typed language 
//Refrence Dtatypes ( Non Primitive)
// Arrays, Objects,Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')


// console.log(id === anotherId);
const bigNumebr = 6537655735654654


const heros = ["saktiman", "naagraj", "Doga"]
let myObj = {
    name: "vishal ",
    age: 24,
}

const myFunction = function() {
    console.log("vishal pathak");
}

//console.log(myFunction);

// console.log(typeof bigNumebr);



//+++++++++++++++++++++++++++++++++++++++++
// javascript m memory m heap m to copy create hoti h but heap memory m copy create nhi hoti h reference(jo bhi change krte h bo original value m hi hota h ) create ho jata h 
// stack (primitive), heap (non-primitve ) 

let myYouTubeName = " vishal pathak"

let anotherName = myYouTubeName
anotherName = "ChaiorCode"

console.log(anotherName);
console.log(myYouTubeName);


let userOne = {
    email: "vjiv@gmail.com",
    upi: "pathak@ybl",
}

let userTwo = userOne

userTwo.email = " vishal@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);