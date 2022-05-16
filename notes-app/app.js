//const fs = require('fs');// file system module fs is getting imported by node 
//const printd = require('./myNotes.js');
//fs.writeFileSync("notes.txt", "this file was created by node.js") // to write to a file 

//we can also append to an existing file as well 
//fs.appendFileSync('notes.txt',"This is some random append message getting appended to notes.txt file what teh hwll re we even talking about can you do it for me. please !!!!")

/*exporting user defined modules*/
//const myNotesMethod = require('./myNotes.js')
//const val = printd();
//console.log(val)

//const validator = require('validator')
// console.log(validator.isEmail('prashantrmishra@gmail.com'));
// console.table(validator.isURL("prashant.com"));
//const chalk = require('chalk')
// console.log(chalk.red.bold.inverse('prashant'))

//command = process.argv[2];
//console.log(command);
const { argv, string } = require('yargs')
const yargs = require('yargs')

//cusotmize yargs version
yargs.version('1.2.0')
//creating add command 
yargs.command({
    command:'add',
    describe:'Add new note',
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






