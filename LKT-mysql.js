const mysql = require('mysql');

// MySQL 데이터베이스 연결 정보
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kids0302',
  database: 'taek'
});

// 데이터베이스 연결
connection.connect();
let sql = 'insert into test (name, area, age) values (?,?,?)';
let insert = ['dlrudxor', 'Daejon', 25];
let select = 'select * from test';

// query문 insert
connection.query(sql, insert, function (err, results, fields) {
})

// query문 select
connection.query(select, (err, results, fields) => {
  console.log(results);
})
// 연결 종료
connection.end();