// const tinderUser = new Object() ----> singleton Objet

const tinderUser = {} // ----> non- singleton object 
tinderUser.id = "abc987"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "chetan@gmail.com",
    fullName: {
        userFullName: {
            firstName: "vishal",
            lastName: "Pathak"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }

const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }

// const obj3 = {...obj1, ...obj2 }
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

const users = [{
        id: 1,
        email: "v@gmal.com"
    },
    {
        id: 1,
        email: "v@gmal.com"
    },
    {
        id: 1,
        email: "v@gmal.com"
    },
    {
        id: 1,
        email: "v@gmal.com"
    },
]
users[1].email
    // console.log(tinderUser);
    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    // console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "Js in fantastic Way",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);

console.log(instructor);

// {
//   "  name": "hitesh",
//     "coursename": "js in hindi ",
//    " price ": "free"
// }
[
    {},
    {},
    {},
]