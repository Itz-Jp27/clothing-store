let products=[
{name:"Nike Shirt",brand:"Nike",price:1999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",description:"Premium cotton shirt"},
{name:"Nike Sports Shorts",brand:"Nike",price:1299,image:"https://soccerpost.com/cdn/shop/files/ScreenShot2024-04-29at4.25.11PM_clipped_rev_1.png?v=1717792853"},
{name:"Nike Hoodie",brand:"Nike",price:2499,image:"https://www.topfashiontf.com/cdn/shop/files/aurora-bv2973-010-phsfh001-1000.png?v=1760973904"},
{name:"Nike Sneakers",brand:"Nike",price:3999,image:"https://file.aiquickdraw.com/imgcompressed/img/compressed_a7c9025e07be618d506d670cfefc3a95.webp"},
{name:"Nike Cap",brand:"Nike",price:799,image:"https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ae4741c8-e06b-4bda-a855-a3174d4c0013/CRE+U+NK+COL+365+4.0+H86+TRUCK.png"},
{name:"Adidas Sport Tee",brand:"Adidas",price:1799,image:"https://pngtree.com/free-png-vectors/adidas-t-shirt"},
{name:"Adidas Hoodie",brand:"Adidas",price:2499,image:"https://www.nicepng.com/maxp/u2q8i1a9i1u2o0e6/"},
{name:"Adidas Sneakers",brand:"Adidas",price:3499,image:"https://www.pngplay.com/wp-content/uploads/6/Superstar-Adidas-Shoes-PNG.png"},
{name:"Adidas Shorts",brand:"Adidas",price:1299,image:"https://www.pngkey.com/maxpic/u2y3w7e6u2w7e6r5/"},
{name:"Adidas Cap",brand:"Adidas",price:699,image:"https://assets.adidas.com/images/w_600,f_auto,q_auto/7f741ee400734272aa6c91263c9aca65_faec/New_Logo_Baseball_Cap_Red_JP0396_db01_00_standard.tiff.jpg"},
{name:"Puma Hoodie",brand:"Puma",price:2499,image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/682573/82/fnd/IND/fmt/png/Essentials-No.-1-Logo-Men's-Rubber-Print-Hoodie"},
{name:"Puma T-Shirt",brand:"Puma",price:1499,image:"https://in.puma.com/in/en/pd/mens-essentials-small-logo-cotton-t-shirt/851741?srsltid=AfmBOopffOl0s28LqkT0OiPXbUTCOTotZeI3LTLc73cWUv-PduanALgZ"},
{name:"Puma Sneakers",brand:"Puma",price:2999,image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395022/01/sv01/fnd/IND/fmt/png/Park-Lifestyle-Sneakers"},
{name:"Puma Shorts",brand:"Puma",price:1299,image:"https://in.puma.com/in/en/pd/mens-10-shorts/682598?srsltid=AfmBOopP9izSxb7HfqTzJ_lo2vc4fXlhWFQZUsfV8Ea_BMjqmhsTSD8a"},
{name:"Puma Cap",brand:"Puma",price:699,image:"https://vn.puma.com/vn/en/pd/essentials-no.-1-logo-patch-baseball-cap/025997.html"},
{name:"Zara Jacket",brand:"Zara",price:3499,image:"https://www.zara.com/in/en/faux-shearling-jacket-with-hood-p05070504.html"},
{name:"Zara Shirt",brand:"Zara",price:1999,image:"https://www.zara.com/in/en/comfort-seersucker-shirt-p04309171.html"},
{name:"Zara Jeans",brand:"Zara",price:2999,image:"https://www.zara.com/in/en/straight-jeans-p04551600.html"},
{name:"Zara Trousers",brand:"Zara",price:2499,image:"https://static.zara.net/assets/public/8856/6a18/a37f42bea465/47ba3ce51556/04337999800-e1/04337999800-e1.jpg?ts=1753725354176&w=578&f=auto"},
{name:"Zara Hoodie",brand:"Zara",price:2699,image:"https://www.zara.com/in/en/basic-hoodie-p03199630.html"},
{name:"H&M Casual Tee",brand:"H&M",price:1299,image:"https://www2.hm.com/en_in/productpage.1032522113.html?srsltid=AfmBOor1ekt3XtBU-3kuPY5EYAgNWANReUUbHiH3PnCFwRBx0Uzu0jCP"},
{name:"H&M Jeans",brand:"H&M",price:2299,image:"https://image.hm.com/assets/hm/8b/ea/8bea8bac07ed75596e5597f6d2997f07cfd81fac.jpg"},
{name:"H&M Hoodie",brand:"H&M",price:1999,image:"https://images.unsplash.com/photo-1600185364095-1c8f7b2d1a3c",description:"Comfy hoodie"},
{name:"H&M Trousers",brand:"H&M",price:2199,image:"https://www2.hm.com/en_in/productpage.1074406029.html?srsltid=AfmBOoq3CBgIpBjj4WYLvOeqWkuvsXM0GcIwhXkvtzFmW8c6JIkOAfhS"},
{name:"Allen Solly Formal Shirt",brand:"Allen Solly",price:1899,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Office wear shirt"},
{name:"Allen Solly Trousers",brand:"Allen Solly",price:2399,image:"https://images.unsplash.com/photo-1600185364135-1f8b7c0a2d3e",description:"Formal trousers"},
{name:"Allen Solly jacket",brand:"Allen Solly",price:3999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250818/xe8G/68a309678bfb9009ac86e4ab/-473Wx593H-702118954-beige-MODEL.jpg",description:"Stylish blazer"},
{name:"Max Hoodie",brand:"Max",price:1999,image:"https://justmini.in/cdn/shop/files/2_1_7fb5c927-2861-4138-a69d-3b42ab684d59.png?v=1761909477&width=3840"},
{name:"Max T-Shirt",brand:"Max",price:1499,image:"https://spankersindia.com/products/mad-max?srsltid=AfmBOorbl6dsiOd0sjvdlhb0VjBpLkmZzT7jMn0DSb8nUwNgMUfLcsua"},
{name:"Max Jeans",brand:"Max",price:2499,image:"https://images.unsplash.com/photo-1600185364135-3d8f7b2c1a3d",description:"Slim fit jeans"},
{name:"Snitch Overshirt",brand:"Snitch",price:1899,image:"https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1756388683.png?v=1756388750&quality=80"},
{name:"Snitch Hoodie",brand:"Snitch",price:2199,image:"https://static.vecteezy.com/system/resources/thumbnails/052/214/014/small/dark-grey-stylish-hoodie-isolated-on-transparency-background-png.png"},
{name:"Louis Philippe jacket",brand:"Louis Philippe",price:5999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20250104/pSQQ/677868bec148fa1b3075a8de/-473Wx593H-701010401-olive-MODEL.jpg",description:"Elegant blazer"},
{name:"Louis Philippe Shirt",brand:"Louis Philippe",price:2499,image:"https://images.unsplash.com/photo-1600185364095-3c7d8b1f2e3c",description:"Premium formal shirt"},
{name:"Trends Urban Jacket",brand:"Trends",price:2299,image:"https://images.unsplash.com/photo-1516822003754-cca485356ecb",description:"Urban stylish jacket"},
{name:"Trends T-Shirt",brand:"Trends",price:1299,image:"https://images.unsplash.com/photo-1600185364095-2c7f8b1d2e3f",description:"Casual tee"},
{name:"Trends Jeans",brand:"Trends",price:2399,image:"https://images.unsplash.com/photo-1600185364135-3c8d7b2f1a2d",description:"Denim jeans"}
];

let cart=[]

let brandBox=document.getElementById("brand-filters")

let brands=[...new Set(products.map(p=>p.brand))]

brands.forEach(b=>{
let btn=document.createElement("button")
btn.innerText=b
btn.onclick=()=>filterBrand(b)
brandBox.appendChild(btn)
})

function showProducts(list){

let box=document.getElementById("products")
let empty=document.getElementById("empty")

box.innerHTML=""

if(list.length===0){
empty.style.display="block"
return
}else{
empty.style.display="none"
}

list.forEach((p,i)=>{

box.innerHTML+=`

<div class="product">

<img src="${p.image}" onclick="quickView(${i})">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<input type="number" min="1" max="8" value="1" id="q${i}">

<button onclick="addCart(${i})">Add to Cart</button>

</div>

`

})

}

function quickView(i){

let q=document.getElementById("quickview")

document.getElementById("q-img").src=products[i].image
document.getElementById("q-name").innerText=products[i].name
document.getElementById("q-price").innerText="₹"+products[i].price

q.style.display="flex"

}

function closeQuick(){

document.getElementById("quickview").style.display="none"

}

function addCart(i){

let qty=parseInt(document.getElementById("q"+i).value)

if(qty>8){
alert("Out of Stocks")
return
}

let existing=cart.find(item=>item.name===products[i].name)

if(existing){

existing.qty+=qty

if(existing.qty>8){
existing.qty=8
alert("Out of Stocks")
}

}else{

cart.push({...products[i],qty})

}

updateCart()

toast()

}

function updateCart(){

let box=document.getElementById("cart-items")

let total=0

box.innerHTML=""

cart.forEach((p,i)=>{

box.innerHTML+=`

<div class="cart-item">

<b>${p.name}</b>

<div class="qty">

<button onclick="dec(${i})">-</button>

${p.qty}

<button onclick="inc(${i})">+</button>

</div>

<p>₹${p.price*p.qty}</p>

<button onclick="removeItem(${i})">Remove</button>

</div>

`

total+=p.price*p.qty

})

document.getElementById("total").innerText="Total ₹"+total
document.getElementById("cart-count").innerText=cart.length

}

function inc(i){

if(cart[i].qty>=8){
alert("Out of Stocks")
return
}

cart[i].qty++

updateCart()

}

function dec(i){

if(cart[i].qty>1){
cart[i].qty--
}

updateCart()

}

function removeItem(i){

cart.splice(i,1)

updateCart()

}

function toggleCart(){

document.getElementById("cart").classList.toggle("open")

}

function toast(){

let t=document.getElementById("toast")

t.style.display="block"

setTimeout(()=>{
t.style.display="none"
},2000)

}

function searchProducts(){

let val=document.getElementById("search").value.toLowerCase()

let f=products.filter(p=>p.name.toLowerCase().includes(val))

showProducts(f)

}

function filterBrand(b){

showProducts(products.filter(p=>p.brand===b))

}

function sortProducts(t){

let arr=[...products]

if(t==="low") arr.sort((a,b)=>a.price-b.price)

if(t==="high") arr.sort((a,b)=>b.price-a.price)

showProducts(arr)

}

function scrollToProducts(){

document.getElementById("products").scrollIntoView({behavior:"smooth"})

}

window.onload=function(){

setTimeout(()=>{
document.getElementById("loader").style.display="none"
},1000)

}

showProducts(products)





