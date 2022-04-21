/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const frequencySort = function(nums) {
    // Create and build map of elements and number of occurrences
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        } 
    }
    // console.log(map)
    
    // sort the the keys by freq of which they appear
    // condition to check for numbers if frequency is the same, then compare actual elements
    nums.sort((a,b) => {
        return map[a] - map[b] || b-a
    });
    
    return nums
};