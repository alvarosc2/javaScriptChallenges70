/*
Quadratic time O(n^2)

Quadratic time means that the time required to complete
a function is proportional to the square of the input
data set.
*/

//Nested loops execute in quadratic time

function sumArray(arr) {
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
    }

    return sum + sum2;
}

export { sumArray }