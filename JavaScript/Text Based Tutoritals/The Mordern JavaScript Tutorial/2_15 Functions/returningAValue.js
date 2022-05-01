/*

The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

There may be many occurrences of return in a single function. For instance:

*/

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
    alert("Acess granted.");
} else {
    alert("Access denied.");
}