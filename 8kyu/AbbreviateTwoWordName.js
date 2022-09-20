// The task is to convert a name, containing two words, into initials. The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  let result = name.split(' ');
  return result[0].toUpperCase().slice(0, 1) + "." + result[1].toUpperCase().slice(0, 1);
}