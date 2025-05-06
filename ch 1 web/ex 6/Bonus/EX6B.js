// Game settings
let lives = 3;
let score = 0;

// DOM elements
const rgbDisplay = document.getElementById("rgb-display");
const colorOptions = document.getElementById("color-options");
const feedback = document.getElementById("feedback");
const livesDisplay = document.getElementById("lives");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");

// Generate a random RGB string
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Load a new round
function loadGame() {
  feedback.textContent = "";
  colorOptions.innerHTML = "";

  // Choose the correct color
  const correctColor = randomRGB();
  rgbDisplay.textContent = correctColor;

  // Generate random options including correct one
  const options = [correctColor];
  while (options.length < 3) {
    const newColor = randomRGB();
    if (!options.includes(newColor)) options.push(newColor);
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Create color boxes
  options.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.addEventListener("click", () => checkAnswer(color, correctColor));
    colorOptions.appendChild(box);
  });
}

// Check selected color
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    feedback.textContent = "✅ Correct!";
  } else {
    lives--;
    feedback.textContent = "❌ Incorrect!";
  }

  updateStats();

  if (lives === 0) {
    feedback.textContent = `💀 Game Over! Final score: ${score}`;
    colorOptions.innerHTML = "";
  } else {
    setTimeout(loadGame, 1000);
  }
}

// Update score/lives display
function updateStats() {
  livesDisplay.textContent = lives;
  scoreDisplay.textContent = score;
}

// Reset the game
restartButton.addEventListener("click", () => {
  lives = 3;
  score = 0;
  updateStats();
  loadGame();
});

// Start first game
loadGame();
