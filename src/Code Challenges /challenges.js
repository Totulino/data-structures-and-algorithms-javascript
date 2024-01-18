// // Palindrome question

// const isPalindrome = function (x) {
//   let reversedNumber = 0
//   let originalNumber = x

//   while (x > 0) {
//     const digit = x % 10
//     reversedNumber = reversedNumber * 10 + digit
//     x = Math.floor(x / 10)
//   }

//   if (reversedNumber === originalNumber) {
//     console.log("It's a palindrome")
//   } else {
//     console.log("It's not a palindrome")
//   }
// }

// // another way of doing it
// const isPalindromeTwo = function (x) {
//   const strX = x.toString()
//   let reversedString = ''
//   // Iterate through each character in the string in reverse order
//   for (let i = strX.length - 1; i >= 0; i--) {
//     reversedString += strX[i]
//   }
//   return strX === reversedString
// }

// //Dynamic Programing climbing stairs

// const climbStairs = function (n) {
//   // Base case
//   if (n <= 1) return 1
//   let oneBefore = 1
//   let twoBefore = 1
//   let total = 0
//   // Fill the array using dynamic programming
//   for (let i = 2; i <= n; i++) {
//     total = oneBefore + twoBefore
//     twoBefore = oneBefore
//     oneBefore = total
//   }
//   // Return the result for n
//   return total
// }

// // Time Complexity: O(n)
// // Space Complexity: O(1)

// function socksmatching(socks) {
//   let count = 0

//   let colour = {}
//   //loop through socks, for each sock push to that corresponding sock variable
//   //if exists if doesnt exist create variable and push it to that
//   for (const sock of socks) {
//     //if sock colour doesn't exist add key this sock colour
//     //if sock colour does exist add to exisitng key
//     //if value of sock colour key is 2 count++ and reset to 0

//     if (!colour[sock]) {
//       colour[sock] = 1
//     } else {
//       count++
//       colour[sock] = 0
//     }
//   }

//   return count
// }

function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(6))
console.log(fib(3))
console.log(fib(40))
