//json 파일 불러오기
const pokemonData = require('d:/KDT-2/KDT-2-Pro.C-1team/lsm/pokejson/pokeData(origin).json')
const pokemonIndex = require('d:/KDT-2/KDT-2-Pro.C-1team/lsm/pokejson/pokeIndex(origin).json')


//url만 들어있는 배열
const pokeDataUrl = [];
const pokeIndexUrl = [];


for(let num in pokemonData.results){
  pokeDataUrl.push(pokemonData.results[num].url)
}

for(let num in pokemonIndex.results){
  pokeIndexUrl.push(pokemonIndex.results[num].url)
}