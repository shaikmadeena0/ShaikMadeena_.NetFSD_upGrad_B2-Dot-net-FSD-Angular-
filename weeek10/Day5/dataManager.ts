// 1. Generic Function
function getFirstElement<T>(items: T[]): T {
    return items[0];
}

// 2. Generic Interface
interface Repository<T> {
    add(item: T): void;
    getAll(): T[];
}

// 3. Generic Class
class DataManager<T> implements Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// 4. Models

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    title: string;
}

// 5. Use Case Implementation

// User DataManager
const userManager = new DataManager<User>();

userManager.add({ id: 1, name: "Madee" });
userManager.add({ id: 2, name: "Shine" });

// Product DataManager
const productManager = new DataManager<Product>();

productManager.add({ id: 101, title: "Laptop" });
productManager.add({ id: 102, title: "Mobile" });

// 6. Testing

console.log("Users:", userManager.getAll());
console.log("Products:", productManager.getAll());

// Generic Function Test
const numbers = [10, 20, 30];
console.log("First Number:", getFirstElement<number>(numbers));

const names = ["A", "B", "C"];
console.log("First Name:", getFirstElement<string>(names));
