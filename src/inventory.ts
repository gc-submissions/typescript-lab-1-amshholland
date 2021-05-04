import { Product } from "../src/products";

interface InventoryItem {
    product: Product[],
    quantity: number
};

const inventory: InventoryItem[] = [
    { product: { product.name: "motor", price: 10.00 }, quantity: 10 },
    { product: name: "sensor", product.price: 12.50, quantity: 4 },
    { product: name: "LED", product.price: 1.00, quantity: 20 }
];

export function calcInventoryValue(inventory: InventoryItem[]): number {
    let sum: number = 0;

    if (InventoryItem.length !== 0) {
        InventoryItem.forEach(function (item) {
            sum += InventoryItem.price * InventoryItem.quantity;
        })
        return sum / InventoryItem.length;
    }

    return 0;
}

console.log(calcInventoryValue(inventory));