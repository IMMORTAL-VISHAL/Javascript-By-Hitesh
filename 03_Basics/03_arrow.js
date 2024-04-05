// this ----> current context ko refer krta h 
const user = {
        username: "vishal",
        price: 999,
        welcomeMessage: function() {
            console.log(`${this.username},welcome to website`);
            // console.log(this);
        }
    }
    // user.welcomeMessage()
    // user.username = "chetan"
    // user.welcomeMessage()

// console.log(this);


// browser ka jo global object h bo h window object isliye hmm wndow ke saare event ko use kr pate h but jabse hmne isko vs code wager pr use krna start kiya h tab se hi yah pr this ka output empty aata h



// function chai() {
//let username = "vishal"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "vishal"
//     console.log(this.username);
// }
// chai()

const chai = () => {
        let username = "vishal"
        console.log(this);
    }
    // chai()
    // Basic arrow function isko hmm explicit return bhi bolte h 
    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }

// implicit Return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "vishal" })

console.log(addTwo(3, 4));

// const myArr = [1, 2, 4, 5, 6]
// myArr.forEach(() => {})



// normal function m this ka use isliye krte h kyuki bo global object h