let cart = 0;

function addToCart(){
cart++;
document.getElementById("cart-count").innerText = cart;
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}
