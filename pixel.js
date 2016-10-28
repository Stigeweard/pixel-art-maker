var pixels = document.getElementsByClassName('pixel');
var canvas = document.getElementById('canvasBox');
var input = document.getElementById("userInput");
var colorDisplay = document.getElementById('colorDisplay');
var currentColor = null;

function setColor(event) {
  currentColor = input.value;
  input.value = "";
  colorDisplay.style['background-color'] = currentColor;
}

function returnSetColor(event) {
  console.log('asdf')
  if(event.keyCode === 13) {
    currentColor = input.value;
    input.value = ""
    colorDisplay.style['background-color'] = currentColor;
  }
}

function paint(event) {
  var selectedPixel = event.target
  selectedPixel.style['background-color'] = currentColor;
}

submit.addEventListener('click', setColor);
input.addEventListener('keydown', returnSetColor);
canvas.addEventListener('click', paint);
