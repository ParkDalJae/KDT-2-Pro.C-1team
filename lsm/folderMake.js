const fs = require('fs')

const folderName = "pokeDataJs";

//비동기 폴더 생성기
fs.mkdir(folderName, (error) => console.error());

//동기 폴더 생성기
// try {
//   fs.mkdirSync(folderName);
// } catch (error) {
//   console.log(error)
// }