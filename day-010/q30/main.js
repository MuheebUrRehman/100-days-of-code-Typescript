"use strict";
let usernames = ["kashif", "asad", "arham", "hamza", "admin"];
usernames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});