function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        if (randomNumber >= 5) {
            resolve(randomNumber);
        } else {
            reject("Generated number is less than 5");
        }
    });
}


getRandomNumber()
    .then((number) => {
        console.log("generated number:", number);
    })
    .catch((error) => {
        console.log("error:", error);
    });
