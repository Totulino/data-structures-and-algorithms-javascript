// Palindrome question

const isPalindrome = function (x) {
  let sum = 0
  let num = x

  while (num > 0) {
    const digit = num % 10
    sum = sum * 10 + digit
    num = ~~(num / 10)
  }
  if (sum === x) {
    console.log("it's a palindrome")
  } else {
    console.log('its not a palindrome')
  }
}

isPalindrome(1123443211)
