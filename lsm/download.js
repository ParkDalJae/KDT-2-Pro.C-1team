
//이 URL에 주소, 파일 이름을 입력해주면 된다.
const MyURL = "https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=100000";
// const MyURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000";
const fileName = "pokemonAttriFile";
// const fileName = "pokeDataFile";


async function handleFileDownload (){
  const response = await fetch(MyURL);
  const file = await response.blob();
  const downloadUrl = window.URL.createObjectURL(file);
  
  const aElement = document.createElement('a');
  document.body.appendChild(aElement);
  aElement.download = fileName;
  aElement.href = downloadUrl;
  
  aElement.click();
  
  document.body.removeChild(aElement);
  window.URL.revokeObjectURL(downloadUrl);
}

handleFileDownload()
