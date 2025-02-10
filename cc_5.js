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

// Task 4

let prices = [100, 200, 300];

let discountedPrices = prices.map(price=> price * .9);

consol.log("Discounted Prices:", discountedPrices);

// Task 5 

let inventory = [10, 5, 0, 8, 0];

let availableProducts = inventory.filter(quantity => quantity > 0);

consol.log("Total Revenue:", totalrevenue);

// Task 6

let sales = [100, 200, 300, 400]

let totalrevenue = sales.reduce((acc, sale) => acc + sale, 0);

consol.log("Total Revenue:", totalrevenue);

// Task 7 

let customers = ["Hailey", "Ari", "Emma", "Amy"];

let locatedCustomer = customers.find(name => name === "Emma");

consol.log("Located Customer:", locatedCustomer);

// Task 8 

function calculateTax(amount, taxRate) {
  let tax = amount * taxRate;
  consol.log('Tax: $${tax}');
  return tax;
};

calculateTax(500, 0.06);

// task 9 

let applyDiscount = function(price, discount) {
  let discountedPrice = price - (price * discount);
  consol.log('Discounted Price: $${discountedPrice}');
  return discountedPrice;
};

applyDiscount(500, .10);
