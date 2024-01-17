// Palindrome question

const isPalindrome = function (x) {
  let reversedNumber = 0
  let originalNumber = x

  while (x > 0) {
    const digit = x % 10
    reversedNumber = reversedNumber * 10 + digit
    x = Math.floor(x / 10)
  }

  if (reversedNumber === originalNumber) {
    console.log("It's a palindrome")
  } else {
    console.log("It's not a palindrome")
  }
}

// another way of doing it
const isPalindromeTwo = function (x) {
  const strX = x.toString()
  let reversedString = ''
  // Iterate through each character in the string in reverse order
  for (let i = strX.length - 1; i >= 0; i--) {
    reversedString += strX[i]
  }
  return strX === reversedString
}

//Dynamic Programing climbing stairs

const climbStairs = function (n) {
  // Base case
  if (n <= 1) return 1
  let oneBefore = 1
  let twoBefore = 1
  let total = 0
  // Fill the array using dynamic programming
  for (let i = 2; i <= n; i++) {
    total = oneBefore + twoBefore
    twoBefore = oneBefore
    oneBefore = total
  }
  // Return the result for n
  return total
}

// Time Complexity: O(n)
// Space Complexity: O(1)
