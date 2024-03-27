const textField = document.getElementById("textField");
const keyDownSound = document.getElementById("keyDown");
const enterSound = document.getElementById("enter");
const backspaceSound = document.getElementById("backspace");

window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Backspace") {
    if (textField.lastElementChild != null) {
      textField.removeChild(textField.lastElementChild);
      playSound(backspaceSound);
    }
  } else if (key === "Enter") {
    textField.appendChild(document.createElement("br"));
    playSound(enterSound);
  } else if (key === " ") {
    addLetter('&nbsp');
    playSound(enterSound);
  }else {
    if (key.length === 1 || !isNaN(key)) {
      addLetter(key);
      playSound(keyDownSound);
    } 
  }
});

function addLetter(key) {
  let newLetter = document.createElement("span");
  newLetter.innerHTML = key;
  newLetter.classList.add("letter");
  newLetter.classList.add("prepare");
  setTimeout(() => {
    newLetter.classList.remove("prepare");
  }, 50);
  textField.appendChild(newLetter);
}

function playSound(sound, volume = 0.1) {
  sound.volume = volume;
  if (!sound.paused) {
    let clone = sound.cloneNode(true);
    clone.volume = volume;
    clone.play();
  } else {
    sound.play();
  }
}
