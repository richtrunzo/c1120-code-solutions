var $count = document.querySelector("h1");

var interval = window.setInterval(intervalFunction, 2000,)

function intervalFunction() {
  if ($count.textContent === "4"){
    $count.textContent = "3";
  } else if ($count.textContent === "3") {
    $count.textContent = "2";
  } else if ($count.textContent === "2") {
    $count.textContent = "1";
  } else if ($count.textContent === "1") {
    $count.textContent = '~Earth Beeeelooowww Us~';
  }

}
