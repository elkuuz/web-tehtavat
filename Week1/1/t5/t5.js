function numbercalc() {
  const num1 = parseFloat(document.getElementById("number1").value);

  if (isNaN(num1)) {
    alert("Please enter a valid number.");
    return;
  }

  let sum = num1;
  for (let i = 1; i < num1; i++) {
    sum += i;
  }

  document.getElementById("result").textContent =
    "The sum of all natural numbers up to " + num1 + " is " + sum;
}
