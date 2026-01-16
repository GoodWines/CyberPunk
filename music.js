const btn = document.getElementById("musicToggle");
const music = document.getElementById("music");
const volume = document.getElementById("volume");

// стартова гучність
music.volume = volume.value;

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.classList.add("playing");
  } else {
    music.pause();
    btn.classList.remove("playing");
  }
});

// керування гучністю
volume.addEventListener("input", () => {
  music.volume = volume.value;
});
