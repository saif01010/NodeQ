function printtxt(inp){
    console.log(inp)
}

function multiplyByTwo(inp, callback) {
    callback(inp*2)
}

multiplyByTwo(5,printtxt)
