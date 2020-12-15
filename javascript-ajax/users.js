var $users = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';


xhr.addEventListener('load', function(event){
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i <  xhr.response.length; i++) {
    var $li = document.createElement('li')
    var $liText = document.createTextNode(xhr.response[i].name);
    $li.appendChild($liText);
    $users.appendChild($li);
  }
})

xhr.send();
