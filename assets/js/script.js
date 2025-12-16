let searchInput = document.getElementById("searchInput")
let categoryFilter = document.getElementById("categoryFilter")
let priceSort = document.getElementById("priceSort")

searchInput.addEventListener("input", updateDisplay)
categoryFilter.addEventListener("change", updateDisplay)
priceSort.addEventListener("change", updateDisplay)

