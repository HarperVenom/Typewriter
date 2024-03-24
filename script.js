const textField = document.getElementById("textField");
const keyDownSound = document.getElementById("keyDown");
const enterSound = document.getElementById("enter");
const backspaceSound = document.getElementById("backspace");

window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Backspace") {
    if (textField.lastElementChild != null) {
      textField.removeChild(textField.lastElementChild);
      if (!backspaceSound.paused) {
        backspaceSound.cloneNode(true).play();
      } else {
        backspaceSound.play();
      }
    }
  } else if (key === "Enter") {
    textField.appendChild(document.createElement("br"));
    if (!enterSound.paused) {
      enterSound.cloneNode(true).play();
    } else {
      enterSound.play();
    }
  } else {
    addLetter(key);
    if (!keyDownSound.paused) {
      keyDownSound.cloneNode(true).play();
    } else {
      keyDownSound.play();
    }
  }
});

function addLetter(key) {
  let newLetter = document.createElement("span");
  newLetter.innerText = key;
  newLetter.classList.add("letter");
  newLetter.classList.add("prepare");
  setTimeout(() => {
    newLetter.classList.remove("prepare");
  }, 50);
  textField.appendChild(newLetter);
}
