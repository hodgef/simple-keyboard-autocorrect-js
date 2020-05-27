let Keyboard = window.SimpleKeyboard.default;
let autocorrect = window.SimpleKeyboardAutocorrect.default;

let wordList = ["pizza"];

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  autocorrectDict: wordList,
  autocorrectHotkey: "{space}",
  modules: [autocorrect]
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
