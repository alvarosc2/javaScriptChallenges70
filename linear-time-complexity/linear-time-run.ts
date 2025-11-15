//@ts-check

import { sumArray } from './linear-time';

const arr = Array.from({ length: 100 }, (_, index) => index + 1);

const start = performance.now();
sumArray(arr);
const end = performance.now();

const elapsed = end - start;
console.log(elapsed);