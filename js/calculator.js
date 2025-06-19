document.addEventListener("DOMContentLoaded", () => {
  const numberInput = document.getElementById("numberInput");
  const enterButton = document.getElementById("enterButton");
  const resultScreen = document.getElementById("resultScreen");

  function createSquareCalculator() {
    return function (base) {
      if (typeof base !== "number" || isNaN(base)) {
        return "Please enter a valid number.";
      }
      return `${base} squared is ${base * base}.`;
    };
  }

  const calculateSquare = createSquareCalculator();

  enterButton.addEventListener("click", () => {
    const inputValue = parseFloat(numberInput.value);
    const result = calculateSquare(inputValue);
    resultScreen.textContent = result;
  });
});
