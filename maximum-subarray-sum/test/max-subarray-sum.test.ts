import { maxSubarraySum } from '../max-subarray-sum';

/* 10 test cases covering:
- Basic case: Standard positive numbers
- Negative numbers: Array with mixed negative values
- Edge cases: When k equals array length, k is 1
- All negative numbers: Tests the function's behavior (returns 0)
- Larger subarrays: More complex scenarios
- Arrays with zeros: Mixed with other values
- Mixed positive/negative: Real-world scenarios
- Small arrays: Two-element array
- Duplicate values: Arrays with repeated numbers
*/

describe('maxSubarraySum', () => {
    test('should return correct max sum for basic case', () => {
        const arr = [1, 2, 3, 4, 5];
        const k = 3;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(12); // [3, 4, 5] = 12
    });

    test('should handle array with negative numbers', () => {
        const arr = [2, -1, 5, 1, 3];
        const k = 2;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(6); // [5, 1] = 6
    });

    test('should work when k equals array length', () => {
        const arr = [1, 2, 3, 4];
        const k = 4;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(10); // [1, 2, 3, 4] = 10
    });

    test('should work when k is 1', () => {
        const arr = [3, 1, 4, 1, 5, 9];
        const k = 1;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(9); // [9] = 9
    });

    test('should handle all negative numbers', () => {
        const arr = [-5, -2, -8, -1, -4];
        const k = 2;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(0); // Function returns 0 when max is negative
    });

    test('should return correct sum for larger subarray', () => {
        const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        const k = 4;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(39); // [4, 2, 10, 23] = 39
    });

    test('should handle array with zeros', () => {
        const arr = [0, 0, 5, 0, 10];
        const k = 2;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(10); // [0, 10] = 10
    });

    test('should work with mixed positive and negative numbers', () => {
        const arr = [10, -5, 3, 7, -2, 8];
        const k = 3;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(13); // [7, -2, 8] = 13
    });

    test('should handle two-element array with k=2', () => {
        const arr = [5, 10];
        const k = 2;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(15); // [5, 10] = 15
    });

    test('should return correct result for array with duplicate values', () => {
        const arr = [3, 3, 3, 3, 3];
        const k = 2;
        const result = maxSubarraySum(arr, k);

        expect(result).toBe(6); // [3, 3] = 6
    });
});
