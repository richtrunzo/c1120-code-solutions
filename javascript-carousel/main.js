var $bulbasaur = document.getElementById('bulbasaur');
var $charmander = document.getElementById('charmander')
var $squirtle = document.getElementById('squirtle')
var $pikachu = document.getElementById('pikachu')
var $jigglypuff = document.getElementById('jigglypuff')

var $circleOne = document.querySelector('.circle-btn-one')
var $circleTwo = document.querySelector('.circle-btn-two')
var $circleThree = document.querySelector('.circle-btn-three')
var $circleFour = document.querySelector('.circle-btn-four')
var $circleFive = document.querySelector('.circle-btn-five')

var $arrowLeft = document.querySelector('.arrow-btn-left');
var $arrowRight = document.querySelector('.arrow-btn-right');

var position = 0;

var $images = document.querySelectorAll("img");

document.addEventListener("click", function (event){
 for (var i = 0; i < $images.length; i++) {
   if (event.target === $circleOne) {
     $images[position].className = "hidden";
     circleSwitch(0);
     position = 0;
     $images[position].className = "active";
   } else if (event.target === $circleTwo) {
     $images[position].className = "hidden";
     circleSwitch(1);
     position = 1;
     $images[position].className = "active";
   } else if (event.target === $circleThree) {
     $images[position].className = "hidden";
     circleSwitch(2);
     position = 2;
     $images[position].className = "active";
   } else if (event.target === $circleFour) {
     $images[position].className = "hidden";
     circleSwitch(3);
     position = 3;
     $images[position].className = "active";
   } else if (event.target === $circleFive) {
     $images[position].className = "hidden";
     circleSwitch(4);
     position = 4;
     $images[position].className = "active";
   }
  }
});

function circleSwitch(num) {
 if (num === 0) {
   $circleOne.className = "fas fa-circle circle-btn circle-btn-one";
   $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
   $circleThree.className = "far fa-circle circle-btn circle-btn-three";
   $circleFour.className = "far fa-circle circle-btn circle-btn-four";
   $circleFive.className = "far fa-circle circle-btn circle-btn-five";
 } else if (num === 1) {
   $circleOne.className = "far fa-circle circle-btn circle-btn-one";
   $circleTwo.className = "fas fa-circle circle-btn circle-btn-two";
   $circleThree.className = "far fa-circle circle-btn circle-btn-three";
   $circleFour.className = "far fa-circle circle-btn circle-btn-four";
   $circleFive.className = "far fa-circle circle-btn circle-btn-five";
 } else if (num === 2) {
   $circleOne.className = "far fa-circle circle-btn circle-btn-one";
   $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
   $circleThree.className = "fas fa-circle circle-btn circle-btn-three";
   $circleFour.className = "far fa-circle circle-btn circle-btn-four";
   $circleFive.className = "far fa-circle circle-btn circle-btn-five";
 } else if (num === 3) {
   $circleOne.className = "far fa-circle circle-btn circle-btn-one";
   $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
   $circleThree.className = "far fa-circle circle-btn circle-btn-three";
   $circleFour.className = "fas fa-circle circle-btn circle-btn-four";
   $circleFive.className = "far fa-circle circle-btn circle-btn-five";
 } else if (num === 4) {
   $circleOne.className = "far fa-circle circle-btn circle-btn-one";
   $circleTwo.className = "far fa-circle circle-btn circle-btn-two";
   $circleThree.className = "far fa-circle circle-btn circle-btn-three";
   $circleFour.className = "far fa-circle circle-btn circle-btn-four";
   $circleFive.className = "fas fa-circle circle-btn circle-btn-five";
 }
}



$arrowRight.addEventListener("click", function (event){
  for (var i = 0; i < $images.length; i++) {
    $images[position].className = "hidden"
    } if (position === 4) {
      position -= 4;
      $images[position].className = "active";
      circleSwitch(position);
      return;
    }
    position++;
    $images[position].className = "active";
    circleSwitch(position);
})


$arrowLeft.addEventListener("click", function (event){
   if (position === 0) {
     $images[position].className = "hidden";
     position += 4;
     $images[position].className = "active";
     circleSwitch(position);
     return;
  } for (var i = $images.length - 1; i > -1; i--) {
    $images[position].className ="hidden";
 }
  position--;
  $images[position].className = "active";
  circleSwitch(position);
})

var carousel = window.setInterval(intervalFunction, 3000);

function intervalFunction() {
  for (var i = 0; i < $images.length; i++) {
    $images[position].className = "hidden"
  } if (position === 4) {
    position -= 4;
    $images[position].className = "active";
    circleSwitch(position);
    return;
  }
  position++;
  $images[position].className = "active";
  circleSwitch(position);
  }
