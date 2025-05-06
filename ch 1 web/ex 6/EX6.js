// Get DOM elements
const costInput = document.getElementById("cost");
const litresInput = document.getElementById("litres");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("total");

// Calculate total cost on button click
calculateBtn.addEventListener("click", () => {
  // Convert input values to numbers
  const cost = parseFloat(costInput.value);
  const litres = parseFloat(litresInput.value);

  // Calculate total
  const total = cost * litres;

  // Display the result rounded to two decimals
  totalDisplay.textContent = `Total: AED${total.toFixed(2)}`;
});
