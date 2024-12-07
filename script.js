"use strict";

let number;

while (true) {
    number = prompt("Enter a five-digit number:");

    if (number === null) {
        alert("Ok, bye");
        break;
    }

    if (number.length === 5 && /^\d{5}$/.test(number)) {
        alert(`Formatted number: ${number.split('').join(' ')}`);
        break; 
    } else {
        alert("Invalid input! Please enter a valid five-digit number.");
    }
}
