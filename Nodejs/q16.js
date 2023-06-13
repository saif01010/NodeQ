function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "Saiful Islam",
            email: "saifislam@gmail.com",
            age: 20,
        };

        callback(user);
    }, 2000);
}


function displayUserData(user) {
    console.log("Name: " + user.name);
    console.log("Email: " + user.email);
    console.log("Age: " + user.age);
}

getUserData(displayUserData);
