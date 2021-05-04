import { Product } from "../src/products";

interface InventoryItem extends Product {
    quantity: number;
}

const inventory: InventoryItem[] = [
    { name: "motor", price: 10.00, quantity: 10 },
    { name: "sensor", price: 12.50, quantity: 4 },
    { name: "LED", price: 1.00, quantity: 20 }
];

export function calcInventoryValue(inventory: InventoryItem[]): number {
    let sum: number = 0;

    if (inventory.length !== 0) {
        inventory.forEach(function (item) {
            sum += inventory.price * inventory.quantity;
        })
        return sum;
    }
    return 0;
}

console.log(calcInventoryValue(inventory));