// The task is to find out if the given number is a Narcissistic Number. A Narcissistic Number is  a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.

function narcissistic(value) {
  let num = value.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Math.pow(parseInt(num[i]), num.length);
  }
  return sum === value ? true : false;
}