function maxSubarraySum(arr: number[], k: number): number {
    let maxSum = 0;
    let tempVar = 0;

    for (let i = 0; i <= arr.length - k; i++) {
        for (let j = i; j < k + i; j++) {
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