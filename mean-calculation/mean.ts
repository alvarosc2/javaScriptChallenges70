function mean1(arr: number[]): number {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

const mean2 = (arr: number[]) => arr.reduce((prev, current) => prev + current) / arr.length;

export { mean1, mean2 }