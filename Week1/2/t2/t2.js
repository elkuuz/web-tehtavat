function logToPage(text) {
  document.getElementById("output").innerHTML += text + "<br>";
}

// Create an empty array
const numbers = [];

// Prompt user for five numbers and add them to the array
for (let i = 1; i <= 5; i++) {
  const num = parseFloat(prompt(`Enter Number ${i}:`));
  numbers.push(num);
}

// Display the numbers array
console.log("Numbers:", numbers);
logToPage("Numbers: " + JSON.stringify(numbers));

// Prompt the user to enter a number to search
const searchNum = parseFloat(prompt("Enter a Number to Search:"));

// Check if the number is included
if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} is found in the array.`);
  logToPage(`Number ${searchNum} is found in the array.`);
} else {
  console.log(`Number ${searchNum} is not found in the array.`);
  logToPage(`Number ${searchNum} is not found in the array.`);
}

// Remove the last number using pop()
numbers.pop();

// Display the updated numbers array
console.log("Updated Numbers:", numbers);
logToPage("Updated Numbers: " + JSON.stringify(numbers));

// Sort the array in ascending order (numerically)
numbers.sort((a, b) => a - b);

// Display the sorted array
console.log("Sorted Numbers:", numbers);
logToPage("Sorted Numbers: " + JSON.stringify(numbers));
