const { error } = require('console');
const fs = require('fs');

const createFileName = ""; //filename만 적으면 된다. 주소 수정하려면 fileName을 수정해라
const data = ""; //파일 안에 들어갈 내용


const fileName = "./pokeDatajs/"+createFileName; //폴더명/파일 또는 파일명만 적으면 된다.

fs.writeFile(fileName, data,(error) => console.log(error)) //기존에 파일이 있을땐 기존파일에 덮어쓰기 함

// fs.appendFile(fileName, data, (error) => console.log(error)) //기존에 파일이 있을 경우 기존파일에 내용을 추가함