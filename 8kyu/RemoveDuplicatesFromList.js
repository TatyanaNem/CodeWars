// The task is to return an array of unique numbers from the given array.

function distinct(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}

// The alternative solution of the task using Set
function distinct(a) {
  return Array.from(new Set(a));
}