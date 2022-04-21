/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 * 
 * @param {number[]} height
 * @return {number}
 */

// declare pointers left and right at start and end of array
// declare max values for left and right pointers

// iterate through the height array 
    // check if the left height is smaller than the right height
        // then check if the current position in height array is greater than the previous height value
            // reassign height if greater
        // else take the left max height and subtract from current height and assign to answer

        // advance the left pointer

    // otherwise do 
        // check if the right height is smaller than the right max 
            // reassign the height if current is greater
        // else take the right max height and subtract from current and assign to answer

        // advance the right pointer


const trap = function(height) {
    let left = 0;
    let result = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] > leftMax) {
                leftMax = height[left]
            } else {
                result += leftMax - height[left]
            }
            left += 1;
        } else {
            if(height[right] > rightMax) {
                rightMax = height[right]
            } else {
                result += rightMax - height[right]
            }
            right -= 1;
        }
    }
        
    return result
};