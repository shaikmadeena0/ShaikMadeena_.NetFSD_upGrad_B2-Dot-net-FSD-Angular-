const userName: string = "Madee";
let age: number = 25;
const email: string = "madee@gmail.com";
const isSubscribed: boolean = true;

let country = "India";
let loginCount = 5;

age = age + 1;

const isEligibleForPremium = age > 18 && isSubscribed;

const userMessage = `Hello ${userName}, you are ${age} years old and your email is ${email}`;

console.log("User Name:", userName);
console.log("Age after increment:", age);
console.log("Email:", email);
console.log("Subscribed:", isSubscribed);
console.log("Country:", country);
console.log("Login Count:", loginCount);
console.log("Eligible for Premium:", isEligibleForPremium);
console.log("Message:", userMessage);
