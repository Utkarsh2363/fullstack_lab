let fs=require('fs/promises');
let path=__dirname+'/demo.txt';

fs.writeFile(path,"learning promises in nodejs")
.then(()=>{
    console.log("file written successfully");
}).catch((err)=>{
    console.log("error occurred",err);
});