import { twoSum } from './two-sum';

// Example 1: Basic case
console.log('Example 1: nums = [2, 7, 11, 15], target = 9');
const result1 = twoSum([2, 7, 11, 15], 9);
console.log('Output:', result1);
console.log('Explanation: nums[0] + nums[1] = 2 + 7 = 9\n');

// Example 2: Different order
console.log('Example 2: nums = [3, 2, 4], target = 6');
const result2 = twoSum([3, 2, 4], 6);
console.log('Output:', result2);
console.log('Explanation: nums[1] + nums[2] = 2 + 4 = 6\n');

// Example 3: Duplicate numbers
console.log('Example 3: nums = [3, 3], target = 6');
const result3 = twoSum([3, 3], 6);
console.log('Output:', result3);
console.log('Explanation: nums[0] + nums[1] = 3 + 3 = 6\n');

// Example 4: Negative numbers
console.log('Example 4: nums = [-1, -2, -3, -4, -5], target = -8');
const result4 = twoSum([-1, -2, -3, -4, -5], -8);
console.log('Output:', result4);
console.log('Explanation: nums[2] + nums[4] = -3 + (-5) = -8');