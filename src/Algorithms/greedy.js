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
