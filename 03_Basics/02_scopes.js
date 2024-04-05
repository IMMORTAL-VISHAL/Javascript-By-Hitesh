// var c= 300

let a = 300

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "vishal"

    function two() {
        const website = "youtube"
            // console.log(username);
    }
    //console.log(website);

    //two()
}
//one()


if (true) {
    const username = "Pathak"
    if (username === "pathak") {
        const website = " vscode"
            // console.log(username + website);
    }


    // console.log(website);

}

//console.log(username);

// ++++++++++++++++++ Intersting +++++++++++++++++++++
console.log(addOne(5));
// isko hmm basic function kahte h 
function addOne(num1) {
    return num1 + 1
}


// isko hmm kabhi kabhi hmm expression bhi kahte h 
// isko hmm variable se pehle declare nhi kr sakte h hmesha varibale ke baad hi declare krenge
const addTwo = function(num) {
    return num + 2
}
addTwo(65)