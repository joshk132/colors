var numOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var HardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //reset h1 background color
  h1.style.background = "midnightblue";
  messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
  messageDisplay.textContent = "";
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //chang color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  //Loop to determine action of color picked
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  //reset h1 background color
  h1.style.background = "midnightblue";
  //make span empty
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

//Loop to determine action of color picked
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
};

//Function to change color
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  // change each color to match given color
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //retrun that array
  return arr;
}

function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {

}
