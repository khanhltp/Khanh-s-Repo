"use strict";
// // 1.
// // a. Viết một ứng dụng quản lý danh bạ, trong đó mỗi liên hệ có thể có số điện thoại hoặc địa chỉ email. Sử dụng Union Types cho kiểu dữ liệu của liên hệ.
// type Contact = { name: string; contact: string | number }[];
// let contacts: Contact = [];
// function addContact(name: string, contact: string | number) {
//     contacts.push({ name, contact });
// }
// // addContact("khanhltp", "khanhltp@gmail.com")
// // addContact("khanhzm", 123456789)
// // console.log(contacts)
// // b. Xây dựng một ứng dụng tính toán tổng của các số nhập từ người dùng, nhưng cho phép họ nhập số hoặc chuỗi
// function getTotal(...numbers: (number | string)[]): number {
//     let total: number = 0;
//     for (let num of numbers) {
//         if (typeof (num) == "string") {
//             total += parseInt(num);
//         } else {
//             total += num;
//         }
//     }
//     return total
// }
// // console.log(getTotal(3, "5", 5))
// // // 2. Array:
// // // a. Viết một ứng dụng quản lý danh sách công việc cần hoàn thành. Hãy cho phép người dùng thêm công việc, đánh dấu công việc đã hoàn thành và xóa công việc khỏi danh sách sử dụng mảng.
// type Task = { id: number; title: string; status?: string }[];
// let tasks: Task = [];
// function addTask(id: number, title: string) {
//     tasks.push({ id, title });
// }
// function markDone(id: number) {
//     for (let task of tasks) {
//         if (task.id == id) {
//             task.status = "Done";
//         }
//     }
// }
// function removeTask(id: number) {
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].id == id) {
//             tasks.splice(i, 1);
//         }
//     }
// }
// // addTask(1, "task1")
// // console.log(tasks)
// // markDone(1)
// // console.log(tasks)
// // removeTask(1)
// // console.log(tasks)
// // b. Tạo một ứng dụng quản lý sản phẩm, trong đó mỗi sản phẩm có tên, giá và số lượng tồn kho. Hãy tính tổng giá trị của tất cả sản phẩm trong danh sách.
// type Product = { name: string; price: number; quantity: number }[];
// let products: Product = [];
// function sumPrice() {
//     let total: number = 0;
//     for (let product of products) {
//         if (product.quantity > 0) {
//             total += product.price * product.quantity;
//         }
//     }
//     return total
// }
// function addProduct(name: string, price: number, quantity: number) {
//     products.push({ name, price, quantity });
// }
// // addContact("product1", 100, 1);
// // addContact("product2", 200, 2);
// // addContact("product3", 300, 1);
// // addContact("product4", 100, 0);
// // console.log(products)
// // // 3. Spread Operator:
// // // a. Tạo một mảng chứa danh sách các sản phẩm. Sau đó, sao chép danh sách sản phẩm và thêm một sản phẩm mới vào danh sách sao chép.
// function copy_and_add_new(name: string, price: number, quantity: number) {
//     let new_products = [...products];
//     new_products.push({ name, price, quantity });
//     return new_products
// }
// // // 4. Rest Parameter:
// // // a. Viết một hàm tính tổng của một số lượng không xác định các số nguyên được truyền vào hàm sử dụng Rest Parameter.
// function sum(...numbers: number[]): number {
//     let total: number = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total
// }
// // console.log(sum (1,10,20))
// // // b. Xây dựng một hàm lấy một danh sách các môn học và in ra tất cả môn học đã được đăng ký trong một học kỳ.
// // 5. Enum:
// // a. Định nghĩa một Enum để biểu thị các loại hình học (Hình tròn, Hình vuông, Hình tam giác) và sử dụng nó để xác định kiểu hình học trong ứng dụng.
// enum Loai_hinh_hoc {
//     Hinh_tron,
//     Hinh_vuong,
//     Hinh_tam_giac
// }
// let kieu_hinh_hoc_trong_ung_dung: Loai_hinh_hoc = Loai_hinh_hoc.Hinh_tron;
// console.log(`Kiểu hình học trong ứng dụng là: ${Loai_hinh_hoc[kieu_hinh_hoc_trong_ung_dung]}`)
// // b. Tạo một ứng dụng quản lý sách, trong đó bạn sử dụng Enum để xác định trạng thái của sách (Còn hàng, Hết hàng, Đặt hàng).
// class Book {
//     title: string;
//     author: string;
//     status: string;
//     constructor(title: string, author: string, status: string) {
//         this.title = title;
//         this.author = author;
//         this.status = status;
//     }
// }
// enum Status {
//     Available,
//     Soldout,
//     Order
// }
// // class Main {
// //     static run() {
// //         let books: Book[] = [];
// //         books.push(new Book ("Tấm vải đỏ", "Việt Anh", Status.Available));
// //         books.push(new Book ("Tấm vải đỏ", "Việt Anh", Status.Available));
// //     }
// // }
// // let book_status: Status = Status.Available;
// // 6. Function:
// // a. Viết một hàm tính lợi nhuận dựa trên doanh số bán hàng và chi phí.
// function tinh_loi_nhuan(doanh_so: number, chi_phi: number): number {
//     let loi_nhuan = 0;
//     loi_nhuan = doanh_so - chi_phi;
//     return loi_nhuan
// }
// // b. Tạo một hàm chấp nhận một mảng số nguyên và sử dụng callback để tìm phần tử lớn nhất hoặc nhỏ nhất trong mảng.
// // !min = array.shift(): mảng mà rỗng thì sẽ trả về true 
// // function getMax (numbers: number[]): number {
// //     numbers.sort((a, b) => a - b);
// //     return numbers[0]
// // }
// // function getMin (numbers: number[]): number {
// //     numbers.sort((a, b) => b - a);
// //     return numbers[0]
// // }
// // function getMaxMin (numbers: number[], callback): number {
// //     let output: number = numbers[0];
// //     for (let i in numbers) {
// //         if (callback(numbers[i], output)) {
// //             output = numbers[i];
// //         }
// //     }
// //     return output
// // }
// // console.log(getMaxMin([3,5,7,1], getMax));
// // console.log(getMaxMin([3,5,7,1], getMin));
// // 7. Hệ thống xếp hạng:
// // Xây dựng một hệ thống xếp hạng cho người dùng dựa trên điểm số. Hãy tạo một hàm tính điểm trung bình và xếp hạng người dùng theo điểm số
// type User = { name: string, scores: number[] };
// function calculateAvg(user: User): number {
//     let sum = user.scores.reduce((total, score) => total + score, 0);
//     return sum / user.scores.length;
// }
// function rankUsers(user: User[]): User[] {
//     return user.sort((a, b) => calculateAvg(b) - calculateAvg(a));
// }
// let users1: User[] = [
//     { name: "Alice", scores: [90, 85, 88] },
//     { name: "Bob", scores: [78, 92, 97] },
//     { name: "Charlie", scores: [90, 85, 88] }
// ]
// let users2: User[] = [
//     { name: "Alice", scores: [9, 9, 9] },
//     { name: "Bob", scores: [1, 1, 1] },
//     { name: "Charlie", scores: [90, 85, 88] }
// ]
// // console.log(rankUsers(users2))
// // // 8. Hệ thống quản lý tài khoản người dùng:
// // // Xây dựng một hệ thống quản lý tài khoản người dùng với các chức năng đăng ký, đăng nhập, đổi mật khẩu, và xác minh tài khoản. Sử dụng hàm để xử lý các tác vụ này.
// type Accounts = { username: string; password: string }[];
// let accounts: Accounts = [];
// function register(username: string, password: string) {
//     for (let i in accounts) {
//         if (username == accounts[i].username) {
//             console.log("Đăng ký thất bại")
//         } else {
//             accounts.push({ username, password });
//             console.log(accounts)
//             console.log("Đăng ký thành công")
//         }
//     }
// }
// function login(username: string, password: string) {
//     for (let i in accounts) {
//         if (username == accounts[i].username && password == accounts[i].password) {
//             accounts.push({ username, password });
//             console.log("Đăng nhập thành công")
//         } else {
//             console.log("Đăng nhập thất bại")
//         }
//     }
// }
// function changePassword(current_password: string, new_password: string) {
//     if (new_password !== current_password) {
//         for (let i in accounts) {
//             if (current_password == accounts[i].password) {
//                 accounts[i].password = new_password;
//                 console.log("Đổi mật khẩu thành công")
//             }
//         }
//     }
// }
// // function verifyAccount (username: string, new_password:string) {
// //     for (let i in accounts) {
// //         if (username == accounts[i].username && new_password == accounts[i].password) {
// //             console.log("Xác thực thành công")
// //         } else {
// //             console.log("Xác thực thất bại")
// //         }
// //     }
// // }
// console.log(register("Khanhltp","abc123"))
// register("Khanh123","abc123")
// console.log(accounts)
