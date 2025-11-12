//@ts-check

import { doubleNumbers, evenNumbers, oddNumbers, sum, mean } from './high-order-lib';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(doubleNumbers(numbers));
console.log(evenNumbers(numbers));
console.log(oddNumbers(numbers));
console.log(sum(numbers));
console.log(mean(numbers));