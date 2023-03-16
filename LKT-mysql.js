const mysql = require('mysql');

// MySQL 데이터베이스 연결 정보
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kids0302',
  database: 'taek'
});

connection.connect();
let sql = 'insert into test (name, area, age) values (?,?,?)';
let para = ['dlrudxor','Daejon',20];
let select = 'select * from test';
// 데이터베이스 연결
// HTML 폼 데이터 가져오기
connection.query(sql, para, function (err, results, fields){
  // if (err) throw err;
  console.log(results);
})
connection.query(select, (err,results,fields) => {
  console.log(results);
})
// 연결 종료
connection.end();