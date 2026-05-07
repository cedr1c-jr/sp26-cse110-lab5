// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Element selectors
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("img");

  // Speech synthesis object
  const synth = window.speechSynthesis;

  let voices = [];

  
  // Load available voices into dropdown
  
  function loadVoices() {
    voices = synth.getVoices();

    // Clear existing options
    voiceSelect.innerHTML = "";

    // Add each voice to dropdown
    voices.forEach((voice) => {
      const option = document.createElement("option");

      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;

      voiceSelect.appendChild(option);
    });
  }

  // Some browsers load voices asynchronously
  loadVoices();
  synth.addEventListener("voiceschanged", loadVoices);

  
  //Handle talk button
  talkButton.addEventListener("click", () => {
    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(textArea.value);

    // Find selected voice
    const selectedVoice = voices.find(
      (voice) => voice.name === voiceSelect.value
    );

    // Set chosen voice
    utterance.voice = selectedVoice;

    // Change image while speaking
    utterance.addEventListener("start", () => {
      faceImage.src = "assets/images/smiling-open.png";
    });

    // Return image when done speaking
    utterance.addEventListener("end", () => {
      faceImage.src = "assets/images/smiling.png";
    });

    // Speak text
    synth.speak(utterance);
  });
}