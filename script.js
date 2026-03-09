let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(product){

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(product + " added to cart 🛒");

}

function addToWishlist(product){

wishlist.push(product);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert(product + " added to wishlist ❤️");

}

function updateCartCount(){

document.getElementById("cart-count").innerText = cart.length;

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

function searchProducts(){

let input = document.getElementById("search").value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach((p)=>{

let text = p.innerText.toLowerCase();

p.style.display = text.includes(input) ? "block" : "none";

});

}

window.onload = function(){

updateCartCount();

}
