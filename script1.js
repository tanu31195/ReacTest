//alert("Game Loaded")
var startTime = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shapeAppear() {
  //properties of shape
  var randLeft = Math.random() * 700;
  var randTop = Math.random() * 400;
  var randSize = (Math.random() * 200) + 100;
  var randShape = Math.random() * 50;

  document.getElementById("shape").style.top = randTop + "px";

  document.getElementById("shape").style.left = randLeft + "px";

  document.getElementById("shape").style.width = randSize + "px"

  document.getElementById("shape").style.height = randSize + "px"

  document.getElementById("shape").style.borderRadius = randShape + "px"

  document.getElementById("shape").style.backgroundColor = getRandomColor();

  //displays the shape
  document.getElementById("shape").style.display = "block";

  startTime = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(shapeAppear, Math.random() * 2000);
}
appearAfterDelay();


document.getElementById("shape").onclick = function funcDisappear() {
  document.getElementById("shape").style.display = "none";
  var endTime = new Date().getTime();
  var timeTaken = (endTime - startTime) / 1000;
  //alert(timeTaken);
  document.getElementById("timeTakenUser").innerHTML = timeTaken + " Seconds";
  appearAfterDelay();
}
