"use strict";

const fiveDigitNumberInput = prompt("Enter a five-digit number:");

if (fiveDigitNumberInput === null) {
    alert("Ok, bye");
} else {
    if (fiveDigitNumberInput.trim() === "" || isNaN(fiveDigitNumberInput) || fiveDigitNumberInput.length !== 5) {
        alert("Error: Invalid number");
    } else {
        const digits = fiveDigitNumberInput.split('').join(' ');
        alert(`The number split into digits: ${digits}`);
    }
}
