const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('./files'));
//想要通过req.body得到post参数，先用这个中间件
// app.use(bodyParser.urlencoded({ extended: false }));
//跨域响应头
app.use((req, res, next) => {
    //设置请求头
    res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Max-Age': 1728000,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/text; charset=utf-8'
    })
    console.log(`${req.method} ${req.url} ${Date.now()}`);
    console.log("request:headers", req.headers)
    req.method === 'OPTIONS' ? res.status(204).end() : next()
});

app.listen(8080)

console.log("server start:8080")

