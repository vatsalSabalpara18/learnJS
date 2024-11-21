// Q-1
// const obj1 = {
//     id: 101,
//     name: 'amit',
//     city: 'surat'
// }


// 1. Check ‘percentage' key is available or not in obj1.
// const ans = obj1.hasOwnProperty("percentage");
// console.log(ans) //false

//2. Add new property favColor: ‘blue' in object.
// obj1.favColor = 'blue';
// console.log(obj1) //{id: 101, name: 'amit', city: 'surat', favColor: 'blue'}

// 3. Change city to ‘vapi'
// obj1.city = 'vapi';
// console.log(obj1); //{id: 101, name: 'amit', city: 'vapi'}

// 4. Convert all property to array.
// const objArray = Object.entries(obj1);
// console.log(objArray) 

// 5. Delete ‘city' property from obj1.
// delete obj1.city;
// console.log(obj1); // {id: 101, name: 'amit'}

// Q-2

const arr4 = [
{ id: 1, name: 'mobile', price: 8000, qty: 20},
{ id: 2, name: 'laptop', price: 50000, qty: 3 },
{ id: 3, name: 'book', price: 120, qty: 60 },
{ id: 4, name: 'botle', price: 50, qty: 10 },
{ id: 5, name: 'ac', price: 35000, qty: 2 }
]

// 1. Display all data in table format
// const tableDisplay = document.getElementById("tableDis");
// let table = `<table>
//                 <tr>   
//                 <th>id</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quntity</th>
//                 </tr>`
// table += arr4.map((v) =>{
//     return `
//     <tr>
//         <td>${v.id}</td>
//         <td>${v.name}</td>
//         <td>${v.price}</td>
//         <td>${v.qty}</td>
//     </tr>`
// }).join("");

// table += `</table>`

// tableDisplay.innerHTML = table;

// 2. Remove botle data from arr4
// const array = arr4.filter((v)=> v.name !== 'botle');
// console.log(array);

// 3. Search ‘ac’ is available or not in arr4
// const arr = arr4.some((v) => v.name === 'ac');
// console.log(arr) //true

// 4. Only Increase qty of laptop to 5.
// const arr = arr4.map((v)=>{
//     if(v.name === "laptop"){
//         v.qty = 5;
//     }
//     return v
// })
// console.log(arr) //{ id: 2, name: 'laptop', price: 50000, qty: 5 }

// 5. Give list of all products that have price more than 20000.
// const arr = arr4.filter((v) => v.price > 20000).map((v) => v.name);
// console.log(arr); //['laptop', 'ac']


// Q-3
// Create a employee form that have name, joining date and salary.Add these data 
// into array as an object.And Display it.

const empName = document.getElementById("empName");
const empJD = document.getElementById("empJD");
const empSalary = document.getElementById("empSalary");
const tableBody = document.getElementById("tableBody");
const empData = [];

const assignId = () =>{
    if(empData.length){
        return empData[empData.length - 1].empId + 1;
    } else {
        return 1001
    }
}

const handleReset = () => {
    empName.value = ''
    empSalary.value =''
    empJD.value =''
}

function handleSubmit(){
    event.preventDefault();
    const employee = {
        empId: assignId(),
        empName: empName.value,
        empJoiningDate: empJD.value,
        empSalary: empSalary.value
    }
    empData.push(employee)
    getTable();
    handleReset();
}

function getTable(){
    tableBody.innerHTML = empData.map((v) => {
        const modifiedDate = new Date(v.empJoiningDate);
        return `
            <tr>
                <td>${v.empId}</td>
                <td>${v.empName}</td>
                <td>${modifiedDate.toLocaleDateString('en-GB')}</td>
                <td>${v.empSalary}</td>
            </tr>
        `
    }).join("")
}
