// Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution se dikkat hoti h kai baar global scope ke variable ke pollution ko htane ke liye hmm iife ko use krte h 

(function chai() {
    // named iife kyuki iska name h 
    console.log(`DB CONNECTED`);
})();

// chai()

// yai simple iife h kyuki iska koi name nhi h 
((name) => {
    console.log(`DB CONNECTED ${name}`);
})("Vishal")