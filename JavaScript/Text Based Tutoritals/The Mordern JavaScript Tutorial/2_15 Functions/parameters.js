/* 

We can pass arbitrary data to functions using parameters.

In the example below, the function has two parameters: from and text

*/

function showMessage(from, text) { // paramaters: from, text
    alert(from + ": " + text);
}

showMessage("Ann", "Hello"); //  Ann: Hello!
showMessage("Ann", "What's up?"); // Ann: What's up?

/*

When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".

*/