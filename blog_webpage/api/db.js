import mysql from 'mysql'
//MYSQL connection

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'blog'

})