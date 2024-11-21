// // Class is blueprint to create an object.

// class Building {
//     //2
//     constructor(w, l) {
//         this.width = w; // It is used to Initialize class. And it called when object created
//         this.length = l;
//     }
//     // 4
//     area(){
//         let ans = this.width * this.length;
//         console.log("Area of Buliding is: ", ans);
//     }

// }

// // Object is an entity that has properties and methods(behavior).
// const b1 = new Building(10,20) // 1
// b1.area() // 3

// const b2 = new Building(60,80);
// b2.area()

// class Student {
//     constructor(roll_no, name, percentage) {
//         this.roll_no = roll_no
//         this.name = name
//         this.percentage = percentage
//     }

//     findGrade(){
//         if(this.percentage < 100 && this.percentage >= 90){
//             return 'A1'
//         } else if(this.percentage < 90 && this.percentage >=80){
//             return 'A2'
//         } else if (this.percentage < 80 && this.percentage >= 70) {
//             return 'B1'
//         } else if (this.percentage < 70 && this.percentage >= 60) {
//             return 'B2'
//         } else if (this.percentage < 60 && this.percentage >= 50) {
//             return 'C'
//         } else if (this.percentage < 50 && this.percentage >= 40) {
//             return 'D'
//         } else if (this.percentage < 40 ) {
//             return 'F'
//         } 
//     }
//     display(){
//         console.log("The Student Roll No. is ", this.roll_no)
//         console.log("The Student Name is ", this.name)
//         console.log("The Student Percentage is ", this.percentage)
//         console.log("The Student Grade is ", this.findGrade())
//     }
// }

// const s1 = new Student(1, "Vatsal", 90)
// s1.display()

// const s2 = new Student(2, "xyz", 70)
// s2.display()

// class Employee {
//     constructor(i, n) {
//         this.id = i
//         this.name = n
//     }
// }

// // Inheritance: child class access all properties and methods of parent class.
// class Salary extends Employee{
//     constructor(i,n,s) {
//         super(i,n);
//         this.salary = s
//     }
//     display(){
//         console.log("Id: ", this.id)
//         console.log("Name: ", this.name)
//         console.log("Salary: ",this.salary)
//     }
// }

// const s1 = new Salary(2, "Piyush", 50000)
// s1.display()

class Coures {
    constructor(name, duration) {
        this.name = name
        this.duration = duration
    }
    diplayBasic(){
        console.log("The Coures Name is ", this.name)
        console.log("The Coures Duration is ", this.duration)
    }
}

class Fees extends Coures {
    constructor(name, duration, tution_fees, discount) {
        super(name, duration)
        this.tution_fees = tution_fees
        this.discount = discount
    }
    displayFees(){
        console.log(`The coures name is ${this.name} and that tution fees is ${this.tution_fees}` )
    }
    calDiscount(){
        let discount = this.tution_fees - (this.tution_fees * this.discount/100)
        return this.tution_fees = discount
    }
}



const c1 = new Fees("Full_Stack", "6 Month", 50000, 10)
c1.diplayBasic()
c1.calDiscount()
c1.displayFees()