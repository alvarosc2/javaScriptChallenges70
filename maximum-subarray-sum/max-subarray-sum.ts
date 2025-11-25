function maxSubarraySum(arr: number[], k: number): number {
    let maxSum: number = 0;
    let tempVar: number = 0;

    for (let i: number = 0; i <= arr.length - k; i++) {
        for (let j: number = i; j < k + i; j++) {
            tempVar += arr[j];
        }

        if (tempVar > maxSum) {
            maxSum = tempVar;
        }

        tempVar = 0;
    }

    return maxSum;
}

export { maxSubarraySum }