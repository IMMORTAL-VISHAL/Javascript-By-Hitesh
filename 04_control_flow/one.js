// If

const isLoggedIn = true

const temprature = 41

// if (temprature === 41) {

//     console.log("less than 50");

// } else {
//     console.log("temprature is greather than 50 ");
// }

// console.log("executed");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//const balance = 1000
// if (balance > 500) console.log("test");
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else if (balance < 1200) {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggenInFromGoogle = true
const loggedInFromEmail = true



if (userLoggedIn && debitCard) {
    console.log("User have the access to do the shopping ");
}

if (loggenInFromGoogle || loggedInFromEmail) {
    console.log("user have the access to the login");
}