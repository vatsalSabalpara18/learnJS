
// create the new object
// 1. object liters.
// const person = {
//     fname: "Vatsal",
//     lname:"sabalpara",
//     age: 21,
// }

// 2. using new keyword
// const person = new Object();
// person.fname= "vatsal";
// person.lname="sabalpara";
// person.age = 21;
// person.fullname = function(){
//     return this.fname + " " + this.lname;
// }

// object methods
// console.log(person.fullname());

// read the person object
// console.log("I am " + person.fname + " " +person.lname + ". my age " + person.age +".");
// console.log("I am " + person["fname"] + " " + person["lname"] + ". my age " + person["age"] + ".");

// update the object property
// person.fname = "xyz";
// person.lname = "abc";

// add the new property
// person.email = "abc@xyz.com";
// console.log(person);

// delete the propery
// delete person.lname;
// console.log(person);

// nested object
// const person = {
//     name: "bhb",
//     age: 23,
//     cars: {
//         car1: "Car1",
//         car2: "Car2"
//     }
// }
// acessing the nested object.
// console.log(person["cars"]["car1"]);

const person = {
    name: "Vatsal",
    lname: "Sabalpara",
    age: 21
}

const anotherPerson = {}

// object method

// assign()
// assign object property form soruce to taget.
// Object.assign(anotherPerson, person);
// console.log(anotherPerson, person);

//constuctor
// let any = person.constructor;
// console.log(any)

//create()
// let tempObject = Object.create(person);
// tempObject.name = "vajbnvns";
// console.log(tempObject);

//defineProperties
// Object.defineProperties(person,{
//     language: {value:"en"},
//     year: {value: 2024}
// })

// console.log(person);

//entries()
// let text = Object.entries(person);

// for of loop
// for (const [prop, value] of text) {
//     console.log(prop +" : " + value);
// }

// for in loop
// for (const i in person) {
//     console.log( i +" : "+ person[i]);
// }

// freeze()
// Object.freeze(person);
// person.age = 34;
// console.log(person);

// fromEntries()
// let tmp = Object.entries(person);
// let tmp1 = Object.fromEntries(tmp);
// console.log(tmp, tmp1);

// getOwnPropertyDescriptor()
// let tmp = Object.getOwnPropertyDescriptor(person, "age");
// console.log(tmp.value , tmp.writable, tmp.configurable, tmp.enumerable);

// getOwnPropertyDescriptors()
// let tmp = Object.getOwnPropertyDescriptors(person);
// console.log(tmp.age.value, tmp.age.enumerable);

// getOwnPropertyNames()
// let props = Object.getOwnPropertyNames(person);
// console.log(props);

// groupBy()
// const personProps = [
//     {name: "nvsjkn", age: 21},
//     {name: "bvsb", age: 40},
//     {name: "mvs", age: 57},
//     {name: "nide", age: 25}
// ]

// const result = Object.groupBy(personProps, ({ age }) =>{
//     return age <= 25 ? "adult" : "veryOld"
// })

// console.log(result)

//keys()
// let tmpkeys = Object.keys(person);
// console.log(tmpkeys);

//prototype
// function Employee(name, salary, Id){
//     this.name = name;
//     this.salary = salary;
//     this.Id = Id;
// }
// Employee.prototype.dob = '2002-11-21';

// const emp1 = new Employee("vatsal", 21000, 1);
// console.log(emp1);

//toString()
// const tmpstr = person.toString();
// console.log(tmpstr); // [object object]
// const tmpstr1= Object.toString(person);
// console.log(tmpstr1); // function Object() { [native code] }
// const tmpstr2 = JSON.stringify(person);
// console.log(tmpstr2); //{"name":"Vatsal","lname":"Sabalpara","age":21}


//valueOf()
// const valueof = person.valueOf();
// console.log(valueof); {name: 'Vatsal', lname: 'Sabalpara', age: 21}

//values()
// const valuess = Object.values(person);
// console.log(valuess); // ['Vatsal', 'Sabalpara', 21]

// const person1 = [
//     {name: "bkcah", age: 13},
//     {name: "vnsjn", age: 18},
//     {name: "jnsj", age: 21},
//     {name: "nsvn", age: 36},
//     {name: "nvsn", age: 56},
//     {name: "nnubk", age: 67},
// ]

// const res = Object.groupBy(person1, ({age}) => {
//     return age <= 24 ? "adult" : "old" ;
// }) 
// console.log(res);
