let products=[

{brand:"zara",name:"Zara Shirt",price:1999,desc:"Slim cotton shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},

{brand:"hm",name:"H&M Hoodie",price:2499,desc:"Comfort hoodie",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},

{brand:"allen",name:"Allen Solly Shirt",price:1799,desc:"Formal slim shirt",img:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a"},

{brand:"max",name:"Max Casual Shirt",price:899,desc:"Daily wear shirt",img:"https://images.unsplash.com/photo-1521336575822-6da63fb45455"},

{brand:"louis",name:"Louis Philippe Blazer",price:4999,desc:"Premium blazer",img:"https://images.unsplash.com/photo-1520975867597-0af37a22e31a"},

{brand:"trends",name:"Trends Denim Jacket",price:2299,desc:"Stylish denim jacket",img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},

{brand:"adidas",name:"Adidas Sports Tee",price:1599,desc:"Sports performance tee",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},

{brand:"snitch",name:"Snitch Overshirt",price:1899,desc:"Trendy overshirt",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"}

];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(list){

const container=document.getElementById("products");
const empty=document.getElementById("empty-message");

container.innerHTML="";

if(list.length===0){
empty.innerText="Products coming soon!";
return;
}else{
empty.innerText="";
}

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="product ${p.brand}">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<h4>₹${p.price}</h4>

<button onclick="addToCart(${i})">Add to Cart</button>

</div>

`;

});

}

displayProducts(products);

function filterProducts(brand){

if(brand==="all"){
displayProducts(products);
}else{
displayProducts(products.filter(p=>p.brand===brand));
}

}

function searchProducts(){

let value=document.getElementById("search").value.toLowerCase();

displayProducts(products.filter(p=>p.name.toLowerCase().includes(value)));

}

function sortProducts(){

let value=document.getElementById("sort").value;

let sorted=[...products];

if(value==="low"){
sorted.sort((a,b)=>a.price-b.price);
}

if(value==="high"){
sorted.sort((a,b)=>b.price-a.price);
}

displayProducts(sorted);

}

function addToCart(i){

cart.push(products[i]);

showToast();

updateCart();

}

function updateCart(){

let items=document.getElementById("cart-items");
let total=0;

items.innerHTML="";

cart.forEach((item,index)=>{

items.innerHTML+=`

<p>${item.name} - ₹${item.price}

<button onclick="removeItem(${index})">❌</button>

</p>

`;

total+=item.price;

});

document.getElementById("cart-count").innerText=cart.length;
document.getElementById("cart-total").innerText=total;

localStorage.setItem("cart",JSON.stringify(cart));

}

function removeItem(i){

cart.splice(i,1);
updateCart();

}

function toggleCart(){

document.getElementById("cart-panel").classList.toggle("open");

}

function showToast(){

let toast=document.getElementById("toast");

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},2000);

}

updateCart();
