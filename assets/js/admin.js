let products = JSON.parse(localStorage.getItem("products")) || []
let productForm = document.querySelector(".productForm")
let productTable = document.querySelector(".productTable")

productForm.addEventListener("submit" , (prevent) => {
    prevent.preventDefault()
    const product = {
        name : document.getElementById("name").value,
        price : document.getElementById("price").value,
        category : document.getElementById("category").value,
        image : document.getElementById("image").value,
    }
})
