// The task is to create a function that checks that the N is divisible by two numbers x AND y, and according to this returns true or false

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}