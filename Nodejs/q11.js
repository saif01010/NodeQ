const fs = require("fs")

fs.open("newFile.txt",'w',(err,f)=>{
    console.error(err)
})
