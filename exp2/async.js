const fs=require('fs');

//create
fs.writeFile(
    'sample.txt','Welcome to full stack development',(err)=>{
        if(err){
            console.log('Error creating file:', err);
            return;
        }
        console.log('File created successfully!');
    }
)

fs.writeFile(
    'example.txt','Welcome',(err)=>{
        if(err){
            console.log('Error creating file:', err);
            return;
        }
        console.log('File created successfully!');
    }
)

//read
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file:', err);
        return;
    }
    console.log('File content: ');
    console.log(data);
}
)

//append
fs.appendFile('sample.txt','\nThis is an appended text.',(err)=>{
    if(err){
        console.log('Error updating file:', err);
        
    }
    else{
        console.log('File updated successfully!');
    }
}
)

//updated read
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file:', err);
        return;
    }
    console.log('Updated file content: ');
    console.log(data);
}
)


//delete
fs.unlink('example.txt',(err)=>{
    if(err){
        console.log('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});