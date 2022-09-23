// The task is to create a function that turns a string into a Mexican Wave. You are given a string, and must return an array like 
// **************** wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] ***********************

function wave(str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    array.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return array;
}