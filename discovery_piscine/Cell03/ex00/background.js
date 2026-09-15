function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
 
var btn = document.getElementById("Btn");
 
btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
});