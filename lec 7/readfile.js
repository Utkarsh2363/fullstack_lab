let fs=require('fs/promises');
let path=__dirname+'/index.html';
fs.readFile(path)
.then(()=>{
    console.log(data.toString())
})
.catch((err)=>{
    console.log(err);
})