// Syncronize : excute process one after another, In order.

// const firstProcess = () => {
//     console.log("I am first Process")
// }

// const secondProcess = () => {
//     console.log("I am second Process")
// }

// const thirdProcess = () => {
//     console.log("I am third Process")
// }

// firstProcess()
// secondProcess()
// thirdProcess()

// Syncronize Problem.

// const firstProcess = () => {
//     console.log("I am first Process")
// }

// const secondProcess = () => {

//     const d = new Date()
//     while(new Date() - d < 5000){

//     }
//     console.log("I am second Process")
// }

// const thirdProcess = () => {
//     console.log("I am third Process")
// }

// firstProcess()
// secondProcess()
// thirdProcess()

// Asynchrous 

// CallBack function : function call back after it's run.

// const add = (a, b, callback) => { // 2
//     let res = a + b;
//     callback(res); // 3
// }

// const display = (data) => {
//     console.log(data) // 4
// }

// add(10,20,display); // 1

// callback function: is called after working on some task

// console.log("programming start...."); // 1

// // 3
// const fetchData = (callback) =>{
//     setTimeout(() => {
//         let data = {
//             id: 101,
//             name: 'amit',
//             age: 21
//         }
//         callback(data)
//     }, 3000)
// }

// // 5
// const display = (data) => {
//     console.log(data)
// }

// fetchData(display); // 2

// console.log("End of The Program") //4 

// outut: 

//  programming start....
//  End of The Program
//  { id: 101, name: 'amit', age: 21 }

// promisr is aysncronous.

// console.log("programming start....")

// const myPromise = new  Promise((resolve, reject) =>{
//     setTimeout(() => {
//         try {
//             const data = {
//                 id: 101,
//                 name: "vatsal",
//                 age: 21
//             }
//             resolve(data);
//         } catch (e) {
//             reject(e)
//         }
//     },3000)
// })

// myPromise.then((d) => console.log(d))
//          .catch((e) => console.log(e))
//          .finally(console.log("fetching process...."))

// console.log("in the program....")

// output:

// programming start....
//  fetching process....
//  in the program....
//  { id: 101, name: 'vatsal', age: 21 }

// callback hell

// Callback hell is a phenomenon where a Callback is called inside another Callback.
// It is the nesting of multiple Callbacks inside a function. 
// If you look at the design of the code, it seems just like a pyramid.
// Thus the Callback hell is also referred to as the ‘Pyramid of Doom’.
// function getData(callback) {
//     setTimeout(() => {
//         console.log("Data retrieved");
//         callback("some data");
//     }, 1000);
// }

// function processData(data, callback) {
//     setTimeout(() => {
//         console.log("Data processed:", data);
//         callback("processed data");
//     }, 1000);
// }

// function saveData(data, callback) {
//     setTimeout(() => {
//         console.log("Data saved:", data);
//         callback("save successful");
//     }, 1000);
// }

// // Callback hell example
// getData((data) => {
//     processData(data, (processedData) => {
//         saveData(processedData, (result) => {
//             console.log(result);
//         });
//     });
// });

// 2

// const firstCall = (a, callback) =>{
//     setTimeout(() => {
//         let ans = a + 20;
//         callback(ans) //3
//     }, 2000)
// }

// const secondCall = (a, callback) => {
//     setTimeout(() => {
//         let ans = a * 5;
//         callback(ans)
//     }, 2000)
// }

// const thirdCall = (a, callback) => {
//     setTimeout(() => {
//         let ans = a - 100;
//         callback(ans)
//     }, 2000)
// }
// // 1            //4
// firstCall(10, function(r1){
//     console.log(r1) //5
//     secondCall(r1, function(r2){
//         console.log(r2)
//         thirdCall(r2, function(r3){
//             console.log(r3)
//         })
//     })
// })

// callback hell problem solution

// const firstCall = (a) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             let ans = a + 20
//             reslove(ans)
//         }, 2000)
//     })
// }

// const secondCall = (a) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             let ans = a * 5
//             reslove(ans)
//         }, 2000)
//     })
// }

// const thirdCall = (a) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             let ans = a - 100
//             reslove(ans)
//         }, 2000)
//     })
// }

// firstCall(10)
// .then((r1) => secondCall(r1))
// .then((r2) => thirdCall(r2))
// .then((r3) => console.log(r3))
// .catch((error) => console.log(error))

// firstCall(10)
//     .then(function (r1) {
//         console.log(r1)
//         return secondCall(r1)
//     })
//     .then(function (r2) {
//         console.log(r2)
//         return thirdCall(r2)
//     })
//     .then(function (r3) {
//         console.log(r3)
//     })
//     .catch((error) => console.log(error))

// async await

console.log("program start...")

const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok){
            throw new Error("Error in fetching Data!")
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

console.log("In the program...")