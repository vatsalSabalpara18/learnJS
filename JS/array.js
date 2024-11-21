let data = [15, 8, 95, "surat", 12, 88, "amit"];
let data1 = [99, 100, 101, 100];
let data2 = ["vatsal", "any", "name", "sort"];
// console.log(roll_no);

// Array Methods

//indexOf()
// let ans = data1.indexOf(100); //first occurence of element's index
// console.log(ans); // 1

//lastIndexOf()
// let ans = data1.lastIndexOf(100); // last occurence of element's index
// console.log(ans); // 3

//every()
// let ans = data1.every(v => v > 100); // check condition for every element.
// console.log(ans); // false

//includes()
// let ans = data1.includes(100); //check value is available or not
// console.log(ans); // return boolean

//findIndex()
// let ans = data1.findIndex(v => v > 100); // find element and return it's index, not available -> -1
// console.log(ans); // 2

//fill()
// let ans = data1.fill(10, 1, 3); // replace element with 10 at index 1 and 2;
// console.log(ans); // [99, 10, 10, 100]
// console.log(data1); // [99, 10, 10, 100]

//sort()
// let ans = data1.sort((a, b) => a-b); //number sort // acending order // b - a descending order
// console.log(ans); // [99, 100, 100, 101]
// console.log(data1); // [99, 100, 100, 101]

// let ans = data2.sort();// alphabetic sort
// console.log(ans); ['any', 'name', 'sort', 'vatsal']
// console.log(data2); ['any', 'name', 'sort', 'vatsal']

// reverse()
// let ans = data1.reverse(); // return reversed array.
// console.log(ans); //[100, 101, 100, 99]
// console.log(data1); //[100, 101, 100, 99]

//reduce()
// let ans = data1.reduce((acc, curr) => acc + curr, 0); //return accumulator after whole itreation of array.
// console.log(ans); // 300

// filter()
// let ans = data1.filter(v => v >= 100); // return array baised on conditon.
// console.log(ans); //[100, 101]

//map()
// let ans = data1.map((v) => v > 100); // return array
// console.log(ans); // [false, false, true]

//slice()
// let ans = data.slice(2 , 6); //return the part of the array
// console.log(ans); // [95, 'surat', 12, 88]

// isArray();
// let ans = Array.isArray(data); // check the array or not
// console.log(ans); // true

//concat()
// let ans = data.concat(data1); // combine array
// console.log(ans);   // return Array;
// console.log(data);
// console.log(data1);

// some()
// let ans = data.some((v) => v === 12); // check the value is available or not
// console.log(ans); // return boolean

// toString()
// let ans = data.toString(); // convert array to string
// console.log(ans); // return string

//find()
// let ans = data.find((v) => v === 12); // return the value of element is available if not it return undefined.
// console.log(ans); // return element or undefined.

//slice()
// let ans = data.slice(3, data.length); // return array from start index to (not inclusive) given end.
// console.log(ans); //return array

//map()
// let ans = data.map((v) => v * 2)// return array populated with the results of calling a provided function on every element in the calling array.
// console.log(ans);

// filter()
// let ans = data.filter(v => typeof v !== "string"); // return modified array baised on condition which is applied in callback function.
// console.log(ans); // return array

// reduce()
// let ans = data1.reduce((acc, curr) => acc + curr, 0); // execute the reducer func for each element
// console.log(ans); // return accumulated result value.

// indexOf()
// let ans = data.indexOf(88); // return the position of the first occurence of a value.
// console.log(ans) // return array index

// lastIndexOf()
// let ans = data.lastIndexOf(88); // return the index of the last occurence of a value.
// console.log(ans); //return array index

// every()
// let ans = data.every(v => typeof v === "number"); // check the value of all array.
// console.log(ans) //return boolean

// includes()
// let ans = data.includes(88); // check the passed value is available or not.
// console.log(ans) // return boolean

// findIndex()
// let ans = data.findIndex(ele => ele === 88); // return the index of element is available if not it return -1;
// console.log(ans);

//fill()
// let ans = data.fill("vatsal") // fills specified elements in an array with a value and overwrite the original array.
// console.log(ans) // return array
// console.log(data)

//sort()
// let ans = data1.sort(); //return the sorted array as string alphabetic order.
// console.log(ans); //retunr array
// console.log(data1); // modify the original array.

//reverse()
// let ans = data.reverse(); // reverse the order of array
// console.log(ans); // return array
// console.log(data); // modify the original one.

//update
// roll_no[1] = 99;
// console.log(roll_no);

// add
// roll_no.push(100);    // add at last
// roll_no.unshift(100); // add at first
// roll_no.splice(3, 0, 103, 104, 105); // add 103, 104, 105 from index 3;
// console.log(roll_no);

// remove
// let ans = roll_no.pop(); // remove at last
// let ans = roll_no.shift(); // remove ar first
// let ans = roll_no.splice(1 , 2); // remove 2 elements from index 1;
// console.log(ans , roll_no);

// for (let i = 0; i < roll_no.length; i++) {
//     console.log(roll_no[i]);
// }

// roll_no.forEach((ele, index) =>{
//     console.log(index, ele);
// })

// roll_no.map((ele, index) => {
//     console.log(index ,ele);
// })

// roll_no.map((ele, index) => console.log(index , ele));

// let name = new Array("amit", "ajay", "mayur");
// console.log(name[1]);

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// function handleClick() {
//     console.log("button clicked.");
// }

// Arrow Function (ES6)

// const handleClick = () => {
//     console.log("button clicked")
// }