let products = JSON.parse(localStorage.getItem("products")) || []
let productsForm = document.querySelector("#productForm")
let productTable = document.querySelector("#productTable tbody")

function addProduct(){
    productTable.innerHTML = ""
    products.forEach((product,i) => {
        productTable.innerHTML +=`
        <tr>
            <th>${product.name}</th>
            <th>${product.price}</th>
            <th>${product.category}</th>
            <th><img src = "${product.image}"</th>
        <td>
            <button onclick"deleteProduct(${i})">Delete</button>
            <button onclick"editProduct(${i})">Edit</button>
        </td>
</tr>`
    });
}

function deleteProduct(i){
    products.splice(i,1)
    localStorage.setItem("products" ,JSON.stringify(products))
    addProduct()
}

function editProduct(i){
    let product = products[i]
    document.getElementById("name").value = product.name
    document.getElementById("price").value = product.price
    document.getElementById("category").value = product.category
    document.getElementById("image").value = product.image
    deleteProduct(i)
}

productsForm.addEventListener("submit" , (event) => {
    event.preventDefault()
    let newProduct = {
        name :  document.getElementById("name").value,
        price : document.getElementById("price").value,
        category : document.getElementById("category").value,
        image : document.getElementById("image").value
    }
    products.push(newProduct)
    localStorage.setItem("products",JSON.stringify(products))
    addProduct()
    productsForm.reset()
})
addProduct()