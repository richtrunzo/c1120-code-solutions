var $g = document.querySelector(".g");
var $r = document.querySelector(".r");
var $u = document.querySelector(".u");
var $m = document.querySelector(".m");
var $p = document.querySelector(".p");
var $y = document.querySelector(".y");
var $spaceone = document.querySelector(".spaceone");
var $w = document.querySelector(".w");
var $i = document.querySelector(".i");
var $z = document.querySelector(".z");
var $a = document.querySelector(".a");
var $rtwo = document.querySelector(".rtwo");
var $d = document.querySelector(".d");
var $s = document.querySelector(".s");
var $spacetwo = document.querySelector(".spacetwo");
var $mtwo = document.querySelector(".mtwo");
var $atwo = document.querySelector(".atwo");
var $k = document.querySelector(".k");
var $e = document.querySelector(".e");
var $spacethree = document.querySelector(".spacethree");
var $t = document.querySelector(".t");
var $o = document.querySelector(".o");
var $x = document.querySelector(".x");
var $itwo =document.querySelector(".itwo");
var $c = document.querySelector(".c");
var $spacefour = document.querySelector(".spacefour");
var $b = document.querySelector(".b");
var $rthree = document.querySelector(".rthree");
var $etwo = document.querySelector(".etwo");
var $wtwo = document.querySelector(".wtwo");



function key(event) {
  if(event.keyCode === 71 && $g.className !== "g green") {
    $g.className = "g green";
    $r.className = "r underline";
  } else if(event.keyCode !== 71 && $g.className !== "g green") {
    $g.className = "g red underline";
  } else if(event.keyCode === 82 && $r.className !== "r green") {
    $r.className = "r green";
    $u.className = "u underline";
  } else if(event.keyCode !== 82 && $r.className !== "r green") {
    $r.className = "r red underline";
  } else if (event.keyCode === 85 && $u.className !== "u green") {
    $u.className = "u green";
    $m.className = "m underline";
  } else if (event.keyCode !== 85 && $u.className !== "u green") {
    $u.className = "u red underline";
  } else if (event.keyCode === 77 && $m.className !== "m green") {
    $m.className = "m green";
    $p.className = "p underline";
  } else if (event.keyCode !== 77 && $m.className !== "m green") {
    $m.className = "m red underline";
  } else if (event.keyCode === 80 && $p.className !== "p green") {
    $p.className = "p green";
    $y.className = "y underline";
  } else if (event.keyCode !== 80 && $p.className !== "p green") {
    $p.className = "p red underline";
  } else if (event.keyCode === 89 && $y.className !== "y green") {
    $y.className = "y green";
    $spaceone.className = "spaceone underline";
  } else if (event.keyCode !== 89 && $y.className !== "y green") {
    $y.className = "y red underline";
  } else if (event.keyCode !== 32 && $spaceone.className !== "spaceone") {
    $spaceone.className = "spaceone underline";
  } else if (event.keyCode === 32 && $spaceone.className === "spaceone underline" ) {
    $spaceone.className = "spaceone";
    $w.className = "w underline";
  } else if (event.keyCode === 87 && $w.className !== "w green") {
    $w.className = "w green";
    $i.className = "i underline";
  } else if (event.keyCode !== 87 && $w.className !== "w green") {
    $w.className = "w red underline";
  } else if (event.keyCode === 73 && $i.className !== "i green") {
    $i.className = "i green";
    $z.className = "z underline";
  } else if (event.keyCode !== 73 && $i.className !== "i green") {
    $i.className = "i red underline";
  } else if (event.keyCode === 90 && $z.className !== "z green") {
    $z.className = "z green";
    $a.className = "a underline";
  } else if (event.keyCode !== 90 && $z.className !== "z green") {
    $z.className = "z red underline";
  } else if (event.keyCode === 65 && $a.className !== "a green") {
    $a.className = "a green";
    $rtwo.className = "rtwo underline";
  } else if (event.keyCode !== 65 && $a.className !== "a green") {
    $a.className = "a red underline";
  } else if (event.keyCode === 82 && $rtwo.className !== "rtwo green") {
    $rtwo.className = "rtwo green";
    $d.className = "d underline";
  } else if (event.keyCode !== 82 && $rtwo.className !== "rtwo green") {
    $rtwo.className = "rtwo red underline";
  } else if (event.keyCode === 68 && $d.className !== "d green") {
    $d.className = "d green";
    $s.className = "s underline";
  } else if (event.keyCode !== 68 && $d.className !== "d green") {
    $d.className = "d red underline";
  } else if (event.keyCode === 83 && $s.className !== "s green") {
    $s.className = "s green";
    $spacetwo.className = "spacetwo underline";
  } else if (event.keyCode !== 83 && $s.className !== "s green") {
    $s.className = "s red underline";
  } else if (event.keyCode !== 32 && $spacetwo.className !== "spacetwo") {
    $spacetwo.className = "spacetwo underline";
  } else if (event.keyCode === 32 && $spacetwo.className === "spacetwo underline") {
    $spacetwo.className = "spacetwo";
    $mtwo.className = "mtwo underline";
  } else if (event.keyCode === 77 && $mtwo.className !== "mtwo green") {
    $mtwo.className = "mtwo green";
    $atwo.className = "atwo underline";
  } else if (event.keyCode !== 77 && $mtwo.className !== "mtwo green") {
    $mtwo.className = "mtwo red underline";
  } else if (event.keyCode === 65 && $atwo.className !== "atwo green") {
    $atwo.className = "atwo green";
    $k.className = "k underline";
  } else if (event.keyCode !== 65 && $atwo.className !== "atwo green") {
    $atwo.className = "atwo red underline";
  } else if (event.keyCode === 75 && $k.className !== "k green") {
    $k.className = "k green";
    $e.className = "e underline";
  } else if (event.keyCode !== 75 && $k.className !== "k green") {
    $k.className = "k red underline";
  } else if (event.keyCode === 69 && $e.className !== "e green") {
    $e.className = "e green";
    $spacethree.className = "spacethree underline";
  } else if (event.keyCode !== 69 && $e.className !== "e green") {
    $e.className = "e red underline";
  } else if (event.keyCode !== 32 && $spacethree.className !== "spacethree") {
    $spacethree.className = "spacethree underline";
  } else if (event.keyCode === 32 && $spacethree.className === "spacethree underline") {
    $spacethree.className = "spacethree";
    $t.className = "t underline";
  } else if (event.keyCode === 84 && $t.className !== "t green") {
    $t.className = "t green";
    $o.className = "o underline";
  } else if (event.keyCode !== 84 && $t.className !== "t green") {
    $t.className = "t red underline";
  } else if (event.keyCode === 79 && $o.className !== "o green") {
    $o.className = "o green";
    $x.className = "x underline";
  } else if (event.keyCode !== 79 && $o.className !== "o green") {
    $o.className = "o red underline";
  } else if (event.keyCode === 88 && $x.className !== "x green") {
    $x.className = "x green";
    $itwo.className = "itwo underline";
  } else if (event.keyCode !== 88 && $x.className !== "x green") {
    $x.className = "x red underline";
  } else if (event.keyCode === 73 && $itwo.className !== "itwo green") {
    $itwo.className = "itwo green";
    $c.className = "c underline";
  } else if (event.keyCode !== 73 && $itwo.className !== "itwo green") {
    $itwo.className = "itwo red underline";
  } else if (event.keyCode === 67 && $c.className !== "c green") {
    $c.className = "c green";
    $spacefour.className = "spacefour underline";
  } else if (event.keyCode !== 67 && $c.className !== "c green") {
    $c.className = "c red underline";
  } else if (event.keyCode !== 32 && $spacefour.className !== "spacefour") {
    $spacefour.className = "spacefour underline";
  } else if (event.keyCode === 32 && $spacefour.className === "spacefour underline") {
    $spacefour.className = "spacefour";
    $b.className = "b underline";
  } else if (event.keyCode === 66 && $b.className !== "b green") {
    $b.className = "b green";
    $rthree.className = "rthree underline";
  } else if (event.keyCode !== 66 && $b.className !== "b green") {
    $b.className = "b red underline";
  } else if (event.keyCode === 82 && $rthree.className !== "rthree green") {
    $rthree.className = "rthree green";
    $etwo.className = "etwo underline";
  } else if (event.keyCode !== 82 && $rthree.className !== "rthree green") {
    $rthree.className = "rthree red underline";
  } else if (event.keyCode === 69 && $etwo.className !== "etwo green") {
    $etwo.className = "etwo green";
    $wtwo.className = "wtwo underline";
  } else if (event.keyCode !== 69 && $etwo.className !== "etwo green") {
    $etwo.className = "etwo red underline";
  } else if (event.keyCode === 87 && $wtwo.className !== "wtwo green") {
    $wtwo.className = "wtwo green";
  } else if (event.keyCode !== 87 && $wtwo.className !== "wtwo green") {
    $wtwo.className = "wtwo red underline";
  }
}
document.addEventListener("keydown", key)
