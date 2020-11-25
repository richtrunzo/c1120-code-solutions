var button = document.querySelector(".btn");
var overlay = document.querySelector(".offoverlay");
var modal = document.querySelector(".off");
var modalbutton = document.querySelector(".modalbutton");

var click = 0;
function onClick(event) {
  click++;
  if(click % 2 !== 0) {
    overlay.className = "background";
    modal.className = "on";
  } else {
    overlay.className = "offoverlay";
    modal.className = "off";
  }

}
button.addEventListener("click", onClick);

function offClick(event) {
  click++;
  if (click % 2 === 0) {
    overlay.className = "offoverlay";
    modal.className = "off";
  }

}
modalbutton.addEventListener("click", offClick)
