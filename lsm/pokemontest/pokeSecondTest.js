//pokejsonUrl에서 가져옴
import pokeUrl from '../pokemontest/pokemonArrData/pokeJsonUrl.js'


//// 그냥 가져와서 따로 배열에 저장하는 방법은 안보임 (실패)
// //값이 들어있는 배열
// const pokeDataId = [];
// const pokeDataNameEn = [];
// const pokeDataNameKo = [];
// const pokeDataPokedex = [];
const pokeDataIdEnKo = [];
const pokeIndexTypeArt = [];

// console.log(pokemonData.results[0].url);

//// 뭔가 아닌거같음
// function pokeUrlNum (num) {
//   return pokemonData.results[num].url
// }

// console.log(pokeUrl.pokeDataUrl[0])


//// 포켓몬 자료 추출되는지 실험(위치지정 후 콘솔에 찍히는 것은 확인) 
//// 배열에 담기지는 않음
// fetch(pokeUrl.pokeDataUrl[0])
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
  


//// 차라리 API에서 그대로 자료를 가져와서 바로 홈페이지에 띄워주는건 어떨까?(시도중)

//// api에서 직접 원하는 데이터만 꺼내오는 것은 성공(성공데이터 보존)
// fetch(pokeUrl.pokeIndexUrl[0])
//   .then(response => response.json())
//   .then(pokedata => {
//     console.log(pokedata.id);
//     console.log(pokedata.name);
//     console.log(pokedata.names[2].name);
//     console.log(pokedata["pokedex_numbers"][1].pokedex.name);

//   })
//   .catch(error => console.error(error))



// fetch(pokeUrl.pokeDataUrl[0])
// .then(response => response.json())
// .then(pokedata => {
//   console.log(pokedata.id)
//   console.log(pokedata.name)
//   if(pokedata.types.length === 2){
//     console.log(pokedata.types[0].type.name)
//     console.log(pokedata.types[1].type.name)
//   } else {
//     console.log(pokedata.types[0].type.name)
//   }
//   console.log(pokedata.sprites.other["official-artwork"]["front_default"])
// })





//구동 확인 완료 원본
// fetch(pokeUrl.pokeIndexUrl[0])
//   .then(response => response.json())
//   .then(pokedata => {
//     const pokemonDataId = pokedata.id;
//     const pokemonDataEnName = pokedata.name;
//     const pokemonDataKoName = pokedata.names[2].name;
//     const pokemonDataDexName = pokedata["pokedex_numbers"][1].pokedex.name;
//     return pokemonDataId
//   })
//   .catch(error => console.error(error))



// fetch(pokeUrl.pokeDataUrl[0])
// .then(response => response.json())
// .then(pokedata => {
//   const pokemonIndexId = pokedata.id
//   const pokemonIndexEnName = pokedata.name
//   if(pokedata.types.length === 2){
//     const pokemonIndexTypeFirst = pokedata.types[0].type.name
//     const pokemonIndexTypeSecond = pokedata.types[1].type.name
//   } else {
//     const pokemonIndexTypeFirst = pokedata.types[0].type.name
//   }
//   const pokemonIndexOfficialArtwork = pokedata.sprites.other["official-artwork"]["front_default"]
// })









//실험용 1
//실험 한꺼번에 하나의 배열에 넣어볼려고 했는데 역시 넣어지지 않는다.(실패)
// for(let i = 0; i < 10; i++){

//   fetch(pokeUrl.pokeIndexUrl[i])
//   .then(response => response.json())
//   .then(pokedata => {
//     pokeDataIdEnKo.push([pokedata.id, pokedata.name, pokedata.names[2].name, pokedata["pokedex_numbers"][1].pokedex.name])
//   })
//   .catch(error => console.error(error))
  
  // fetch(pokeUrl.pokeDataUrl[i])
  // .then(response => response.json())
  // .then(pokedata => {
  //   if(pokedata.types.length === 2){
    //     pokeIndexTypeArt.push([pokedata.id,pokedata.name,pokedata.types[0].type.name,pokedata.types[1].type.name,pokedata.sprites.other["official-artwork"]["front_default"]])
    //     console.log(pokeIndexTypeArt)
    //   } else {
      //     pokeIndexTypeArt.push([pokedata.id,pokedata.name,pokedata.types[0].type.name,"",pokedata.sprites.other["official-artwork"]["front_default"]])
      //     console.log(pokeIndexTypeArt)
      //   }
  // })
  // .catch(error => console.error(error))
  
// }






// 실험용 2 콜백함수 활용해보자

function pokemonDataAll (pokemonUrl, callback){
  fetch(pokemonUrl)
    .then(response => response.json())
    .then(pokedata => {
      callback(pokedata)
    })
    .catch(error => console.error(error))
}

pokemonDataAll(pokeUrl.pokeDataUrl[0],function(pokedata){
  // console.log(pokedata)

  // pokedata.forEach(element => { //요소별로 각각 푸쉬로 넣으면 될까 했지만 실패
  //   pokeDataIdEnKo.push(element)
  // });

  pokeDataIdEnKo.push(pokedata.id)
  // return pokeDataIdEnKo
})
console.log(pokeDataIdEnKo)

