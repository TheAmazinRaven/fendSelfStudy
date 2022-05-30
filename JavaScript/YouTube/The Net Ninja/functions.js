// function declaration
function greet(name) {
    console.log("Hello, there " + name);
}

greet('Susy');

// function expression

const speak = function(name, time) {
    console.log(`Good ${time} ${name}`);
};

speak("Damien", "morning");

const Pokemon = function(Pokemon, HP, powerMove, potion) {
    console.log(`${Pokemon} has ${HP} HP, their power move is ${powerMove} and they have a chance of healing by ${potion}%!`);
};

Pokemon("Pikachu", 17, "Thunder Wave", 2);