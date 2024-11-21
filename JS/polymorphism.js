// Polymorphism: a fundamental concept in object-oriented programming (OOP) that allows different objects 
// to respond to the same method call in different ways

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
//     getArea() {
//         throw new Error('Method getArea() must be implemented by subclass.');
//     }

//     getName() {
//         return this.name;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super('Circle');
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super('Rectangle');
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// function displayShapeArea(shape) {
//     console.log(`Shape: ${shape.getName()}`);
//     console.log(`Area: ${shape.getArea()}`);
// }

// // Usage
// const circle = new Circle(5);
// const rectangle = new Rectangle(10, 20);

// displayShapeArea(circle);     // Shape: Circle, Area: 78.53981633974483
// displayShapeArea(rectangle); // Shape: Rectangle, Area: 200

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     eats(){
//         console.log(`${this.name} is eats food.`)
//     }
// }

// const animal = new Animal('Animal')
// animal.eats() // Animal is eats food.

// class Aligator extends Animal {
//     eats(){
//         super.eats() // Aligator is eats food.
//         console.log(`${this.name} is eats fishes.`) 
//     }
// }

// const a1 = new Aligator('Aligator')
// a1.eats() // Aligator is eats fishes.

// Polymorphism: Polymorphism means "many forms". samw name function implemented in differnet class
// with different functionality

class Animal {
    getVoice(){
        console.log("The Animal Voice...");
    }
}

class Cat extends Animal {
    getVoice() {
        console.log("The Cat Voice...");
    }
}

class Dog extends Animal {
    getVoice() {
        console.log("The Dog Voice...");
    }
}

const a = new Animal()
a.getVoice()

const c = new Cat()
c.getVoice()

const d = new Dog()
d.getVoice()