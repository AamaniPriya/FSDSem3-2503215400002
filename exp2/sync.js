//CRUD operations
const fs = require('fs');

//create (write) a file
fs.writeFileSync('SecAstudent.txt','This is the experiment no.2 in FSD workshop','utf-8');
fs.writeFileSync('example.txt','This is the content of the example file','utf-8');

console.log('File is written successfully');

//read a file
const data = fs.readFileSync('SecAstudent.txt','utf-8');
console.log('File content is given as :',data);

//update (append) a file
fs.appendFileSync('SecAstudent.txt','\nThis is the updated content of the file','utf-8');
console.log('file is updated successfully');

//delete a file
fs.unlinkSync('example.txt');
console.log('File is deleted successfully');

//folder create
fs.mkdirSync('samplefolder');
console.log('Folder is created successfully');

//delete a folder
fs.rmdirSync('samplefolder');
console.log('Folder is deleted successfully');

//checking existence of file
if(fs.existsSync('SecAstudent.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}

if(fs.existsSync('student.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}