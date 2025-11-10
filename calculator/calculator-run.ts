//@ts-check

import { calculator } from './calculator';

console.log(calculator(3, 5, '+'));
console.log(calculator(10, 8, '-'));
console.log(calculator(7, 3, '*'));
console.log(calculator(8, 2, '/'));

console.log(calculator(7, 0, '/'));
console.log(calculator(2, 2, '+*'));