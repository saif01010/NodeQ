function reverse(inp) {

    return(inp.toString().split("").reverse().join(""));

}

function palindrome(inp) {
    if(inp === reverse(inp)){
        return true;
    }
    else{
        return false
    }
}
console.log(palindrome("racecar"))
