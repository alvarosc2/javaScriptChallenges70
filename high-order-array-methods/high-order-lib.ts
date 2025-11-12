const doubleNumbers = (arr: number[]): number[] => {
    return arr.map(num => 2 * num);
}

const evenNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0);
}

const oddNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 != 0);
}

const sum = (arr: number[]): number => {
    return arr.reduce((prev, actual) => prev + actual);
}

const mean = (arr: number[]): number => {
    return arr.reduce((prev, actual) => prev + actual) / arr.length;
}

export {
    doubleNumbers,
    evenNumbers,
    oddNumbers,
    sum,
    mean
}