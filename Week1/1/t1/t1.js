function convertTemperature() {
  const celisius = parseFloat(document.getElementById("celsius").value);

  if (isNaN(celisius)) {
    alert("Please enter a valid number for Celsius temperature.");
    return;
  }

  const fahrenheit = (celisius * 9) / 5 + 32;
  const kelvin = celisius + 273.15;

  document.getElementById(
    "fahrenheit"
  ).textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById("kelvin").textContent = `Kelvin: ${kelvin.toFixed(
    2
  )} K`;
}
