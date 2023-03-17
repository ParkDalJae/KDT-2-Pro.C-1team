    //포켓몬 데이터 추출
    const pokeIndex = [];//id,name(en),names,pokedex_number[1] 순서로 저장
    const pokeData = [];//id, name, types, official-artwork(앞이미지) 순서로 저장
    let numbers = 1011;

    
    //pokeIndex 함수 for문 시작
    for(let i=1;i<numbers;i++){
      const xhr = new XMLHttpRequest;
      const URL = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
      xhr.open('get',URL);
      xhr.send();
      xhr.addEventListener('load',function (){
        const pokemonData = JSON.parse(xhr.response)

        pokeIndex.push([pokemonData.id,pokemonData.name,pokemonData.names[2].name,pokemonData["pokedex_numbers"][1].pokedex.name])
        // pokeIndex.push([pokemonData.id,pokemonData.names[2].name])
        pokeIndex.sort((a, b) => a[0]-b[0])
      })
    } //for문 끝부분

    // pokeData 함수 for문 시작
    for(let i=1;i<numbers;i++){
      const xhr = new XMLHttpRequest;
      const URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      xhr.open('get',URL);
      xhr.send();
      xhr.addEventListener('load',function (){
        const pokemonData = JSON.parse(xhr.response)

        if(pokemonData.types.length===1){
          pokeData.push([pokemonData.id,pokemonData.name,pokemonData.types[0].type.name,"", pokemonData.sprites.other["official-artwork"]["front_default"]])
        } else if (pokemonData.types.length===2) {
          pokeData.push([pokemonData.id,pokemonData.name,pokemonData.types[0].type.name,pokemonData.types[1].type.name, pokemonData.sprites.other["official-artwork"]["front_default"]])
        }
        pokeData.sort((a, b) => a[0]-b[0])
      })
    } //for문 끝부분

    console.log(pokeData);
    console.log(pokeIndex);