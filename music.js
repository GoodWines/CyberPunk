// ===================== MAIN ТРЕК =====================

const btn = document.getElementById("musicToggle");
const music = document.getElementById("music");
const volume = document.getElementById("volume");

// стартова гучність
music.volume = 0.5 * volume.value;

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
  music.volume = 0.5 * volume.value;
});


// ===================== ІНШІ ТРЕКИ =====================
const otherTracks = document.querySelectorAll(".cyber-music audio");

otherTracks.forEach(track => {
  // стартова гучність
  track.volume = 0.5 * volume.value;

  track.addEventListener("play", () => {
    stopAllExcept(track); // зупиняємо всі інші треки
  });
});


// ФУНКЦІЯ ЗУПИНКИ ВСІХ
function stopAllExcept(currentTrack) {
  // зупиняємо кастомний трек
  if (music !== currentTrack) {
    music.pause();
    btn.classList.remove("playing");
  }

  // зупиняємо інші треки
  otherTracks.forEach(track => {
    if (track !== currentTrack) {
      track.pause();
      track.currentTime = 0;
    }
  });
}