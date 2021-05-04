export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "yoyo", price: 4.99 },
    { name: "slinky", price: 3.89 },
    { name: "marbles", price: 2.76 }
];

export function calcAverageProductPrice(products: Product[]): number {
    let sum: number = 0;

    if (products.length !== 0) {
        products.forEach(function (product) {
            sum += product.price;
        })
        return sum / products.length;
    }

    return 0;
}