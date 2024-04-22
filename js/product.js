
import navbar from "../componets/navbar.js";


console.log("navbar");
document.getElementById("navbar").innerHTML = navbar();



const getData = () => {
     fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
            renderData(data);
        })
}
const renderData = (data) => {
    document.getElementById("productList").innerHTML = "";

    data.forEach((product) => {
        let title = document.createElement("h4");
        title.innerHTML = product.title;
        let price = document.createElement("p");
        price.innerHTML = product.Price;
        let category = document.createElement("p");
        category.innerHTML = product.category;
        let image = document.createElement("img");
        image.src = product.image;

        let div = document.createElement("div");
        div.append(image,title,price,category);
        document.getElementById("productList").append(div);
    });
    getData()
}
