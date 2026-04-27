// 1. Function with Required Parameter
function getWelcomeMessage(name: string): string {
    return `Welcome ${name}!`;
}

// 2. Optional Parameter
function getUserInfo(name: string, age?: number): string {
    if (age !== undefined) {
        return `User ${name} is ${age} years old`;
    }
    return `User ${name} (age not provided)`;
}

// 3. Default Parameter
function getSubscriptionStatus(name: string, isSubscribed: boolean = false): string {
    return isSubscribed
        ? `${name} is subscribed`
        : `${name} is not subscribed`;
}

// 4. Function with Boolean Return Type
function isEligibleForPremium(age: number): boolean {
    return age > 18;
}

// 5. Arrow Function
const getAccountUpdate = (name: string): string => {
    return `Account updated successfully for ${name}`;
};

// 6. Lexical 'this' using Arrow Function
const notificationService = {
    appName: "MyAngularApp",

    sendNotification: (user: string): string => {
        // Arrow function uses lexical this
        return `Hello ${user}, welcome to ${notificationService.appName}`;
    }
};

// 7. Execution (Calling all functions)
console.log(getWelcomeMessage("Madee"));

console.log(getUserInfo("Madee", 25));
console.log(getUserInfo("Madee"));

console.log(getSubscriptionStatus("Madee", true));
console.log(getSubscriptionStatus("Madee"));

console.log("Eligible for Premium:", isEligibleForPremium(25));

console.log(getAccountUpdate("Madee"));

console.log(notificationService.sendNotification("Madee"));
