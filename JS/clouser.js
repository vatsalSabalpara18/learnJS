// clouser: Clouser means that an inner function always has access to the variables and parameters of its outer
// function, even after the outer function has returned.

// we can make global varialbe local using clousre.


// outer function
// function personlaInfo(name){
//     let age = 18;
//     // inner function
//     return function profInfo (){
//         console.log(name)
//         console.log(age)
//     }
// }

// let x = personlaInfo('vatsal');
// console.log(x)
// x();

// solving the problem of counter using clouser

// outer function
// function counterDemo(){
//     let count = 0;

//     // inner function
//     return function inrcCount(){
//         count++;
//         console.log(count)
//     }
// }
// let res = counterDemo();
// res() // 1
// res() // 2
// res() // 3

// let res1 = counterDemo();
// res1() // 1
// res1() // 2
// res1() // 3


// understand the problem to increase counter.

// function counter(){
//     let counter = 0; // local scope
//                      //local variable start with 0 for any call
//     counter++;
//     console.log(counter)
// }

// counter() // 1
// counter() // 1

// let count = 0  // global scope

// function counter(){
//     count++
//     console.log(count)
// }

// count = 10; // global variable can be changed by snyone.

// counter() // 11
// counter() // 12
// counter() // 13


// Array problems

// const arr1 = [10, 20, 30, 40, 50]
// const arr2 = [40, 50, 60, 70, 80]

// union problem

// const union = [];

// function getUnion(arr) {
//     arr?.forEach(function (v) {
//         if (!union.includes(v)) {
//             union.push(v)
//         }
//     })
// }

// getUnion(arr1);
// getUnion(arr2);

// arr1.forEach((v) => {
//     if (!union.includes(v)){
//         union.push(v)
//     }
// })

// arr2.forEach((v) => {
//     if (!union.includes(v)) {
//         union.push(v)
//     }
// })

// console.log(union)


// intersection problem

// const interSection = [];

// arr2.forEach((v) => {
//     if(arr1.includes(v)){
//         interSection.push(v)
//     }
// })

// console.log(interSection)

// const interSection = arr1.filter((v) => arr2.includes(v));
// console.log(interSection)

// 0 problem in array

// const arr = [20,0,45,0,67,0,45,34,0];

// const ans1 = arr.filter((v) => v === 0)
// const ans2 = arr.filter((v) => v !== 0)

// const ans3 = ans2.concat(ans1);
// console.log(ans3)


// 01. Write a JavaScript function to check whether an `input` is an array or not.

// function is_array(arg) {
//     console.log(arg instanceof Array)
// }

// const arr = [1, 2, 3, 4];
// const obj = { name: "vatsal", age: 22 };
// const str = "Hello World!"

// is_array(arr)
// is_array(obj)
// is_array(str)

//02. Write a JavaScript program to find the most frequent item in an array.

// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let mf = 1
// let m = 0
// let item;

// for(let i = 0; i < arr1.length; i++){
//     for (let j = i; j < arr1.length; j++) {
//         if(arr1[i] == arr1[j]){
//             m++
//             if(mf < m){
//                 mf = m
//                 item = arr1[i];
//             }
//         }
//         m = 0;
//     }
// }
// console.log(item + "(" + mf + "items)")

// 03. to shuffle an array.

// function shuffle(array1){
//     let ctr = array1.length, temp , index;

//     while (ctr > 0) {
//         index = Math.floor(Math.random() * ctr)

//         ctr--;

//         temp = array1[ctr]
//         array1[ctr] = array1[index]
//         array1[index] = temp;
//     }
//     return array1
// }

// const arr1 = [10,20,30,40,50];

// console.log(shuffle(arr1));

// 04. The Swapping Saga
// swapp the number without using the temp variable.

// let a = 30;
// let b = 40;
// console.log(a , b);
// [a,b] = [b, a]
// console.log(a , b);


