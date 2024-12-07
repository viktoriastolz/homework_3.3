// "use strict";

// const number = prompt("Enter a five-digit number:");

// console.log(number.split('').join(' '));
"use strict";

function processFiveDigitNumber() {
    const number = prompt("Enter a five-digit number:");

    if (!number || number.length !== 5 || !/^\d{5}$/.test(number)) {
        alert("Invalid input! Please enter a valid five-digit number.");
        return;
    }
    const formattedNumber = number.split('').join(' ');
    alert(`Formatted number: ${formattedNumber}`);
}

processFiveDigitNumber();
