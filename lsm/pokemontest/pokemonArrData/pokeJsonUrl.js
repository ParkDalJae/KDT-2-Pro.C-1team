//json 파일 불러오기
import pokemonData from '../pokejson/pokeData(origin).json' assert{ type:"json" }
import pokemonIndex from '../pokejson/pokeIndex(origin).json' assert{ type:'json'}


//url만 들어있는 배열
const pokeDataUrl = [];
const pokeIndexUrl = [];


for (let num in pokemonData.results) {
  pokeDataUrl.push(pokemonData.results[num].url)
}

for (let num in pokemonIndex.results) {
  pokeIndexUrl.push(pokemonIndex.results[num].url)
}

export default {pokeDataUrl, pokeIndexUrl}