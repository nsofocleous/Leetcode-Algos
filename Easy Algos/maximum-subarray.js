/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * A subarray is a contiguous part of an array.
 * 
 * https://leetcode.com/problems/maximum-subarray/
 */

 const maxSubArray = function(nums) {
    let currSum = nums[0]
    let maxSum = currSum
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
};