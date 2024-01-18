//binary searc of an ascending array
const search = function (nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] === target) {
      return mid // Element found, return its index
    } else if (nums[mid] < target) {
      low = mid + 1 // Search in the right half
    } else {
      high = mid - 1 // Search in the left half
    }
  }
  return -1 // Element not found
}
