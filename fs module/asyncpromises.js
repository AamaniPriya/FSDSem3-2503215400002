const fs = require("fs").promises;

//create and write
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}
writeFile();

//read file
async function readFile(){
    try{
        const data =await fs.readFile("promise.txt","utf8");
        console.log("File content: ");
        console.log(data);
    }catch (error){
        console.log("Error: ",error);
    }
}

readFile();


//update
async function appendFile(){
    try{
        await fs.appendFile("promise.txt","\nThis is a new line");
        console.log("File is updated successfully");
    }
    catch(error){
        console.error("Error : ",error);
    }
}
appendFile();

//rename file
async function renamefile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("file is renamed successfully");
    }
    catch(error){
        console.error("Error : ",error);
    }
}
renamefile();

//delete
async function deletefile(){
    try{
        await fs.unlink("delete.txt");
        console.log("File deleted successfully");
    }
    catch(error){
        console.log("error : ",error);
    }
}
deletefile();