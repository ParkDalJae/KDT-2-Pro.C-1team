const fs = require('fs')
const poke = require('./pokeAPIexam')
  function filedown (fileName, dataBase){
    try {
      const file = fileName;
      const data = dataBase;
      // xhr.setRequestHeader('Content-type','application/json');
      fs.appendFileSync(file,data)
    } catch(error) {
      console.log(error)
    }
  }

filedown("dkanrjsk.json",poke)

//파일 다운로드 하려고 만듦 실패함