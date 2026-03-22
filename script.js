// PRODUCTS
let products=[
{name:"Nike Shirt",brand:"Nike",price:1999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",description:"Premium cotton shirt"},
{name:"Nike Sports Shorts",brand:"Nike",price:1299,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20230306/7tin/640588fcaeb26924e3a40cd2/-473Wx593H-469435946-blackwhite-MODEL2.jpg",description:"Lightweight running shorts"},
{name:"Nike Hoodie",brand:"Nike",price:2499,image:"https://images.unsplash.com/photo-1600185364135-88f0c5f0a30d",description:"Comfortable hoodie"},
{name:"Nike Sneakers",brand:"Nike",price:3999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250818/hNjR/68a328bf3d468c61ab75283f/-473Wx593H-469764328-blackgrey-MODEL2.jpg",description:"Breathable sports sneakers"},
{name:"Nike Cap",brand:"Nike",price:799,image:"https://images.unsplash.com/photo-1611080625161-c46c8d5a6de0",description:"Adjustable sports cap"},
{name:"Adidas Sport Tee",brand:"Adidas",price:1799,image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",description:"Comfort sportswear"},
{name:"Adidas Hoodie",brand:"Adidas",price:2499,image:"https://images.unsplash.com/photo-1600185364095-3e8fc0f0f3ac",description:"Warm stylish hoodie"},
{name:"Adidas Sneakers",brand:"Adidas",price:3499,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250903/K5tt/68b7dfe88bfb9009acd0f602/-473Wx593H-469759186-white-MODEL.jpg",description:"Running sneakers"},
{name:"Adidas Shorts",brand:"Adidas",price:1299,image:"https://images.unsplash.com/photo-1600185364135-1b9d2f8e2b3c",description:"Breathable sports shorts"},
{name:"Adidas Cap",brand:"Adidas",price:699,image:"https://images.unsplash.com/photo-1611080625161-4f6d8d0d9f2f",description:"Adjustable sports cap"},
{name:"Puma Hoodie",brand:"Puma",price:2499,image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Warm stylish hoodie"},
{name:"Puma T-Shirt",brand:"Puma",price:1499,image:"https://images.unsplash.com/photo-1600185364095-9f5b8c0a2b1d",description:"Comfortable casual tee"},
{name:"Puma Sneakers",brand:"Puma",price:2999,image:"https://images.unsplash.com/photo-1526170375885-1a9f8c7e3b1f",description:"Sports sneakers"},
{name:"Puma Shorts",brand:"Puma",price:1299,image:"https://images.unsplash.com/photo-1600185364135-2f8b9a0a5c2d",description:"Training shorts"},
{name:"Puma Cap",brand:"Puma",price:699,image:"https://images.unsplash.com/photo-1611080625161-3a6d8b1a7f2f",description:"Adjustable cap"},
{name:"Zara Jacket",brand:"Zara",price:3499,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250919/U1ww/68cd8bb53d468c61ab0cff60/-473Wx593H-702285837-greymelange-MODEL.jpg",description:"Modern winter jacket"},
{name:"Zara Shirt",brand:"Zara",price:1999,image:"https://images.unsplash.com/photo-1600185364095-1f8b2c0e1d3f",description:"Trendy cotton shirt"},
{name:"Zara Jeans",brand:"Zara",price:2999,image:"https://images.unsplash.com/photo-1600185364135-2c8f5b0b1d3f",description:"Slim fit jeans"},
{name:"Zara Trousers",brand:"Zara",price:2499,image:"https://images.unsplash.com/photo-1600185364135-3c7d9b1c2d4f",description:"Formal trousers"},
{name:"Zara Hoodie",brand:"Zara",price:2699,image:"https://images.unsplash.com/photo-1600185364095-2d8c7e1f3b5a",description:"Casual hoodie"},
{name:"H&M Casual Tee",brand:"H&M",price:1299,image:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a",description:"Stylish casual t-shirt"},
{name:"H&M Jeans",brand:"H&M",price:2299,image:"https://images.unsplash.com/photo-1600185364135-1b9d2f8a2c1d",description:"Slim denim jeans"},
{name:"H&M Hoodie",brand:"H&M",price:1999,image:"https://images.unsplash.com/photo-1600185364095-1c8f7b2d1a3c",description:"Comfy hoodie"},
{name:"H&M Trousers",brand:"H&M",price:2199,image:"https://images.unsplash.com/photo-1600185364135-3f8d7c0b1a2f",description:"Casual trousers"},
{name:"Allen Solly Formal Shirt",brand:"Allen Solly",price:1899,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Office wear shirt"},
{name:"Allen Solly Trousers",brand:"Allen Solly",price:2399,image:"https://images.unsplash.com/photo-1600185364135-1f8b7c0a2d3e",description:"Formal trousers"},
{name:"Allen Solly jacket",brand:"Allen Solly",price:3999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250818/xe8G/68a309678bfb9009ac86e4ab/-473Wx593H-702118954-beige-MODEL.jpg",description:"Stylish blazer"},
{name:"Max Hoodie",brand:"Max",price:1999,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Comfort hoodie"},
{name:"Max T-Shirt",brand:"Max",price:1499,image:"https://images.unsplash.com/photo-1600185364095-3c8f7b1d2e3f",description:"Casual t-shirt"},
{name:"Max Jeans",brand:"Max",price:2499,image:"https://images.unsplash.com/photo-1600185364135-3d8f7b2c1a3d",description:"Slim fit jeans"},
{name:"Snitch Overshirt",brand:"Snitch",price:1899,image:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a",description:"Trendy overshirt"},
{name:"Snitch Hoodie",brand:"Snitch",price:2199,image:"https://images.unsplash.com/photo-1600185364135-2d9b8c0a1c2f",description:"Comfy hoodie"},
{name:"Louis Philippe jacket",brand:"Louis Philippe",price:5999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20250104/pSQQ/677868bec148fa1b3075a8de/-473Wx593H-701010401-olive-MODEL.jpg",description:"Elegant blazer"},
{name:"Louis Philippe Shirt",brand:"Louis Philippe",price:2499,image:"https://images.unsplash.com/photo-1600185364095-3c7d8b1f2e3c",description:"Premium formal shirt"},
{name:"Trends Urban Jacket",brand:"Trends",price:2299,image:"https://images.unsplash.com/photo-1516822003754-cca485356ecb",description:"Urban stylish jacket"},
{name:"Trends T-Shirt",brand:"Trends",price:1299,image:"https://images.unsplash.com/photo-1600185364095-2c7f8b1d2e3f",description:"Casual tee"},
{name:"Trends Jeans",brand:"Trends",price:2399,image:"https://images.unsplash.com/photo-1600185364135-3c8d7b2f1a2d",description:"Denim jeans"}
];

// GLOBAL
let cart = []
let clicks = {}

// SHOW PRODUCTS
function showProducts(list){
let box = document.getElementById("products")
box.innerHTML=""

list.forEach(p=>{
box.innerHTML += `
<div class="product">
<img src="${p.image}" onclick='quickView(${JSON.stringify(p)})'>
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick='addCart(${JSON.stringify(p)})'>Add</button>
</div>`
})
}

// QUICK VIEW
function quickView(p){
document.getElementById("q-img").src=p.image
document.getElementById("q-name").innerText=p.name
document.getElementById("q-price").innerText="₹"+p.price
document.getElementById("quickview").style.display="flex"

trackClick(p.name)
showRecommendations(p)
}

// CLOSE
function closeQuick(){
document.getElementById("quickview").style.display="none"
}

// CART
function addCart(p){
let ex=cart.find(x=>x.name===p.name)
if(ex) ex.qty++
else cart.push({...p,qty:1})
updateCart()
}

function updateCart(){
let box=document.getElementById("cart-items")
let total=0
box.innerHTML=""

cart.forEach(p=>{
box.innerHTML+=`<p>${p.name} x${p.qty}</p>`
total+=p.price*p.qty
})

document.getElementById("total").innerText="₹"+total
document.getElementById("cart-count").innerText=cart.length
}

// TOGGLE
function toggleCart(){
document.getElementById("cart").classList.toggle("open")
}

// SEARCH
function searchProducts(){
let val=document.getElementById("search").value.toLowerCase()
let f=products.filter(p=>p.name.toLowerCase().includes(val))
showProducts(f)
}

// ML
function trackClick(name){
clicks[name]=(clicks[name]||0)+1
}

function getRecommendations(p){
return products.filter(x=>x.brand===p.brand && x.name!==p.name)
}

function showRecommendations(p){
let box=document.getElementById("recommendations")
let rec=getRecommendations(p)

box.innerHTML=""
rec.forEach(r=>{
box.innerHTML+=`
<div class="product">
<img src="${r.image}">
<h3>${r.name}</h3>
<p>₹${r.price}</p>
</div>`
})
}

// INIT
window.onload=()=>{
showProducts(products)

// default rec
let box=document.getElementById("recommendations")
products.slice(0,3).forEach(p=>{
box.innerHTML+=`
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
</div>`
})

document.getElementById("loader").style.display="none"
}
