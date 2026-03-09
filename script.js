let cart=JSON.parse(localStorage.getItem("cart"))||[];

function updateCart(){

let items=document.getElementById("cart-items");
let count=document.getElementById("cart-count");
let total=document.getElementById("cart-total");

if(!items) return;

items.innerHTML="";

let sum=0;

cart.forEach((item,index)=>{

let div=document.createElement("div");

div.innerHTML=`${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">❌</button>`;

items.appendChild(div);

sum+=item.price;

});

count.innerText=cart.length;

total.innerText=sum;

localStorage.setItem("cart",JSON.stringify(cart));

}

function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function removeItem(i){

cart.splice(i,1);

updateCart();

}

function toggleCart(){

document.getElementById("cart-panel").classList.toggle("open");

}

function filterProducts(brand){

let products=document.querySelectorAll(".product");

products.forEach(p=>{

if(brand==="all"||p.classList.contains(brand)){
p.style.display="block";
}else{
p.style.display="none";
}

});
}

function searchProducts(){

let input=document.getElementById("search").value.toLowerCase();

let products=document.querySelectorAll(".product");

products.forEach(p=>{

let name=p.querySelector("h3").innerText.toLowerCase();

p.style.display=name.includes(input)?"block":"none";

});
}

function toggleTheme(){

document.body.classList.toggle("dark");

}

function quickView(name,price,img){

document.getElementById("popup").style.display="block";

document.getElementById("popup-title").innerText=name;

document.getElementById("popup-price").innerText=price;

document.getElementById("popup-img").src=img;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

let images=[
"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
"https://images.unsplash.com/photo-1445205170230-053b83016050"
];

let i=0;

setInterval(()=>{

i++;

if(i>=images.length){i=0;}

document.getElementById("slide-img").src=images[i];

},3000);

window.onload=updateCart;
