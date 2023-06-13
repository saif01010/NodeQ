const fs = require("fs")

fs.appendFile("text.txt","Hello world!", (err) => {
if (err) throw err })
