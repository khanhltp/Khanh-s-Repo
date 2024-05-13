// class Animal {
//     name: string;
//     age: number;

//     constructor(name: string) {
//         this.name = name;
//         this.age = 10;
//     }
//     private makeSound(sound: string): void {
//         console.log(`${this.name} makes sound ${sound}`);
//     }
//     // getName()
//     // getAge()
// }

// class Cat extends Animal {
//     private owner: string;

//     constructor(name: string, age: number, owner: string) {
//         super(name);
//         this.age = 20;
//         this.owner = owner;
//     }
// }


// let cat = new Animal("Cat");
// cat.makeSound("meow");

// let dog = new Animal("Dog");
// dog.makeSound("gâu");

// console.log(cat.makeSound(""));

// abstract class Shape {
//     abstract getArea(): number;
//     abstract getPerimeter(): number;

//     showInfo(): void {
//         console.log(`Area: ${this.getArea()}`)
//         console.log(`Perimeter: ${this.getPerimeter()}`)
//     }
// }

// class Square extends Shape {
//     private width;
//     constructor(width: number) {
//         super();
//         this.width = width;
//         this.showInfo();
//     }

//     getArea(): number {
//         return this.width + this.width
//     }

//     getPerimeter(): number {
//         return 4 * this.width
//     }
// }

// class Circle extends Shape {
    
//     private radius;

//     constructor(radius: number) {
//         super();
//         this.radius = radius
//     }

//     getArea(): number {
//         return Math.PI * this.radius * this.radius
//     }
//     getPerimeter(): number {
//         return Math.PI * this.radius * 2
//     }
// }

// class Retangle extends Shape {
//     public width: number;
//     public height: number;

//     constructor (width: number, height: number) {
//         super()
//         this.width = width;
//         this.height = height;
//     }

//     getArea(): number {
//         return this.width * this.height
//     }

//     getPerimeter(): number {
//         return (this.width + this.height) * 2
//     }

// }
console.log("abc")


