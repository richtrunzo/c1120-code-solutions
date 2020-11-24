var body = document.querySelector("body");
var div = document.querySelector(".column");

var click = 0;
function onClick(event) {
click++;
if (click % 2 !== 0) {
  div.className = "column black";
  body.className = "black-body";
} else {
    div.className = "column yellow";
    body.className = "yellow-body";
  }
}

div.addEventListener("click", onClick);
