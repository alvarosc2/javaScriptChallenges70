//@ts-check

import { flattenArray } from './flatten-array';

type NestedArray = (number | NestedArray)[];

let arr1: NestedArray = [1, [2, 3], [4, 5, [6]]];
let arr2: NestedArray = [[1, 2], [3, [4, 5]], [6, [7]]];

console.log(flattenArray(arr1));
console.log(flattenArray(arr2));