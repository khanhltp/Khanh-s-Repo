// // Bài tập 1: Tạo lớp đối tượng đơn giản
// // Tạo một lớp Person với các thuộc tính cơ bản như name và age.
// // Tạo một phương thức introduce để hiển thị thông tin về Person.


// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce(): void {
//         console.log(`Name: ${this.name}`)
//         console.log(`Age: ${this.age}`)
//     }
// }

// // let khanhltp = new Person ("khanhltp", 25);
// // khanhltp.introduce();

// // Bài tập 2: Kế thừa lớp
// // Tạo một lớp con Student kế thừa từ lớp Person.
// // Mở rộng lớp Student bằng cách thêm các thuộc tính như studentID và phương thức study.

// class Student extends Person {
//     student_id: number;

//     constructor(name: string, age: number, student_id: number) {
//         super(name, age);
//         this.student_id = student_id;
//     }
//     study(): void {
//         console.log(`Name: ${this.name}`)
//         console.log(`Age: ${this.age}`)
//         console.log(`Student ID: ${this.student_id}`)
//     }
// }
// // let khanhltp = new Student("khanhltp", 25, 1);
// // khanhltp.study()

// // Bài tập 3: Sử dụng Interface
// // Tạo một interface Shape với các phương thức như area() và perimeter().
// // Tạo lớp Circle và lớp Rectangle thực hiện interface Shape.

// interface Shape {
//     getArea(): number;
//     getPerimeter(): number;
// }

// class Circle implements Shape {
//     radius: number;

//     constructor(radious: number) {
//         this.radius = radious;
//     }
//     getArea(): number {
//         return Math.PI * this.radius * this.radius
//     }
//     getPerimeter(): number {
//         return Math.PI * this.radius * 2
//     }
// }

// class Retangle implements Shape {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
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

// // let hinhtron = new Circle (10);
// // console.log(hinhtron)
// // console.log(hinhtron.getArea());
// // console.log(hinhtron.getPerimeter());

// // let hinhchunhat = new Retangle(5, 10);
// // console.log(hinhchunhat.getArea());
// // console.log(hinhchunhat.getPerimeter());



// // Bài tập 4: Sử dụng Abstract Class
// // Tạo một abstract class Vehicle với các thuộc tính như make, model, và phương thức start.
// // Tạo các lớp con Car và Bicycle kế thừa từ lớp Vehicle và triển khai phương thức start.
// abstract class Vehicle {
//     make: string;
//     model: string;

//     constructor(make: string, model: string) {
//         this.make = make;
//         this.model = model;
//     }
//     abstract start(): void;
// }
// class Car extends Vehicle {
//     constructor(make: string, model: string) {
//         super(make, model);
//     }
//     start(): void {
//         console.log(`${this.model} starts`)
//     }
// }
// class Bicycle extends Vehicle {
//     constructor(make: string, model: string) {
//         super(make, model);
//     }
//     start(): void {
//         console.log(`${this.model} starts`)
//     }
// }
// // let oto = new Car ("make 1", "toyota");
// // oto.start()
// // let xedap = new Bicycle ("xedap1", "xedap2")
// // xedap.start()

// // Bài tập 6: Sử dụng Interface với Class
// // Tạo một interface Employee với các thuộc tính như name, salary, và phương thức work.
// // Tạo lớp Manager và lớp Developer thực hiện interface Employee.

// interface Employee {
//     // name: string;
//     // salary: number;
//     work(): void
// }
// class Manager implements Employee {
//     name: string;
//     salary: number;
//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }
//     work(): void {
//         console.log(`${this.name} works and get ${this.salary}`)
//     }
// }

// class Developer implements Employee {
//     name: string;
//     salary: number;
//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }
//     work(): void {
//         console.log(`${this.name} works and get ${this.salary}`)
//     }
// }

// // Bài tập 7: Sử dụng Class và Interface kết hợp
// // Tạo một lớp Product với các thuộc tính như name, price, và description.
// // Tạo một interface Discount với các phương thứ như discountPercentage applyDiscount.
// // Tạo lớp SaleProduct kế thừa từ Product và thực hiện Discount interface để áp dụng giảm giá.

// class Product {
//     name: string;
//     price: number;
//     description: string;

//     constructor(name: string, price: number, description: string) {
//         this.name = name;
//         this.price = price;
//         this.description = description;
//     }
// }

// interface Discount {
//     applyDiscount(discountPercentage: number): number;
// }
// class SaleProduct extends Product implements Discount {
//     price_after_sale: number;
//     constructor(name: string, price: number, description: string) {
//         super(name, price, description);
//         this.price_after_sale = 0;
//     }
//     applyDiscount(discountPercentage: number): number {
//         this.price_after_sale = this.price * (100 - discountPercentage);
//         return this.price_after_sale;
//     }
// }

// // Bài tập 8: Xây dựng hệ thống hóa đơn
// // Tạo lớp abstract Invoice để biểu diễn một hóa đơn với các sản phẩm, số lượng và giá.
// // Tạo lớp con PurchaseInvoice và SalesInvoice kế thừa class Invoice  để quản lý hóa đơn mua và hóa đơn bán.
// // Sử dụng interface để xác định phương thức tính tổng tiền cho mỗi loại hóa đơn.

// export class Product {
//     private id: number;
//     private name: string;
//     private price: number;
//     private quantity: number;
//     private description: string;
//     constructor (id: number, name: string, price: number, description: string, quantity: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.description = description;
//         this.quantity = quantity
//     }

// }