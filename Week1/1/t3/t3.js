function triangle() {
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const c = parseFloat(document.getElementById("sideC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid numbers for all three sides.");
    return;
  }

  if (a == b && b == c) {
    document.getElementById("result").textContent =
      "The triangle is equilateral.";
  } else if (a == b || b == c || a == c) {
    document.getElementById("result").textContent =
      "The triangle is isosceles.";
  } else {
    document.getElementById("result").textContent = "The triangle is scalene.";
  }
}
