const pokemonData = [];

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000')
  .then(response => response.json())
  .then(data => pokemonData(JSON.parse(data.results)))
  .catch(error => console.error(error))

  console.log(pokemonData)

  //이렇게 주소만 따올 수 있을줄 알았는데 안따와짐