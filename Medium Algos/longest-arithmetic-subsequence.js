/**
 * Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.
 * Recall that a subsequence of an array nums is a list nums[i1], nums[i2], ..., nums[ik] with 0 <= i1 < i2 < ... < ik <= nums.length - 1, and that a sequence seq is arithmetic if seq[i+1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
 const longestArithSeqLength = function(nums) {
    // check if array length is greater than two
    if(nums.length < 3) return nums.length
    // declare array of maps with [difference: count]
    // declare variable for output
    const dp = [];
    let length = 0;
    for(let i = 0; i < nums.length; i++) {
        const newMap = new Map()
        dp.push(newMap.set(0,1))
    }
    
    // nested loop to iterate through array nums and get difference between each array position 
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            let diff = nums[j] - nums[i]
            // check to see if the difference exists in our map and assign a value of 2 and assign the max 
            if(dp[j].has(diff)) {
                // 
                dp[i].set(diff, dp[j].get(diff) + 1)
                length = Math.max(length, dp[i].get(diff))
            } else {
                // if it is in our map then we want to increment the count by one and check to see the max value of the count and reassign it
                dp[i].set(diff, 2)
                length = Math.max(length, 2)
            }
        }
    }
    
    return length
};