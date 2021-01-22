const fetchResponse = fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
  .then(response => response.json())
  .then(data => console.log(data))


const fetchPokemon = fetch('https://pokeapi.co/api/v2/pokemon/charizard/', {method: 'GET'})
  .then(response => response.json())
  .then(data => console.log(data))
