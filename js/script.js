// Function for calculating days until a given date. The date is passed as a string in the format "MM-DD-YYYY".
function daysUntil(date) {
    // Create a new date object for the given date.
    var givenDate = new Date(date);
    // Create a new date object for today's date.
    var today = new Date();
    // Calculate the difference in milliseconds between the two dates.
    var difference = givenDate - today;
    // Convert the difference to days and return the result.
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
    }

console.log(daysUntil("09-30-2023"))
