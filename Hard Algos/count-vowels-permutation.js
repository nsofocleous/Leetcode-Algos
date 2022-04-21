/**
 * Given an integer n, your task is to count how many strings of length n can be formed under the following rules:
 * Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
 * Each vowel 'a' may only be followed by an 'e'.
 * Each vowel 'e' may only be followed by an 'a' or an 'i'.
 * Each vowel 'i' may not be followed by another 'i'.
 * Each vowel 'o' may only be followed by an 'i' or a 'u'.
 * Each vowel 'u' may only be followed by an 'a'.
 * Since the answer may be too large, return it modulo 10^9 + 7.
 * 
 * 
 * @param {number} n
 * @return {number}
 */
 const countVowelPermutation = function(n) {
    const modValue = (1e9 + 7);

    // create 5 arrays for each vowel and make array n length and fill with ones since all permutations start at length one
    const aPerm = new Array(n).fill(1)
    const ePerm = new Array(n).fill(1)
    const iPerm = new Array(n).fill(1)
    const oPerm = new Array(n).fill(1)
    const uPerm = new Array(n).fill(1)
    // console.log(aPerm)
    
    for(let i = 1; i < n; i++) {
        aPerm[i] = (ePerm[i - 1] + iPerm[i - 1] + uPerm[i - 1]) % modValue
        ePerm[i] = (aPerm[i - 1] + iPerm[i - 1]) % modValue
        iPerm[i] = (oPerm[i - 1] + ePerm[i - 1]) % modValue
        oPerm[i] = (iPerm[i - 1]) % modValue
        uPerm[i] = (oPerm[i - 1] + iPerm[i - 1]) % modValue
        // console.log(aPerm)
    }
    console.log(aPerm)
    console.log(ePerm)
    console.log(iPerm)
    console.log(oPerm)
    console.log(uPerm)
    
    let result = 0;
    result = (aPerm[n - 1] + ePerm[n - 1] + iPerm[n - 1] + oPerm[n - 1] + uPerm[n - 1]) % modValue
    
    return result
};