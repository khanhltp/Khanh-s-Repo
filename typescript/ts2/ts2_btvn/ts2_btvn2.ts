// class Product {
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
//     public getPrice();
//     public getQuantity();

// }
// export abstract class Invoice {
//     protected products: Product[];
//     protected customer_name: String;
//     protected created_at: String;
//     constructor(products: Product[], customer_name: String, created_at: String) {
//         this.products = products;
//         this.customer_name = customer_name;
//         this.created_at = created_at;
//     }
// }

// interface Sum {
//     getTotal(): number;
// }

// class PurchaseInvoice extends Invoice implements Sum {
//     getTotal(): number {
//         let total = 0;
//         for (let product of this.products) {
//             total += product.getPrice() * product.getQuantity()
//         }
//         return total
//     }

// }

// class SalesInvoice extends Invoice implements Sum {
//     getTotal(): number {
//         throw new Error("Method not implemented.");
//     }

// }

// class Program {
//     static run() {
//         let invoices: Invoice[] = [];
//         invoices.push(
//             new SalesInvoice(
//                 [
//                     new Product("iphone1", 10000000, "Description1", 1),
//                     new Product("iphone2", 1000000, "Description1", 2),
//                 ],
//                 "VietAnh",
//                 "08/05/2024"
//             ),
//         );
//         invoices.push(
//             new SalesInvoice(
//                 [
//                     new Product("iphone1", 10000000, "Description1", 1),
//                     new Product("iphone2", 1000000, "Description1", 2),
//                 ],
//                 "VietAnh",
//                 "08/05/2024"
//             ),
//         );
//         invoices.push(
//             new PurchaseInvoice(
//                 [
//                     new Product("iphone1", 10000000, "Description1", 1),
//                     new Product("iphone2", 1000000, "Description1", 2),
//                 ],
//                 "VietAnh",
//                 "08/05/2024"
//             ),
//         );
//         let profit = 0;
//         for (let invoice of invoices) {
//             if ( invoice instanceof SalesInvoice) {
//                 profit += invoice.getTotal();
//             }
//             if {
//                 profit -= invoice.getTotal();
//             }
//         }
//         console.log(`Profit: ${this.profit}`)
// }

// Program.run() 