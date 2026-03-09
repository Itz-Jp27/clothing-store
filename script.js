let products = [
{
name:"Nike Air Shirt",
brand:"Nike",
price:1999,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
description:"Premium cotton shirt"
},

{
name:"Adidas Sport Tee",
brand:"Adidas",
price:1799,
image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
description:"Comfort sportswear"
},

{
name:"Puma Hoodie",
brand:"Puma",
price:2499,
image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",
description:"Warm stylish hoodie"
},

{
name:"Zara Jacket",
brand:"Zara",
price:3499,
image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
description:"Modern winter jacket"
}
]

let cart=[]

function displayProducts(list){

let container=document.getElementById("products")
container.innerHTML=""

list.forEach((p,index)=>{

container.innerHTML+=`

<div class="product-card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>${p.brand}</p>

<p>₹${p.price}</p>

<p>${p.description}</p>

<button onclick="addToCart(${index})">Add to Cart</button>

</div>

`

})

}

displayProducts(products)

function addToCart(index){

cart.push(products[index])

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

showToast()

}

function updateCart(){

let items=document.getElementById("cart-items")
let total=0

items.innerHTML=""

cart.forEach(p=>{

items.innerHTML+=`<p>${p.name} - ₹${p.price}</p>`

total+=p.price

})

document.getElementById("cart-count").innerText=cart.length
document.getElementById("total-price").innerText="Total: ₹"+total

}

function toggleCart(){

document.getElementById("cart-slider").classList.toggle("open")

}

function showToast(){

let toast=document.getElementById("toast")

toast.style.display="block"

setTimeout(()=>{

toast.style.display="none"

},2000)

}

function searchProducts(){

let value=document.getElementById("search").value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(value))

displayProducts(filtered)

}

function filterBrand(brand){

if(brand==="all"){

displayProducts(products)

return

}

let filtered=products.filter(p=>p.brand===brand)

displayProducts(filtered)

}

function sortProducts(type){

let sorted=[...products]

if(type==="low"){

sorted.sort((a,b)=>a.price-b.price)

}

if(type==="high"){

sorted.sort((a,b)=>b.price-a.price)

}

displayProducts(sorted)

}

function toggleDarkMode(){

document.body.classList.toggle("dark")

}

function checkout(){

alert("Order placed successfully!")

cart=[]

localStorage.removeItem("cart")

updateCart()

}

function scrollToProducts(){

document.getElementById("products").scrollIntoView({behavior:"smooth"})

}

let savedCart=localStorage.getItem("cart")

if(savedCart){

cart=JSON.parse(savedCart)

updateCart()

}
let products=[

// ZARA
{brand:"zara",name:"Zara Slim Shirt",price:1999,desc:"Cotton slim shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{brand:"zara",name:"Zara Denim Jacket",price:3999,desc:"Classic denim jacket",img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
{brand:"zara",name:"Zara Hoodie",price:2499,desc:"Winter hoodie",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
{brand:"zara",name:"Zara Casual Tee",price:1299,desc:"Soft cotton t-shirt",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},

// H&M
{brand:"hm",name:"H&M Cotton Tee",price:999,desc:"Comfort t-shirt",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
{brand:"hm",name:"H&M Hoodie",price:2299,desc:"Casual hoodie",img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},
{brand:"hm",name:"H&M Jacket",price:3499,desc:"Winter jacket",img:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a"},
{brand:"hm",name:"H&M Shirt",price:1799,desc:"Formal shirt",img:"https://images.unsplash.com/photo-1520975867597-0af37a22e31a"},

// ALLEN SOLLY
{brand:"allen",name:"Allen Solly Formal Shirt",price:1899,desc:"Office wear shirt",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},
{brand:"allen",name:"Allen Solly Polo",price:1499,desc:"Smart polo",img:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a"},
{brand:"allen",name:"Allen Solly Jacket",price:3999,desc:"Elegant jacket",img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},
{brand:"allen",name:"Allen Solly Tee",price:1199,desc:"Casual t-shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},

// MAX
{brand:"max",name:"Max Casual Tee",price:799,desc:"Daily wear tee",img:"https://images.unsplash.com/photo-1520975867597-0af37a22e31a"},
{brand:"max",name:"Max Hoodie",price:1999,desc:"Comfort hoodie",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},
{brand:"max",name:"Max Denim Shirt",price:1599,desc:"Denim shirt",img:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a"},
{brand:"max",name:"Max Jacket",price:2499,desc:"Casual jacket",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},

// LOUIS PHILIPPE
{brand:"louis",name:"Louis Philippe Shirt",price:2599,desc:"Premium formal shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{brand:"louis",name:"Louis Philippe Blazer",price:5999,desc:"Elegant blazer",img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
{brand:"louis",name:"Louis Philippe Polo",price:1999,desc:"Luxury polo",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},
{brand:"louis",name:"Louis Philippe Jacket",price:4999,desc:"Formal jacket",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},

// TRENDS
{brand:"trends",name:"Trends Tee",price:899,desc:"Stylish tee",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{brand:"trends",name:"Trends Hoodie",price:1899,desc:"Warm hoodie",img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
{brand:"trends",name:"Trends Shirt",price:1299,desc:"Casual shirt",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
{brand:"trends",name:"Trends Jacket",price:2299,desc:"Urban jacket",img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},

// ADIDAS
{brand:"adidas",name:"Adidas Sports Tee",price:1599,desc:"Performance tee",img:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0"},
{brand:"adidas",name:"Adidas Hoodie",price:2999,desc:"Athletic hoodie",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"},
{brand:"adidas",name:"Adidas Jacket",price:4599,desc:"Sports jacket",img:"https://images.unsplash.com/photo-1516822003754-cca485356ecb"},
{brand:"adidas",name:"Adidas Tee",price:1299,desc:"Training shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},

// SNITCH
{brand:"snitch",name:"Snitch Overshirt",price:1899,desc:"Trendy overshirt",img:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a"},
{brand:"snitch",name:"Snitch Shirt",price:1699,desc:"Modern shirt",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{brand:"snitch",name:"Snitch Hoodie",price:2399,desc:"Street hoodie",img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
{brand:"snitch",name:"Snitch Jacket",price:3299,desc:"Urban jacket",img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"}

];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(list){
const container=document.getElementById("products");
container.innerHTML="";

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
if(brand==="all"){displayProducts(products)}
else{displayProducts(products.filter(p=>p.brand===brand))}
}

function searchProducts(){
let value=document.getElementById("search").value.toLowerCase();
displayProducts(products.filter(p=>p.name.toLowerCase().includes(value)));
}

function sortProducts(){
let val=document.getElementById("sort").value;
let sorted=[...products];

if(val==="low"){sorted.sort((a,b)=>a.price-b.price)}
if(val==="high"){sorted.sort((a,b)=>b.price-a.price)}

displayProducts(sorted);
}

function addToCart(i){
cart.push(products[i]);
updateCart();
showToast();
}

function updateCart(){
let items=document.getElementById("cart-items");
let total=0;
items.innerHTML="";

cart.forEach((item,index)=>{
items.innerHTML+=`<p>${item.name} ₹${item.price} <button onclick="removeItem(${index})">❌</button></p>`;
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
setTimeout(()=>toast.style.display="none",2000);
}

updateCart();

