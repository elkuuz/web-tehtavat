function calculateDistance() {
  // Ask user for coordinates of both points in one prompt
  const point1 = prompt("Enter coordinates of the first point (x1,y1):");
  const point2 = prompt("Enter coordinates of the second point (x2,y2):");

  // Split input strings into x and y numbers
  const [x1, y1] = point1.split(",").map(Number);
  const [x2, y2] = point2.split(",").map(Number);

  // Check if inputs are valid numbers
  if ([x1, y1, x2, y2].some(isNaN)) {
    alert("Please enter valid numeric coordinates (e.g. 3,4)");
    return;
  }

  // Calculate distance using the Euclidean formula
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display the result in the HTML page
  document.getElementById(
    "result"
  ).textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(
    2
  )} units.`;
}
