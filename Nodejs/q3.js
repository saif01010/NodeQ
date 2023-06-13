
function vowel(input) {

    let count=0;
    for (let i = 0; i < input.length; i++) {
        // console.log(input.charAt(i));

        let ch = input.charAt(i).toLowerCase();
        if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
            count++;
        }
    }
    return count;
}

console.log(vowel("Hello, World"))


