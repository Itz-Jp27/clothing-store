let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

if(cart.length === 0){
container.innerHTML = "Your cart is empty";
}else{

cart.forEach((item)=>{

let div = document.createElement("div");

div.innerHTML = item;

container.appendChild(div);

});

}