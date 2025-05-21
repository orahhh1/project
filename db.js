const mysql2=require('mysql2/promise');

const db=mysql2.createPool({
    user:'root',
    host:'localhost',
    password:'',
    database:'node-auth'
});

module.exports=db;