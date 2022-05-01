/* Rewrite this to perform the same without if in a single line. Make two variants of checkAge using a ? and ||.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

*/

function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?");
}

function checkAge(age) {
    return (age > 18) || confirm("Did your parents allow you?");
}