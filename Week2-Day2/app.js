import { calculateTotal, formatInvoice } from "./cartUtils.js";
const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 }
];
const total = calculateTotal(cart);
const invoiceDetails = formatInvoice(cart);
console.log(`
========= SHOPPING CART INVOICE =========
${invoiceDetails}

------------------------------------------
Total Cart Value: $${total}
==========================================
`);
