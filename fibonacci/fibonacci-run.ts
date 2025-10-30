//@ts-check

import { fibonacci } from './fibonacci';

let num: number = 8;

for (let i = 8; i >= 0; i--) {
    console.log(i + "      " + fibonacci(num));
    num--;
}
