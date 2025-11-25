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

function maxSubarraySum2(arr: number[], k: number): number {
    let currentSum: number = 0;
    let maxSum: number = 0;

    for (let i: number = 0; i < k; i++) {
        maxSum += arr[i];
    }

    currentSum = maxSum;

    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
export { maxSubarraySum, maxSubarraySum2 }