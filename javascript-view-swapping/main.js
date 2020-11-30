var $tabContainer = document.querySelector(".tab-container");
var $tab = document.querySelectorAll(".tab");
var $view = document.querySelectorAll(".view");

$tabContainer.addEventListener("click", function (event) {
if(event.target.matches(".tab")) {
  for(i = 0; i < $tab.length; i++) {
    if(event.target === $tab[i]){
      $tab[i].className = "tab active";
    } else if (event.target !== $tab[i]){
      $tab[i].className = "tab";
    }
    }
    var $data = event.target.getAttribute("data-view");
    for(i = 0; i < $view.length; i++) {
      if($view[i].getAttribute("data-view") === $data) {
        $view[i].className = "view";
      } else if ($view[i].getAttribute("data-view") !== $data) {
        $view[i].className = "view hidden";
      }
    }

  }
})
