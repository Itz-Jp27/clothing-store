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

