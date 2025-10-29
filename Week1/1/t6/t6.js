function generateTable() {
  // Prompt the user for a positive integer
  const input = prompt("Enter a positive integer:");
  const n = parseInt(input);

  // Validate the input
  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive integer.");
    return;
  }

  // Create a table element
  let tableHTML = "<table>";

  // Outer loop for rows
  for (let i = 1; i <= n; i++) {
    tableHTML += "<tr>";

    // Inner loop for columns
    for (let j = 1; j <= n; j++) {
      const product = i * j;
      tableHTML += `<td>${product}</td>`;
    }

    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  // Display the table in the HTML document
  document.getElementById("tableContainer").innerHTML = tableHTML;
}
