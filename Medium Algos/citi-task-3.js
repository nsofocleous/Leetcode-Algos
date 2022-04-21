// Citi Task 3

//N = number of cities from 1 - N
//A and B are same length


const solution = (A, B, N) => {
    const roadMap = new Map()
    
    for(let i = 1; i < N + 1; i++) {
      roadMap[i] = new Set()
    }
    // console.log(roadMap)
    
    for(let i = 0; i < A.length; i++){
      roadMap[A[i]].add(B[i])
      roadMap[B[i]].add(A[i])
    //   console.log(roadMap)
    }
    console.log(roadMap)
  
    let maxConnections = 0
    for(let i = 1; i < N + 1; i++) {
      for(let j = i + 1; j < N + 1; j++) {
        
        console.log(i)
        
        // check if there is a connection or not
        if(!roadMap[i].has(j)) {
          continue;
        }
        
        // 
        let connectionSum = roadMap[i].size + roadMap[j].size;
        if(roadMap[j].has(i)) {
          connectionSum--
        }
        
        maxConnections = Math.max(maxConnections, connectionSum)
      }
    }
    
    return maxConnections
}
  
console.log(solution([1, 2, 3, 3], [2, 3, 1, 4], 4));
// console.log(solution([1, 2, 4, 5], [2, 3, 5, 6], 6));