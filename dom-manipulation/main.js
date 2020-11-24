var click = 0;

var $hotButton = document.querySelector(".hot-button");
var $clickCount = document.querySelector(".click-count");
var $class = document.querySelector("button");

function clickCounter(event) {
  click++;
  $clickCount.textContent = "Clicks:" + " " + click;
  if (click < 4) {
    $class.className = "hot-button cold";
  } else if (click >= 4 && click < 7) {
    $class.className = "hot-button cool";
  } else if (click >= 7 && click < 10) {
    $class.className = "hot-button tepid";
  } else if (click >= 10 && click < 13) {
    $class.className = "hot-button warm";
  } else if (click >= 13 && click < 16) {
    $class.className = "hot-button hot";
  } else if (click >= 16) {
    $class.className = "hot-button nuclear";
  }
}

$hotButton.addEventListener('click', clickCounter);
