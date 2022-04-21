/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * 
 * @param {number[]} height
 * @return {number}
 */

 const maxArea = function(height) {
    // declare variable result
    // declare two pointers for each end of the array
    // declare max volume variables
    
    // iterate thru array while left < right
        // check if left height < right height
            // if left height * right pointer greater than result
                // then reassign result
            // then increment left pointer
        // else if right height < left height
            // if right height * left pointer greater than result
                // then reassign result
            // increment right pointer
    // return result
    
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] * (right - left) > result) {
                result = height[left] * (right - left)
            }
            left += 1
        } else {
            if(height[right] * (right - left) > result) {
                result = height[right] * (right - left)
            }
            right -= 1
        }
    }
            
    return result
};