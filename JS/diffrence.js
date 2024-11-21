// syntax

// function normalAddtionFunc(a, b) {
//     return a + b
// }

// const arrowAddtionFunc = (a, b) => {
//     return a + b
// }

// const anotherAddionArrowFunc = (a,b) => a + b;

// console.log(normalAddtionFunc(10,20)) // 30
// console.log(arrowAddtionFunc(10,20)) // 30
// console.log(anotherAddionArrowFunc(10,20)) // 30

// 2. this keyword
// const obj = {
//     name: "vatsal",
//     normalFunc: function () {
//         console.log(this.name)
//         // this keyword context is refer to obj
//     },
//     arrowFunc: () => {
//         console.log(this.name)
//         // this keyword context is refer to outside of obj
//     }
// }

// obj.normalFunc() // vatsal
// obj.arrowFunc() // ''

// 3. arrow function has not arguments object.

// function normalFunc(){
//     console.log(arguments[0])
// }

// normalFunc(20) //20

// const arrowFunc = () => {
//     console.log(arguments[0]) // Uncaught ReferenceError: arguments is not defined
// }
// arrowFunc(20)

// 4. constructor function

// function NormalFunc(){
//     this.value = 23;
// }

// const normalObj = new NormalFunc();
// console.log(normalObj.value); // 23

// const ArrowFunc = () =>{
//     this.value = 23;
// }
// const arrowFunc = new ArrowFunc(); // Uncaught TypeError: ArrowFunc is not a constructor
// console.log(arrowFunc.value)

// 5. Arrow Function can not be accessed before initialization.

// using normal function.
// console.log(Hello()); // Hello World!

// function Hello(){
//     return "Hello World!"
// }

// using Arrow function.
// console.log(sayHello()) // Uncaught ReferenceError: Cannot access 'sayHello' before initialization
// // if we define with var keyword  Uncaught TypeError: sayHello is not a function give error.

// const sayHello = () => {
//     return "Hello World!"
// }

// hosting

// x = 56;
// console.log(x) //56
// var x;

// if we define variable using let and const will not run the code and give the error

// carName = "Volvo" //Uncaught ReferenceError: Cannot access 'carName' before initialization
// let carName; 

// carName = "Volvo" // ReferenceError: Cannot access 'carName' before initialization
// const carName // Uncaught SyntaxError: Missing initializer in const declaration