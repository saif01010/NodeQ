const fs = require("fs");


fs.unlink("newFile2.txt",(err)=>{if(err){console.log(err)}})
