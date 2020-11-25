var $form = document.forms[0];
var $inputs = $form.elements;

function submit (event) {
  event.preventDefault()
  var data = {};
  data.name = $inputs.name.value;
  data.email = $inputs.email.value;
  data.message =$inputs.message.value;
  console.log("form data:", data);
  $form.reset();
}

$form.addEventListener("submit", submit);
