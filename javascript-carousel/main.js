var $bulbasaur = document.querySelector('.bulbasaur');
var $charmander = document.querySelector('.charmander')
var $squirtle = document.querySelector('.squirtle')
var $pikachu = document.querySelector('.pikachu')
var $jigglypuff = document.querySelector('.jigglypuff')

var $circleOne = document.querySelector('.circle-btn-one')
var $circleTwo = document.querySelector('.circle-btn-two')
var $circleThree = document.querySelector('.circle-btn-three')
var $circleFour = document.querySelector('.circle-btn-four')
var $circleFive = document.querySelector('.circle-btn-five')

var $arrowLeft = document.querySelector('.arrow-btn-left');
var $arrowRight = document.querySelector('.arrow-btn-right');

document.addEventListener("click", function (event){
  if (event.target === $circleOne) {
    $bulbasaur.className = "bulbasaur";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden";
    $circleOne.className = "fas fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  }  else if (event.target === $circleTwo) {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "fas fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if (event.target === $circleThree) {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "fas fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if (event.target === $circleFour) {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "fas fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if (event.target === $circleFive) {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "fas fa-circle circle-btn circle-btn-five";
  }
})

$arrowRight.addEventListener("click", function(event){
  if ($bulbasaur.className === "bulbasaur") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "fas fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($charmander.className === "charmander") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "fas fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($squirtle.className === "squirtle") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "fas fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($pikachu.className === "pikachu") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "fas fa-circle circle-btn circle-btn-five";
  } else if ($jigglypuff.className === "jigglypuff") {
    $bulbasaur.className = "bulbasaur";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "fas fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  }
})

$arrowLeft.addEventListener("click", function (event) {
  if ($bulbasaur.className === "bulbasaur") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "fas fa-circle circle-btn circle-btn-five";
  } else if ($charmander.className === "charmander") {
    $bulbasaur.className = "bulbasaur";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "fas fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($squirtle.className === "squirtle") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "fas fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($pikachu.className === "pikachu") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "fas fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($jigglypuff.className === "jigglypuff") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "fas fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  }
})




var carousel = window.setInterval(intervalFunction, 3000);

function intervalFunction() {
  if ($bulbasaur.className === "bulbasaur") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "fas fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($charmander.className === "charmander") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "fas fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($squirtle.className === "squirtle") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "fas fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  } else if ($pikachu.className === "pikachu") {
    $bulbasaur.className = "bulbasaur hidden";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff"
    $circleOne.className = "far fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "fas fa-circle circle-btn circle-btn-five";
  } else if ($jigglypuff.className === "jigglypuff") {
    $bulbasaur.className = "bulbasaur";
    $charmander.className = "charmander hidden";
    $squirtle.className = "squirtle hidden";
    $pikachu.className = "pikachu hidden";
    $jigglypuff.className = "jigglypuff hidden"
    $circleOne.className = "fas fa-circle circle-btn circle-btn-one";
    $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
    $circleThree.className = "far fa-circle circle-btn circle-btn-three";
    $circleFour.className = "far fa-circle circle-btn circle-btn-four";
    $circleFive.className = "far fa-circle circle-btn circle-btn-five";
  }
}
