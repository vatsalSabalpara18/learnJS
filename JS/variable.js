//var

//var does not have block scope
//it is can be declare same name

// var x = 10;
// var x = 20;

// console.log(x); //20

// var x = 10;

// {
//     var x = 30;
// }

// console.log(x); //30

// let

//let can not declare with same name
//it have block scope.
// we can inistialize after the declare the variabel

// let x = 10;
// let x = 20;

// console.log(x) //Syntext error

// let x = 10;
// {
//     let x =12.5;
// console.log(x); //12.5
// }

// console.log(x); // 10

// let x; //decalre
// x = 10; //inisialize
// console.log(x); //10

// let x = 10;
// x = x + 10; // we can change the value through operations and assigned it.
// console.log(x); // 20

// const

//we can not redeclare the same name variable.

// const x = 10;
// const x = 20;

// console.log(x); //error

//we can not change the value at const variable

// const x = 10;
// x = 20;
// console.log(x); // error

// Declaration and initialization must be done at same time.

// const x;
// x = 10;
// console.log(x); //error

//const have a block scope.

// const x = 10;
// {
//     const x =34.5;
//     console.log(x); //34.5
// }
// console.log(x); //10

//examples 

// var x = 10;
// let x = 20;
// const x = 30;

// console.log(x); //errors

// let x = 10 // Global Variable
// {
//     x = x + 5;
// }

// console.log(x); // 15

// x = x + 10

// console.log(x); // error // not defined.

// {
//     let x = 10; // Local Variable
//     x = x + 9;
//     console.log(x); //not execute.
// }
