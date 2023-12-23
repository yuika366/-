//requireでexpressモジュールを読み込む
const express = require('express');
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3001;

//'/'パスにGET要求があった際に実行する処理
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//'/api'パスにGET要求があった際に実行する処理
app.get('/api', (req, res) => {
  res.json({message: "Hello World"});
});

//3000ポートでlisten
app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

const express = require('express');
//mysql2の読み込む
const mysql = require('mysql2');
const app = express();
const port = 3001;

//mysqlと接続するための設定
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', //rootpassっぽい
    database: '' //データベースの名前
});

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/api', (req, res) => {
    // /apiにアクセスした際に、MySQLに対して行う処理
    connection.query(
        //usersテーブルからデータを取得する処理
        'SELECT * FROM users',
        function(err, results, fields){
            if(err){
                console.log('接続エラー');
                throw err;
            }
            res.json({message: results[0].name});
        }
    )
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})