export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestMountain = mountains[0];

    mountains.forEach(function (mountain) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
}
