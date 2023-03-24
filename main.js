// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const example = [2, 7, 11, 15]



/////// first attempt //////////
function findTwo(arr, target) {
  let answer = [];
  arr.forEach((value, index) => {
    let goal = target - value;
    if (arr.includes(goal)) {                     ////this works except it has the ability to use the same index twice
      answer = [index, arr.indexOf(goal)];
    }
  })
  return answer;
}

////////// second attempt //////////
function whichTwo(arr, target) {
  let answer = [];
  for (let i = 0; answer.length < 2; i++) {
    let goal = target - arr[i];
    if (arr.includes(goal)) {  
      answer = [i, arr.indexOf(goal)];          /////same issue
    } 
  }                                            
  return answer;
}

// console.log(whichTwo([2, 4, 11, 3], 6))


/////// third attempt //////////////
function theTwo(arr, target) {
  // run a double loop checking the sum of each element with each other element 
  let answer = [];
  for (let i = 0; answer.length < 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {                   ////issue no longer. Feels good.
        return answer = [i, j];
      }
    }
  }
}

console.log(theTwo([3, 2, 4], 6))