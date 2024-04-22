
import navbar from "../componets/navbar.js";


console.log("navbar");
document.getElementById("navbar").innerHTML = navbar();


try {
    fetch("http://localhost:3000/user?Email=hello25@gmail.com")
        .then((res) => res.json())
        .then((users) => {
            if (users.length === 0) {
            } else {
                // alert("User with this email already exists");
            }
        })
        .catch((error) => {
            console.error("Error checking user:", error);
        });
} catch (error) {
    console.log(error.massge);
}

const serverdata = (data) => {
    try {
        fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error.massge);
    }
}

const SignUpservar = (e) => {
    e.preventDefault();
    let data = {
        username: document.getElementById("Username").value,
        Email: document.getElementById("Email").value,
        Password: document.getElementById("Password").value
    };
    serverdata(data);
}

document.getElementById("signupdata").addEventListener("submit", SignUpservar);

