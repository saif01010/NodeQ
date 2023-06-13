
function calculateSum(numbers, callback) {
    let sum = 0;
    numbers.map((x) => {
        sum= sum+x;
    })
    callback(sum);
}


function displaySum(sum) {
    console.log("The sum is: " + sum);
}

const numbers = [2,4,6,8];

calculateSum(numbers, displaySum);
