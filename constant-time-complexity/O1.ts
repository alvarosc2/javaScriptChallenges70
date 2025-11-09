/*
    Example of constant time O(1)

    Constant time means that the time to run a function is the same regardless of the 
    size of the input data set.
*/

function accessElement(arr: number[], index: number): number {
    return arr[index];
}

export { accessElement }