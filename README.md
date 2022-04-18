# Node.js

- node.js 는 자바스크립트다.
- 많은 고퀼 모듈이 많이 만들어져있으면 Npm으로 간단하게 설치해서 사용할 수 있다.

## mailtrap

```jsx
const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "...",
        pass: "..."
    }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    })
};

let email_data = {
    from: 'diddpwl80@gmail.com',
    to: 'diddpwl80@gmail.com',
    subject: '테스트 메일2!!',
    text: 'nodejs 한시간만에 끝내기 회사에서 공부중.'
};

send(email_data)

```

## express

```jsx
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//라우팅
app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/about', function (req, res) {
    res.render('about.html')
})

```

## mysql

```jsx
    var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'example.org',
    user: 'bob',
    password: 'secret',
    database: 'my_db'
});
app.get('/db', function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query('select * from Test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results', results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
})

```
