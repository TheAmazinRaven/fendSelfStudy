/* 

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

*/



/* COMPLETELY WRONG 

function min(a, b) {
    if (min(2, 5)) {
        return 2;
    } else if (min(3, -1)) {
        return -1;
    } else if (mine(1, 1)) {
        return 1;
    }
}

*/

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// or

function min(a, b) {
    return a < b ? a : b;
}