const samplesPerPage = 9;
let currentPage = 0;

const allSamples = [

  { name: "Aha!", src: "ah-ha.mp3" },
  { name: "Back of the net!", src: "back-of-the-net.mp3" },
  { name: "Bang out of order!", src: "bangoutoforder.mp3" },
  { name: "Dan!", src: "dan.mp3" },
  { name: "Email of the evening", src: "emailoftheevening.mp3" },
  { name: "Hello partridge", src: "hellopartridge.mp3" },
  { name: "I ate a scotchegg", src: "iateascotchegg.mp3" },
  { name: "Im confused", src: "imconfused.mp3" },
  
];

const sampleGrid = document.getElementById("soundboard");
const leftArrow = document.getElementById("prev-button");
const rightArrow = document.getElementById("next-button");
const bankTitle = document.getElementById("sample-bank-title");

function renderSamples() {
  sampleGrid.innerHTML = "";
  const start = currentPage * samplesPerPage;
  const pageSamples = allSamples.slice(start, start + samplesPerPage);

  pageSamples.forEach((sample) => {
    const audio = new Audio(sample.src);
    audio.addEventListener("loadedmetadata", () => {
      const duration = Math.round(audio.duration);
      sampleDiv.querySelector(".length").textContent = `${duration}s`;
    });

    const sampleDiv = document.createElement("div");
    sampleDiv.className = "sample";
    sampleDiv.innerHTML = `
      <strong>${sample.name}</strong>
      <div class="length">Loading...</div>
    `;
    sampleDiv.onclick = () => audio.play();
    sampleGrid.appendChild(sampleDiv);
  });

  bankTitle.textContent = `Sample Bank ${currentPage + 1}`;
  leftArrow.disabled = currentPage === 0;
  rightArrow.disabled = (currentPage + 1) * samplesPerPage >= allSamples.length;
}



function speakText() {
  const text = document.getElementById("tts-input").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

document.getElementById("say-button").addEventListener("click", speakText);

renderSamples();
