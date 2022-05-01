// A function can access an outer variable as well

let userName = "John";

function showMessage() {
    let message = "Hello, " + userName;
    alert(message);
}

showMessage(); // Hello, John