//@ts-check

import { accessElement } from './O1';

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

const mean = arrElapsed.reduce((prev, current) => prev + current) / arrElapsed.length;

console.log(mean);