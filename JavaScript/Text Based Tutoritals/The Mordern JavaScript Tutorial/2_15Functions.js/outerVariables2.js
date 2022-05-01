// The function has full access to the outer variable. It can modify it as well.

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

// The outer variable is only used if there is no local one. If a same named variable is declared inside the dunction then it shadows the outer one. The code below uses the local userName, the outer one is ignored.

// let userName = "John";

function showMessage() {
    let userName = "Bob"; // declare a local variable
    
    let message = "Hello, " + userName; // Bob
    alert(message);
}

// The function will create and use it's own userName

showMessage();

/*

Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

*/