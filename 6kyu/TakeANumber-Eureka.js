// The task is to create a function that finds out numbers, whose sum of digits, raised to the consecutive powers, give the same number.
// For exapmle, 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
  let result = [];
  let sum;
  for (let i = a; i < b; i++) {
    let num = Array.from(String(i)).map(i => Number(i));
    sum = 0;
    for (let j = 0; j < num.length; j++) {
      sum += Math.pow(num[j], (j + 1));
    }
    if (i === sum) result.push(i);
  }
  return result;
}