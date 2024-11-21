// Array spreading
let arr1 = [10,20,30,40,50];

let arr2 = [...arr1]; // this will give the copy of arr1.

console.log(arr2) // [10, 20, 30, 40, 50]

// [99, 100, 10,20,30,40,50, 'amit', 'mayur']; make this array using the spreading 

const ans = [99, 100, ...arr1, 'amit', 'mayur'];
console.log(ans) // [99, 100, 10, 20, 30, 40, 50, 'amit', 'mayur']

const [first, second, third, fourth, fifth] = arr1 // destructring
console.log(fourth) // 40

// object (spreading operator)

const obj1 = {
    id:101,
    name: 'amit',
    age: 30
}

const obj2 = {...obj1} // this will give the copy of obj1
console.log(obj2) // {id: 101, name: 'amit', age: 30}

const obj3 ={
    id:999,
    ...obj1,
    city: 'surat',
    name: 'ajay'
}

// property can be override if property name are same and value are different. 
// this will take the value of last modified property

console.log(obj3) // {id: 101, name: 'ajay', age: 30, city: 'surat'}