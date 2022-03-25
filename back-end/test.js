// const fs = require('fs')

// let todoData = fs.readFileSync('db/todo.json', {encoding: 'utf-8'})
// console.log(typeof(todoData))
// a = [{'a':1,'b':2}]
// console.log('a', JSON.stringify(a));
// a = Buffer.from('[{a:1,b:2}]')

// console.log('a', JSON.parse(a.toString()))
const sqlite3 = require('sqlite3').verbose()
// console.log('sqlite3', sqlite3)
var db = new sqlite3.Database(
    './user.db',
    sqlite3.OPEN_READWRITE,
    function (err) {
        if (err) {
            return console.log(err.message)
        }
        console.log('connect database successfully')
    }
)
// db.run('CREATE TABLE user(name text)', function (err) {
//     if (err) {
//         return console.log(err)

//     }
//     console.log('create table user')
// })
// db.run('INSERT INTO user(name) VALUES(?)', ['Alice'], function (err) {
//     if (err) {
//         return console.log('insert data error: ', err.message)
//     }
//     console.log('insert data: ', this)
// })
// db.all('SELECT name FROM user WHERE name = ?', ['Alice'], function (err, rows) {
//     if (err) {
//         return console.log('find Alice error: ', err.message)
//     }

//     console.log('find Alice: ', rows)
// })
db.run(
    'UPDATE user SET name = ? WHERE name = ?',
    ['Alin', 'Alice'],
    function (err) {
        if (err) {
            return console.log('update data error: ', err.message)
        }
        console.log('update data: ', this)
    }
)

db.close()