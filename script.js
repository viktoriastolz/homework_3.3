"use strict";

const fiveDigitNumberInput = prompt("Enter a five-digit number:");

if (fiveDigitNumberInput === null) {
    alert("Ok, bye");
} else {
    if (fiveDigitNumberInput.trim() === "" || isNaN(fiveDigitNumberInput) || fiveDigitNumberInput.length !== 5) {
        alert("Error: invalid number");
    } else {
        const num = Math.abs(+fiveDigitNumberInput); 
        if (String(num).length === 5) {
            alert(`Valid five-digit number: ${num}`);
        } else {
            alert("Number is not a five-digit number");
        }
    }
}
