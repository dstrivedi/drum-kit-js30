// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById("app");
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
  console.log(key);
  if (!audio) return;
  audio.play();
  key.classList.add("playing");
  setInterval(() => {
    key.classList.remove("playing");
  }, 400);
});
