const fs = require('fs')

fs.mkdir("our-fs",(err) => console.log(err))


try{
  fs.mkdirSync("our-fs");

}catch(err){
  console.log(err)
}