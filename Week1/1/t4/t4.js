function grade() {
  const score = parseFloat(document.getElementById("points").value);

  if (isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid score between 0 and 100.");
    return;
  }

  if (score >= 88) {
    document.getElementById("result").textContent = "Grade: 5";
  } else if (score >= 76) {
    document.getElementById("result").textContent = "Grade: 4";
  } else if (score >= 64) {
    document.getElementById("result").textContent = "Grade: 3";
  } else if (score >= 52) {
    document.getElementById("result").textContent = "Grade: 2";
  } else if (score >= 40) {
    document.getElementById("result").textContent = "Grade: 1";
  } else {
    document.getElementById("result").textContent = "Grade: 0";
  }
}
