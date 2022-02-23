/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */

const isValid = function(s) {
    if (s.length % 2 !== 0) return false   
    const object = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stackArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stackArray.push(s[i]);
        } else {
            if (object[stackArray[stackArray.length - 1]] !== s[i]) {
                return false;
            } else {
                stackArray.pop();
            }
        }
    }
    return stackArray.length === 0;
};