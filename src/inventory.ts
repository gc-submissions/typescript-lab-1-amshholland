import { Product } from "../src/products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

export function calcInventoryValue(inventory: InventoryItem[]): number {
    let sum: number = 0;

    if (inventory.length !== 0) {
        inventory.forEach(function (item) {
            sum += item.product.price * item.quantity;
        })
        return sum;
    }
    return 0;
}

console.log(calcInventoryValue(inventory));