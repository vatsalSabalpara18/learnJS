// const person = {
//     name: "amit",
//     Age: "20"
// }

// console.log("Person name " + person.name + " Person Age " + person.Age);

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.forEach((v) => {
//     console.log("Person Name " + v.name + " Person age " + v.age);
// })


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }

// ]

// person.forEach((v) => {
//     v.course.forEach((v1) => {
//         console.log("Person Name " + v.name + " Person Age " + v.age + " Person Course " + v1)
//     })
// })


// person.forEach((v) => {
//     let course = v.course;
//     console.log("Person Name " + v.name + " Person Age " + v.age + " Person Course " + course[0] + " " + course[1]);
// })

// const myObj = {
//     name: "jd",
//     age: 20,
//     cars: {
//         car1: "ford",
//         car2: "breza",
//         car3: "BMW"
//     }
// }

// console.log("myObj Name " + myObj.name + " myObj age " + myObj.age);
// console.log("myObj Car1 " + myObj.cars.car1);
// console.log("myObj Car1 " + myObj["cars"].car2);
// console.log("myObj Car1 " + myObj["cars"]["car3"]);


// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.forEach((v) => {
//     console.log("Person Name " + v.name + " Person Age " + v.age + " Person Course " + v.course.c1 + " " + v.course.c2);
// })

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat: 10
//         }
//     }
// }

// const modifiedObj = Object.entries(data);
// function display(object){
//     return object.forEach((v) => {
//         v.forEach((v1) => {
//             if (Array.isArray(v1)) {
//                 v1.forEach((v3) => {
//                     console.log(v3);
//                 })
//             } else if (v1.constructor === Object) {
//                 display(Object.entries(v1))
//             } else {
//                 console.log(v1)
//             }
//         })
//     })
// }

// display(modifiedObj)

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
] 
const arr = institues.filter((v) => {
    let uniqueFlag = true;
    v.seat.filter((v1) => {
        // let flag = true
        for (const key in v1) {
            if (Object.prototype.hasOwnProperty.call(v1, key)) {
                if(v1[key] === 0){
                    delete v1[key]
                    // flag = false
                }
            }
        }
        // if(flag){
        //     return true
        // } else {
        //     return false
        // }
    })
    if (Object.keys(v.seat[0]).length === 0 && v.seat[0].constructor === Object) {
        uniqueFlag = false
    }
    if(uniqueFlag){
        return true
    } else {
        return false
    }
})
console.log(arr);

const data = institues.map((v) =>{
    return {
        name: v.name,
        seat: [Object.fromEntries(Object.entries(v.seat[0]).filter(([key, value]) => value > 0))]
    }
}).filter((v) => Object.keys(v.seat[0]).length)

console.log(data);
// const modifiedArr = [];

// function display(objectArr){
//     return objectArr.forEach((v) => {
//         v.forEach((v) => {
//             if(v.constructor === Object){
//                 display(Object.entries(v))
//             } else if(Array.isArray(v)){
//                 v.forEach((v) => {
                    
//                 })
//             } else {
//                 modifiedArr.push(v);       
//             }
//         })
//     })
// }

// function display(array) {
//   return array.forEach((v) => {
//         if (v.constructor === Object) {
//             for (const key in v) {
//                 if (Array.isArray(v[key])) {
//                     display(v[key])
//                 } else {
//                     console.log( key + " " + v[key]);
//                 }
//             }
//         }
//     }) 

// }
// display(institues);

// institues.forEach((v) => {
//     let seat = v.seat[0];
//     console.log("Institues Name " + v.name);
//     console.log("Institues Seats ")
//     console.log("React " + seat.react)
//     console.log("Node " + seat.node)
//     console.log("Full Stack " + seat.full_stack)
//     console.log("UI/UX " + seat.ui_ux)

// })