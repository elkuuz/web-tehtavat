// Function to display output on the HTML page
function showOutput(text) {
  document.getElementById("output").innerHTML += text + "<br>";
}

// Define an empty array to store user-entered numbers
const numbers = [];

// Prompt the user for numbers until they type "done"
while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input === null || input.toLowerCase() === "done") {
    break; // Stop the loop if user types "done" or cancels
  }

  const num = parseFloat(input);

  if (!isNaN(num)) {
    numbers.push(num); // Add valid numbers to the array
  } else {
    alert("Please enter a valid number or 'done'.");
  }
}

// Extract even numbers using for...of loop
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// Display the even numbers or "None" if there are none
if (evenNumbers.length > 0) {
  showOutput("Even Numbers: " + evenNumbers.join(", "));
  console.log("Even Numbers:", evenNumbers);
} else {
  showOutput("Even Numbers: None");
  console.log("Even Numbers: None");
}

// Display message indicating end of program
showOutput("<br>End of program.");
