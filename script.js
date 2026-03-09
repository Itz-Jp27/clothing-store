// CART SYSTEM
let cart = 0;

function addToCart(){
cart++;

document.getElementById("cart-count").innerText = cart;

showNotification("Item added to cart 🛒");
}


// DARK MODE WITH SAVE
function toggleDarkMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}


// LOAD SAVED THEME
window.onload = function(){

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}

}


// NOTIFICATION POPUP
function showNotification(message){

let note = document.createElement("div");

note.innerText = message;

note.style.position = "fixed";
note.style.bottom = "20px";
note.style.right = "20px";
note.style.background = "black";
note.style.color = "white";
note.style.padding = "10px 20px";
note.style.borderRadius = "8px";

document.body.appendChild(note);

setTimeout(()=>{
note.remove();
},2000);

}


// PRODUCT SEARCH
function searchProducts(){

let input = document.getElementById("search").value.toLowerCase();
let products = document.querySelectorAll(".product");

products.forEach((product)=>{

let name = product.innerText.toLowerCase();

if(name.includes(input)){
product.style.display="block";
}else{
product.style.display="none";
}

});

}


// SCROLL TO TOP
function scrollTopBtn(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
