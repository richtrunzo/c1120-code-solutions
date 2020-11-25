var $name = document.forms[0].name;
var $email = document.forms[0].email;
var $message = document.forms[0].message;



function handleFocus(event) {
  console.log("The foucus event was fired");
  console.log("event target name:", event.target.name);
}
$name.addEventListener("focus", handleFocus)
$email.addEventListener("focus", handleFocus)
$message.addEventListener("focus", handleFocus)


function handleBlur(event) {
  console.log("The blur event was fired");
  console.log("event target name:", event.target.name)
}
$name.addEventListener("blur", handleBlur);
$email.addEventListener("blur", handleBlur);
$message.addEventListener("blur", handleBlur);

function handleInput(event) {
  console.log("event target name:", event.target.name);
  console.log("event target value:", event.target.value);
}
$name.addEventListener("input", handleInput);
$email.addEventListener("input", handleInput);
$message.addEventListener("input", handleInput);
