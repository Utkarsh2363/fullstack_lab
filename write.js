let fs=require('fs');
//console.log(_dirname);
let path=__dirname+"/demo.txt";
fs.writeFile(path,"Hello World!",(err)=>{
    if(err) 
    console.log("error");
    else
        console.log("done successfully");
});

//fs.writeFile()