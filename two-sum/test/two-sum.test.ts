import { twoSum } from '../two-sum';

describe('twoSum', () => {
    test('should return correct indices for basic case', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);

        expect(result).toEqual([0, 1]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should return correct indices for different order', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);

        expect(result).toEqual([1, 2]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle negative numbers', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);

        expect(result).toEqual([2, 4]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle mixed positive and negative numbers', () => {
        const nums = [-3, 4, 3, 90];
        const target = 0;
        const result = twoSum(nums, target);

        expect(result).toEqual([0, 2]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle duplicate numbers correctly', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);

        expect(result).toEqual([0, 1]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should work with larger arrays', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const target = 19;
        const result = twoSum(nums, target);

        expect(result).toEqual([8, 9]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle zero values', () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        const result = twoSum(nums, target);

        expect(result).toEqual([0, 3]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });
});