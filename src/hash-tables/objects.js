// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
  // Create an object to store the complement of each element along with its index
  const numObj = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    // Check if the complement is already in the object
    if (numObj[complement] !== undefined) {
      // Return the indices of the two numbers that add up to the target
      return [numObj[complement], i]
    }

    // Store the current number and its index in the object
    numObj[num] = i
  }

  // If no solution is found, return an empty array or handle it as needed
  return []
}
