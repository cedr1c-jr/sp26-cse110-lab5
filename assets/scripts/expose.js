// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("section img");
  const audio = document.querySelector("audio");

  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");

  const playButton = document.querySelector("button");

  // Confetti library
  const jsConfetti = new JSConfetti();

  // Horn Selection
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;

    // Update image
    hornImage.src = `assets/images/${selectedHorn}.svg`;

    // Update sound
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Handle Volume Slider Changes
  volumeSlider.addEventListener("input", () => {
    const volume = Number(volumeSlider.value);

    // Update audio volume
    audio.volume = volume / 100;

    // Update volume icon
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Handle Play Button
  playButton.addEventListener("click", () => {
    audio.play();

    // Confetti only for party horn
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}