var $viewOne = document.querySelector('.one')
var $viewTwo = document.querySelector('.two')
var $viewThree = document.querySelector('.three')
var $viewFour = document.querySelector('.four')
var $viewFive = document.querySelector('.five')


var $circleOne = document.querySelectorAll('.circle-btn-one')
var $circleTwo = document.querySelectorAll('.circle-btn-two')
var $circleThree = document.querySelectorAll('.circle-btn-three')
var $circleFour = document.querySelectorAll('.circle-btn-four')
var $circleFive = document.querySelectorAll('.circle-btn-five')

var $arrowLeft = document.querySelectorAll('.arrow-btn-left');
var $arrowRight = document.querySelectorAll('.arrow-btn-right');

document.addEventListener("click", function (event){
  for (var i = 0; i < $circleOne.length; i++) {
    if (event.target === $circleOne[i]) {
      $viewOne.className = "view one";
      $viewTwo.className = "view two hidden";
      $viewThree.className = "view three hidden";
      $viewFour.className = "view four hidden";
      $viewFive.className = "view five hidden";
    }
  } for (var i = 0; i < $circleTwo.length; i++) {
    if (event.target === $circleTwo[i]) {
      $viewOne.className = "view one hidden";
      $viewTwo.className = "view two";
      $viewThree.className = "view three hidden";
      $viewFour.className = "view four hidden";
      $viewFive.className = "view five hidden";
    }
  } for (var i = 0; i < $circleThree.length; i++) {
    if (event.target === $circleThree[i]) {
      $viewOne.className = "view one hidden";
      $viewTwo.className = "view two hidden";
      $viewThree.className = "view three";
      $viewFour.className = "view four hidden";
      $viewFive.className = "view five hidden";
    }
  } for (var i = 0; i < $circleFour.length; i++) {
    if (event.target === $circleFour[i]) {
      $viewOne.className = "view one hidden";
      $viewTwo.className = "view two hidden";
      $viewThree.className = "view three hidden";
      $viewFour.className = "view four";
      $viewFive.className = "view five hidden";
    }
  } for (var i = 0; i < $circleFive.length; i++) {
    if (event.target === $circleFive[i]) {
      $viewOne.className = "view one hidden";
      $viewTwo.className = "view two hidden";
      $viewThree.className = "view three hidden";
      $viewFour.className = "view four hidden";
      $viewFive.className = "view five";
    }
  }
})

document.addEventListener("click", function (event){
  if (event.target === $arrowRight[0]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowRight[1]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowRight[2]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowRight[3]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five";
  } else if (event.target === $arrowRight[4]) {
    $viewOne.className = "view one";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowLeft[0]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five";
  } else if (event.target === $arrowLeft[4]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowLeft[3]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowLeft[2]) {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if (event.target === $arrowLeft[1]) {
    $viewOne.className = "view one";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  }
})


var carousel = window.setInterval(intervalFunction, 3000);

function intervalFunction() {
  if ($viewOne.className === "view one") {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if ($viewTwo.className === "view two") {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  } else if ($viewThree.className === "view three") {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four";
    $viewFive.className = "view five hidden";
  } else if ($viewFour.className === "view four") {
    $viewOne.className = "view one hidden";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five";
  } else if ($viewFive.className === "view five") {
    $viewOne.className = "view one";
    $viewTwo.className = "view two hidden";
    $viewThree.className = "view three hidden";
    $viewFour.className = "view four hidden";
    $viewFive.className = "view five hidden";
  }
}
