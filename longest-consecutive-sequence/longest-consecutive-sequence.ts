function longestConsecutiveSequence(nums: number[]): number {
    const numset = new Set(nums);
    let longestSequence = 0;

    for (const num of numset) {
        if (!numset.has(num - 1)) {
            let currentNum = num;
            let currentSequence = 1;

            while (numset.has(currentNum + 1)) {
                currentNum++;
                currentSequence++;
            }

            longestSequence = Math.max(longestSequence, currentSequence);
        }
    }

    return longestSequence;
}

export { longestConsecutiveSequence }