const xhr = new XMLHttpRequest();
const URL = 'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=100000'
const pokeDataFile = [];
const pokeDataStringFile = [];
xhr.open('get',URL)
xhr.send();
xhr.addEventListener('load',function(){
  const pokeData = JSON.parse(xhr.response)
  // console.log(pokeData)
  pokeDataFile.push(pokeData)
  pokeDataStringFile.push(JSON.stringify(pokeData))
})
const pokepoke = console.log(pokeDataFile)

console.log(pokeDataStringFile)
exports (pokepoke)

// console.log(pokeDataFile)
// console.log(pokeDataStringFile)

// console.log(poke)



// xhr.open("post",'D:\KDT-2\KDT-2-Pro.C-1team'.true);
// xhr.send(pokeDataStringFile)

// const filedown = require('./fsfile')
// filedown("pokemonData.json","pokeDataStringFile")


//new에서 읽지를 못함 nwe 가 없더라도 xmlhttprequest 도 못읽음
//http에서 작동하는 방식인가?