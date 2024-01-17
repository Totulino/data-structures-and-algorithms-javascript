//Algorithm that finds a solution to problems in the shortest time possible
//it picks the path that seems optimal at the moment wihout regards for the overall optimization

function findContentChildren(g, s) {
  let contentChildren = 0
  let i = 0 // Pointer for children
  let j = 0 // Pointer for cookies

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      // If the current cookie is big enough for the current child, assign it
      contentChildren++
      i++
    }
    j++ // Move to the next cookie
  }

  return contentChildren
}

// Example usage:
const g1 = [1, 2, 3]
const s1 = [1, 1]
console.log(findContentChildren(g1, s1)) // Output: 1

const g2 = [1, 2]
const s2 = [1, 2, 3]
console.log(findContentChildren(g2, s2)) // Output: 2

const maxArea = function (height) {
  let maxWater = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    // Calculate the width between the two pointers
    const width = right - left

    // Calculate the height of the container (minimum height between the two pointers)
    const containerHeight = Math.min(height[left], height[right])

    // Calculate the water contained in the current container
    const currentWater = width * containerHeight

    // Update maxWater if the current container holds more water
    maxWater = Math.max(maxWater, currentWater)

    // Move the pointers inward, considering the next possible container
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height)) // Output: 49
