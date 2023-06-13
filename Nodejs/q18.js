
const fs = require('fs');

function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            fs.access(filePath,  (error) => {
                if (error) {
                    reject("File does not exist");
                } else {
                    resolve("File exists");
                }
            });
        },1000)
    });
}


const filePath = "text.txt";

checkFileExists(filePath)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
