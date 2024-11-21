// Q-1

// let arr1 = [10, 8, 61, 31, 5];
// 1. Change 61 to 20.
// let ans1 = arr1.map(v => v === 61 ? 20 : v);
// console.log(ans1)

//2. Delete 8
// let ans2 = arr1.filter(v => v !== 8);
// console.log(ans2);


//3. Add 20,30,40 after 10
// arr1.splice(1, 0, 20, 30, 40);
// console.log(arr1);


//4. Find index of 5
// let ans4 = arr1.indexOf(5);
// console.log(ans4);


//5. Search 99 is available or not
// let ans5 = arr1.includes(99);
// console.log(ans5);

// Q-2

// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [6, 9, 80];

// 1. Combine arr2 and arr3
// let ans1 = arr2.concat(arr3);
// console.log(ans1);

// 2. Get 20, 30, 40 as array from arr2
// let ans2 = arr2.slice(1, 4);
// console.log(ans2);

//3. Give sum of all element of arr3 using reduce function
// let ans3 = arr3.reduce((acc, curr) => acc + curr, 0);
// console.log(ans3);

//4. Check all element is greater than 10 or not from arr3
// let ans4 = arr3.every(v => v > 10);
// console.log(ans4);

//5. Sort arr3 in descending order.
// let ans5 = arr3.sort((a, b)=> b - a);
// console.log(ans5);

// Q - 3

// 1. Removing duplicates from an array.
// const arr1 = [23, 45, 23, 6, 58, 90, 23, 90, 3, 6];
// const uniqueArr = [];

// for (let i = 0; i < arr1.length; i++) {
//     if (!uniqueArr.includes(arr1[i])) {
//         uniqueArr.push(arr1[i]);
//     }
// }

// console.log(uniqueArr);

// 2. Finding the median of an array.
// const arr1 = [45,7,34,5,56,45];
// let median;
// arr1.sort((a , b) => a - b);
// console.log(arr1);

// if(arr1.length%2 === 0){
//     let index = arr1.length/2;
//     median = (arr1[index] + arr1[index - 1]) / 2;
// } else{
//     let index = Math.floor(arr1.length / 2);
//     median = arr1[index];
// }

// console.log(median);

// 3. Checking if an array is sorted in ascending order.
// const arr1 = [3, 5, 7, 45, 67];
// let flag = false;

// for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] > arr1[i + 1]) {
//         flag = true;
//         break;
//     }
// }

// if(flag){
//     console.log("Array is not in ascending order");
// } else {
//     console.log("Array is in ascending order");
// }

//4. Finding the third largest element in an array.
// let arr1 = [23,45,7,31,35,3,46,25,23,54,2,2,45,75,7,80,9];
// let uniqueArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!uniqueArr.includes(arr1[i])) {
//         uniqueArr.push(arr1[i]);
//     }
// }
// // arr1.sort((a , b) => b - a);
// uniqueArr.sort((a, b) => b - a);
// console.log(uniqueArr);
// console.log("the third largest number in array is " + uniqueArr[2]);

//5. Finding the first three maximum number's sum an array.
// let arr1 = [23,45,7,31,35,3,46,25,23,54,2,2,45,75,7,80,9];
// let uniqueArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!uniqueArr.includes(arr1[i])) {
//         uniqueArr.push(arr1[i]);
//     }
// }
// // arr1.sort((a , b) => b - a);
// let ans = uniqueArr.sort((a, b) => b - a).slice(0 ,3).reduce((acc, curr) => acc +curr, 0);
// console.log(ans);
// console.log("the third largest number in array is " + uniqueArr[2]);

// Q - 4 
// const todo = document.getElementById("todo");
// const tableBody = document.getElementById("tableBody");
// const order = document.getElementById("order");
// const todoList = [];
// // let orderList = [];

// function handleSubmit(){
//     event.preventDefault()
//     todoList.push(todo.value);
//     display();
//     todo.value = '';
// }
// function handleChange(){
//     const orderVal = order.value;
//     if(orderVal == 0){
//         todoList.sort();
//         display();
//     } else if( orderVal == 1){
//         todoList.sort().reverse();
//         display();
//     }
// }
// function display(){
//     let table = todoList.map((v)=>{
//         return `<tr><td>${v}</td></tr>`
//     })
//     tableBody.innerHTML = table.join('');
// }