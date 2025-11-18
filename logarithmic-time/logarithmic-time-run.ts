//@ts-check

import { findPower } from './logarithmic-time';

const start = performance.now();
findPower(2, 1092);
const end = performance.now();

const elapsed = end - start;
console.log(elapsed);