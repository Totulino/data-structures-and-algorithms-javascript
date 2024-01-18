function bubbleSort(arr) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}
// Testing
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, middle)
  const rightHalf = arr.slice(middle)

  // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf)
  const sortedRight = mergeSort(rightHalf)

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // Add any remaining elements from the left and right arrays
  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }

  return result
}

// Testing
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedNumbers = mergeSort(numbers);
// console.log(sortedNumbers);

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedNumbers = quickSort(numbers)
// console.log(sortedNumbers);
