//@ts-check

import { accessElement } from './O1';
import { mean2 } from '../mean-calculation/mean'

let arrayOfNums = [];

for (let i = 0; i < 10000; i++) {
    arrayOfNums.push(i);
}

let arrElapsed = [];

for (let i = 0; i < 10000; i++) {
    const start = performance.now();
    accessElement(arrayOfNums, 5000);
    const end = performance.now();

    const elapsed = end - start;
    arrElapsed.push(elapsed);
}

console.log(mean2(arrElapsed));