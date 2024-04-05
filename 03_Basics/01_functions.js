function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");

}
//sayMyName()

//function addTwoNumber(number1, number2) { //jab hmm function ki defination bnate h to usko bolte h parameter
//  console.log(number1 + number2);
//}

function addTwoNumber(number1, number2) {
    // console.log(number1 + number2);
    let result = number1 + number2
    return result
        // return (number1 + number2)
}

const result = addTwoNumber(10, 12) // jab hmm function ko call krate h jab hmm jo value pass krate h to use bolte h argument

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCarPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCarPrice(10, 11, 23, 34));

const user = {
    username: "vishal",
    price: 199
}

function handleObject(anyobjcet) {
    console.log(`username is ${anyobjcet.username} and price is ${anyobjcet.price}`);
}

// handleObject(user)

handleObject({
    username: "chetan",
    price: 78678
})


const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 500, 100]));