// singleton = koi bhi constructor jab hmm isse bnate h to singleto object bnta h jab bhi hmm dusri tarah se bnate to jab yai singleton object nhi hota h tab iske multiple instances bn jate h
// object.create

// jab bhi hmm litrals ki tarah declare krte h to singleton nhi bnat h

//Object Literals = object ko declare krne ka tarika


const mySym = Symbol("key1")
const jsUser = {
    name: "vishal",
    "full name": "vishal pathak",
    [mySym]: "mykey1",
    age: 24,
    email: " vishalpathak842 @gmail.com",
    location: "mathura",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vishalpathak1221@gmail.com"

// console.log(jsUser["email"]);
// Object.freeze(jsUser)

jsUser.email = "vishalpathak@micrososft.com"

// console.log(jsUser);

jsUser.greetings = function() {
    console.log("hello javascript user ");
}

jsUser.greetingstwo = function() {
    console.log(`hello javascript user ${this["full name"]} `);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());