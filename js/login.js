import navbar from "../componets/navbar.js";

// import navbar from "../components/navbar.js";
console.log("navbar");
document.getElementById("navbar").innerHTML = navbar();



const serverdata = (Email,Password) => {
    try {
            fetch("http://localhost:3000/user", {
                method: 'POST',
            });
    } catch (error) {
        console.log(error.massge);
    }
    }
    
    const SignUpservar = (e) => {
        e.preventDefault();
        let data = {
            Email: document.getElementById("Email").value,
            Password: document.getElementById("Password").value
        };
        serverdata(data);
    }
    
    document.getElementById("signupdata").addEventListener("submit", SignUpservar);
    