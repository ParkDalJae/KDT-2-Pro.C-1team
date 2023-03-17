//pokejsonUrl에서 가져옴
import { pokeDataUrl,pokeIndexUrl } from "./pokemonArrData/pokeJsonUrl";

//값이 들어있는 배열
const pokeDataId = [];
const pokeDataNameEn = [];
const pokeDataNameKo = [];
const pokeDataPokedex = [];

// console.log(pokemonData.results[0].url);

//뭔가 아닌거같음
// function pokeUrlNum (num) {
//   return pokemonData.results[num].url
// }


const pkFetch = fetch(pokeDataUrl[0]);