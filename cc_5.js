// Task 1
let customer = {
name: "Natalie Rob",
age: 25,
email: "Natalie.R@email.com"
};

consol.log('Name: ${customer.name}');
consol.log('Age: ${customer.age}');
consol.log('Email: ${customer.email}');

// Task 2
let order = {
  orderID: 12345,
  totalAmount: 150,
  status: "Processing",

  displayOrder: function() {
    consol.log('Order ID: ${this.orderID}, Amount: $${this.totalAmount}, Status: ${this.status}');
  }

};

order.displayOrder();

// Task 3 
let cartItems = ["Blush", "Bronzer", "Highlighter"];

cartItems.push("Powder");
cartItems.pop();
cartItems.upshift("Mascara");
cartItems.shift();

consol.log("Updated Cart Items:", cartItems);
