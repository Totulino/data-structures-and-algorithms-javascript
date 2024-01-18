const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n
  if (key in memo) return memo[key]
  // are the arguments  in the object
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

function canSum(targetSum, numbers) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSum(remainder, numbers) === true) {
      return true
    }
  }

  return false
}
