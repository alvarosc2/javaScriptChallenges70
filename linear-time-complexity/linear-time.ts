/*
    Example of linear time O(n)

    Constant time means that the time to run a function is the same regardless of the 
    size of the input data set.
*/

function sumArray(arr: number[]): number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

export { sumArray }