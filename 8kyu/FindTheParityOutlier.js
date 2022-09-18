// The task is to find out an "outlier" number from the array of even or the array of odd integers. So if the array is odd, the required number is even, and vice versa.

// My first solution ---------------- according to the tests, this solution is faster
function findOutlier(integers) {
  let arrayOdd = [];
  let arrayEven = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? arrayEven.push(integers[i]) : arrayOdd.push(integers[i]);
  }
  if (arrayOdd.length === 1) {
    return arrayOdd[0];
  }
  return arrayEven[0];
}

// My second solution
function findOutlier(integers) {
  let arrayEven = integers.filter(num => num % 2 === 0);
  let arrayOdd = integers.filter(num => num % 2 !== 0);
  return arrayEven.length === 1 ? arrayEven[0] : arrayOdd[0];
}

