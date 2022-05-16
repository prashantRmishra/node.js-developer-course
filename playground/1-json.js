const book ={
    title: 'The nightingale',
    author:'christin hanna',
    jenre:'Historical fiction'
}
const fs = require('fs')
// const jsonString  = JSON.stringify(book);
// fs.writeFileSync('1-json.json',jsonString)
const bookObject = JSON.parse(fs.readFileSync('1-json.json'));
console.log(bookObject.author)