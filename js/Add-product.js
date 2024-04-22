
import navbar from "../componets/navbar.js";

console.log("navbar");
document.getElementById("navbar").innerHTML = navbar();




const serverdata = (data) => {
    try {
        fetch("http://localhost:3000/Products", {
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


const product = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        img: document.getElementById("img").value
    };
    serverdata(data)
}

document.getElementById("signupdata").addEventListener("submit", product);
