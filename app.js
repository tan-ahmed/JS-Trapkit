document.addEventListener("DOMContentLoaded", function() {
  function playSound(e) {
    const audio =
      document.querySelector(`audio[data-key="${e.keyCode}"]`) ||
      document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
    const key =
      document.querySelector(`div[data-key="${e.keyCode}"]`) ||
      document.querySelector(`div[data-key="${event.target.dataset.key}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));

  //window is global object in a browser
  window.addEventListener("keydown", playSound);
  window.addEventListener("click", playSound);

  // window.addEventListener("click", function (event) {
  //     console.log(event.target.dataset.key);
  // });
});
