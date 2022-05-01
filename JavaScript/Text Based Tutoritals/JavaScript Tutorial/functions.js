function say(greeting) {
  greeting = "Hey";
  console.log(greeting + " Name");
}

return say();

// Wrote the above on my own after a bit of struggling

function compare (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  
  return 0;
}