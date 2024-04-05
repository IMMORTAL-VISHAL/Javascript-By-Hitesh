const userEmail = []

if (userEmail) {
    console.log("got the user email");
} else {
    console.log("don't get the user email");
}

// Falsy value
// false, 0, -0, BigInt = 0 n, "", null, undefined, NaN

//Truthy Vlaue
// "0","false"," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


//nullish coalescing Operator(??): It returns the first operand if it is not (Null or Undefined)

let val1
// val1 = 5 ?? 10
// val1 = null??10

val1 = undefined??24
console.log(val1);

// Ternary Operator
// condition ? true:false

const iceTeaPrice = 100;

iceTeaPrice>=80? console.log("less than 80"):console.log("greather than 80");