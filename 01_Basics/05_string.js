const name = "vishal pathak"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("Chetan Pathak")
    // console.log(gameName[4]);
    // console.log(gameName.length);
    // console.log(gameName.toUpperCase());


console.log(gameName.charAt(5));
const newString = gameName.substring(0, 5)
console.log(newString);


const anotherString = gameName.slice(-12, 4) // isme hmm negatie value use kr sakte h 
console.log(anotherString);


const newStringone = "     vishalpathak@gmail.com      "
console.log(newStringone);
console.log(newStringone.trim()); // trim spaces ko remove kr deta h

const url = 'https://vishal.com/vishal%20pathak'


console.log(url.replace('%20', '-'));

console.log(url.includes('vishal'));
console.log(gameName.split('-'));