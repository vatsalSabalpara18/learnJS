// // Encapsulation: it is bundling of data and the methods. And keeping some of it private
// // , that is not accessible outside of the class.

// class Employee{
//     id
//     name
//     #salary
//     #insentives

//     constructor(i, n, s) {
//         this.id = i
//         this.name = n
//         this.#salary = s
//     }

//     //setter method
//     set insentives(i){
//         this.#insentives = i
//     }

//     //getter method
//     get insentives(){
//         return this.#insentives
//     }
//     displayInfo(){
//         console.log("Id: ", this.id)
//         console.log("Name: ", this.name)
//         console.log("Salary ", this.#salary)
//     }
// }

// const e1 = new Employee(101, 'amit', 50000)
// // e1.#salary = 10000 //SyntaxError: Private field '#salary' must be declared in an enclosing class
// e1.insentives = 2000
// e1.displayInfo()
// console.log("The Insectives: ", e1.insentives)

class Restaurant {
    name
    dishes
    #price
    #discount
    constructor(n, d, p) {
        this.name = n
        this.dishes = d
        this.#price = p
    }

    set discount(d) {
        this.#discount = d
    }
    get discount() {
        return this.#discount
    }

    displayBill() {
        let disAmt = 0
        console.log("Resturant Name: ", this.name)
        console.log("Dishes Name: ", this.dishes)
        console.log("Dishes Price: ", this.#price)
        if(this.#price >= 5000){
            disAmt = this.#price * this.#discount / 100
            console.log("discount: ", disAmt)
        }
    }
}

const r1 = new Restaurant("Lemon", "Panjabi Chaines", 5000)
r1.discount = 5
r1.displayBill()