const display = document.getElementById("inputfeild");
const buttons = Array.from(document.getElementsByClassName("btn"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value === "C") {
      display.value = "";
    } else if (value === "CE") {
      const currentText = display.value;
      // Find the last operator in the string
      const lastOperatorIndex = Math.max(
        currentText.lastIndexOf("+"),
        currentText.lastIndexOf("-"),
        currentText.lastIndexOf("*"),
        currentText.lastIndexOf("/")
      );

      if (lastOperatorIndex === -1) {
        // If no operators are found, clear the whole display
        display.value = "";
      } else {
        // Otherwise, remove the part after the last operator
        display.value = currentText.slice(0, lastOperatorIndex + 1);
      }
    } else if (value === "=") {
     display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });

});
