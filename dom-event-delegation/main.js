var $tasklist = document.querySelector(".task-list");
var $button = document.querySelector("button");


function task(event) {
  console.log("event.target:", event.target);
  console.log("event.target.tagname:", event.target.tagName);
  if (event.target.tagName == "BUTTON") {
    console.log(event.target.closest(".task-list-item"));
    var $closeButton = event.target.closest(".task-list-item");
    $closeButton.remove();
  }

}

$tasklist.addEventListener("click", task, false);
