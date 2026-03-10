// Products array with 50+ products for all brands
let products=[
{name:"Nike Air Shirt",brand:"Nike",price:1999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",description:"Premium cotton shirt"},
{name:"Nike Sports Shorts",brand:"Nike",price:1499,image:"https://images.unsplash.com/photo-1517841905240-472988babdf9",description:"Comfortable gym shorts"},
{name:"Adidas Sport Tee",brand:"Adidas",price:1799,image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",description:"Comfort sportswear"},
{name:"Puma Hoodie",brand:"Puma",price:2499,image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Warm stylish hoodie"},
{name:"Zara Jacket",brand:"Zara",price:3499,image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",description:"Modern winter jacket"},
{name:"H&M Casual Tee",brand:"H&M",price:1299,image:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a",description:"Stylish casual t-shirt"},
{name:"Allen Solly Formal Shirt",brand:"Allen Solly",price:1899,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Office wear shirt"},
{name:"Max Hoodie",brand:"Max",price:1999,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Comfort hoodie"},
{name:"Snitch Overshirt",brand:"Snitch",price:1899,image:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a",description:"Trendy overshirt"},
{name:"Louis Philippe Blazer",brand:"Louis Philippe",price:5999,image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",description:"Elegant blazer"},
{name:"Trends Urban Jacket",brand:"Trends",price:2299,image:"https://images.unsplash.com/photo-1516822003754-cca485356ecb",description:"Urban stylish jacket"},
// ... duplicate and modify to reach 50+ products
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const brandContainer=document.getElementById("brand-filters");
const brands=[...new Set(products.map(p=>p.brand))];
brands.forEach(b=>{
const btn=document.createElement("button");
btn.innerText=b;
btn.onclick=()=>filterBrand(b);
brandContainer.appendChild(btn);
});

function displayProducts(list){
const container=document.getElementById("products");
const emptyState=document.getElementById("empty-state");
container.innerHTML="";
if(list.length===0){
emptyState.style.display="block";
}else{
emptyState.style.display="none";
list.forEach((p,index)=>{
container.innerHTML+=`
<div class="product-card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.brand}</p>
<p>₹${p.price}</p>
<p>${p.description}</p>
<label>Quantity:</label>
<input type="number" value="1" min="1" id="qty-${index}">
<button onclick="addToCart(${index})">Add to Cart</button>
</div>`;
});
}
}

displayProducts(products);

function addToCart(index){
const qty=parseInt(document.getElementById(`qty-${index}`).value)||1;
for(let i=0;i<qty;i++){cart.push(products[index]);}
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
showToast();
}

function updateCart(){
const items=document.getElementById("cart-items");
let total=0;
items.innerHTML="";
cart.forEach((p,i)=>{
items.innerHTML+=`<p>${p.name} - ₹${p.price}</p>`;
total+=p.price;
});
document.getElementById("cart-count").innerText=cart.length;
document.getElementById("total-price").innerText="Total: ₹"+total;
}

function toggleCart(){document.getElementById("cart-slider").classList.toggle("open");}
function showToast(){const toast=document.getElementById("toast");toast.style.display="block";setTimeout(()=>toast.style.display="none",2000);}
function searchProducts(){let value=document.getElementById("search").value.toLowerCase();displayProducts(products.filter(p=>p.name.toLowerCase().includes(value)));}
function filterBrand(brand){if(brand==="all"){displayProducts(products);return;}displayProducts(products.filter(p=>p.brand===brand));}
function sortProducts(type){let sorted=[...products];if(type==="low"){sorted.sort((a,b)=>a.price-b.price);}if(type==="high"){sorted.sort((a,b)=>b.price-a.price);}displayProducts(sorted);}
function toggleDarkMode(){document.body.classList.toggle("dark");}
function checkout(){alert("Order placed successfully!");cart=[];localStorage.removeItem("cart");updateCart();}
function scrollToProducts(){document.getElementById("products").scrollIntoView({behavior:"smooth"});}
updateCart();
