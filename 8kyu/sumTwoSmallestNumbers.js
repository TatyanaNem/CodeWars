// The task is to return a sum of the two lowest positive numbers from the given array (minimum 4 numbers)

function sumTwoSmallestNumbers(numbers) {
  let newNumbersArray = numbers.sort((a, b) => a - b);
  return newNumbersArray[0] + newNumbersArray[1];
}