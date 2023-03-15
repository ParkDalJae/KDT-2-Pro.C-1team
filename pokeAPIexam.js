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

// console.log(pokeDataFile)
// console.log(pokeDataStringFile)

// console.log(poke)
const fs = require('fs');
const fileName = "poke-species-list.json";
try {
  const file = fileName;
  const data = pokeDataStringFile;
  xhr.setRequestHeader('Content-type','application/json');
  fs.appendFileSync(file,data)
} catch(error) {
  console.log(error)
}



// xhr.open("post",'D:\KDT-2\KDT-2-Pro.C-1team'.true);
// xhr.send(pokeDataStringFile)




