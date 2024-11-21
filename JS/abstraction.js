// Abstraction which means representing essential features hiding the background detail.

// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function () {
//         return (`First name is: ${firstname} Last 
// 			name is: ${lastname}`);
//     }

//     this.getDetails_access = function () {
//         return (`First name is: ${firstname}, Last 
// 			name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// class Person {
//     constructor(name) {
//         this.name = name
//         if(this.constructor === Person){
//             throw new Error("You can create an instance for Abstract class.")
//         }
//     }

//     info(){
//         throw new Error('Added abstract method has no implementation')
//     }
// }

// class Teacher extends Person {
//     info(){
//         console.log('Teacher Name is ', this.name);
//     }
// }

// let t1 = new Teacher('Vatsal');
// t1.info()

// function Employee(name, id, salary){
//     this.id = id
//     this.name = name
//     this.salary = salary
//     const monthlyBonus = 1000
//     const calFinalSalary= function (){
//         let finalSalary = salary + monthlyBonus
//         console.log("Salary is ",finalSalary)
//     }
//     this.displayInfo = function () {
//         console.log("Id ", this.id)
//         console.log("Name ", this.name)
//         calFinalSalary()
//     }
// }

// const e1 = new Employee('vatsal', 101, 3000)
// e1.displayInfo()

// Abstraction: it is a mechanism that allows you to represent the essential features of as object while hiding
// unnecessary details.

class Shape {
    getArea(){
        throw new Error("You can not access abstract method.")
    }
}

class Rectangle extends Shape {
    getArea(l, w){
        console.log("The Area of Rectangle is ", l*w)
    }
}

class Circle extends Shape {
    getArea(r){
        console.log("The Area of Circle is ", Math.PI*r*r)
    }
}

const r = new Rectangle()
const c = new Circle()
const s= new Shape()

r.getArea(10, 20)
c.getArea(3.5)
s.getArea()