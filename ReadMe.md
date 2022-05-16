# This is Node.js course 

**What is node.js ?**

Node is a way to run the javascript on the web server as oppose to run it on the browser only.
So, basically node.js provides an **environment** (built on chrome V8 javascript engine) where javascript code can run and perform actions like reading a file , getting data from db or anyother server side operations.
So, node provide all the required library in the environment that can be used to perform those tasks easily.
It is heavily written in C++, so any thing we write in javascript in the environment provided by node.js, node.js converts or provide equivalent c++ binding of the same and the required action is performed.

## Basics of node.js

Reading values from the command line interface


```.js
command = process.argv[2]; // will have 'prashant' as value
```
In command line 

    C:\prashant_softwares\UdemyCourse\nodeJsDeveloperCourse\node.js-developer-course\notes-app> nodemon app.js prashant

Parsing values using yarg package or library

    npm install yarg@12.0.2

```js
const yargs = require('yargs')
command = process.argv[2];
console.log(command);
console.log(yargs.argv)
```
output:

```console
PS C:\prashant_softwares\UdemyCourse\nodeJsDeveloperCourse\node.js-developer-course\notes-app> nodemon app.js --title='this is the first title of the notes-app'
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js "--title=this is the first title of the notes-app"`
--title=this is the first title of the notes-app
{
  _: [],
  title: 'this is the first title of the notes-app',
  '$0': 'app.js'
}
```

## Adding custom commands using yargs

```js
const { argv, string } = require('yargs')
const yargs = require('yargs')

//cusotmize yargs version
yargs.version('1.2.0')
//creating add command 
yargs.command({
    command:'add',
    describe:'Add new note', 
    // for add we will have to provide 
    //two properties ie is title and body, if any of the property is missing
    // then we will get error in the console.
    builder:{
       title:{
        describe:'Add a new note',
        demandOption:true,
        type:'string'
       },
       body:{
           describe:'This is some body of the add method',
           demandOption:true,
           type:'string'
       }

    },
    handler:function (argv){
        console.log('Title : '+argv.title+", body : "+argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function (){
        console.log('Note is removed')
    }
})
yargs.command({
    command:'list',
    describe:'Show list of notes',
    handler:function (){
        console.log('List of notes ')
    }
})
yargs.command({
    command:'read',
    describe:'shows the content of the note',
    handler:function (){
        console.log('content of the note is showed')
    }
})
//console.log(yargs.argv) // or
yargs.parse();


```

```console
PS C:\prashant_softwares\UdemyCourse\nodeJsDeveloperCourse\node.js-developer-course\notes-app> node app.js add --title="The nightingale" --body="this is the body of the node what the hell"  
```
Output:

```console
Title : The nightingale, body : this is the body of the node what the hell
```


# Tips:

``JSON.stringify()`` takes js object and return JSON string
```js
const jsonString = Json.stringify(javascriptObject)
```

``JSON.parse()`` takes JSON string and return javascript object back

```js
const book = JSON.parse(jsonString);
```