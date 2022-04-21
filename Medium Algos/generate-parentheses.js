/**
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = function(n) {
    // declare an empty array
    
    // declare the backtracking function and pass in the empty array, open parens starting at zero and a close too
        // if array length is double the argument and then join the array and push it to the array
        // if the open var is lesser than n
            // then recursive call on backtrack passing in the array, open + 1, and close variables
            // then pop the latest value to backtrack to previous parens combo
        // if the close var is lesser than the open var
            // then recursive call on backtrack passing in the array, open, close + 1 variables
            // then pop the latest value to backtrack to previous parens combo
    // invoke the function backtrack
    // return the declared array of parens combos
    
    const result = [];
    
    function backtrack(parensCombo = [], open = 0, close = 0) {
        if(parensCombo.length === 2 * n) {
            return result.push(parensCombo.join(''))
        }
        if(open < n) {
            parensCombo.push('(')
            backtrack(parensCombo, open + 1, close)
            parensCombo.pop()
        }
        if(close < open) {
            parensCombo.push(')')
            backtrack(parensCombo, open, close + 1)
            parensCombo.pop()
        }
    }
    backtrack()
    return result
};