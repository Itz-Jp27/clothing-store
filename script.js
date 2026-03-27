// PRODUCTS
let products = [
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
{name:"Allen Solly Jacket",brand:"Allen Solly",price:3999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250818/xe8G/68a309678bfb9009ac86e4ab/-473Wx593H-702118954-beige-MODEL.jpg",description:"Stylish blazer"},
{name:"Max Hoodie",brand:"Max",price:1999,image:"https://images.unsplash.com/photo-1520975693419-74a1a3f3c8b0",description:"Comfort hoodie"},
{name:"Max T-Shirt",brand:"Max",price:1499,image:"https://images.unsplash.com/photo-1600185364095-3c8f7b1d2e3f",description:"Casual t-shirt"},
{name:"Max Jeans",brand:"Max",price:2499,image:"https://images.unsplash.com/photo-1600185364135-3d8f7b2c1a3d",description:"Slim fit jeans"},
{name:"Snitch Overshirt",brand:"Snitch",price:1899,image:"https://images.unsplash.com/photo-1520975928316-56d90d1a7a2a",description:"Trendy overshirt"},
{name:"Snitch Hoodie",brand:"Snitch",price:2199,image:"https://images.unsplash.com/photo-1600185364135-2d9b8c0a1c2f",description:"Comfy hoodie"},
{name:"Louis Philippe Jacket",brand:"Louis Philippe",price:5999,image:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20250104/pSQQ/677868bec148fa1b3075a8de/-473Wx593H-701010401-olive-MODEL.jpg",description:"Elegant blazer"},
{name:"Louis Philippe Shirt",brand:"Louis Philippe",price:2499,image:"https://images.unsplash.com/photo-1600185364095-3c7d8b1f2e3c",description:"Premium formal shirt"},
{name:"Trends Urban Jacket",brand:"Trends",price:2299,image:"https://images.unsplash.com/photo-1516822003754-cca485356ecb",description:"Urban stylish jacket"},
{name:"Trends T-Shirt",brand:"Trends",price:1299,image:"https://images.unsplash.com/photo-1600185364095-2c7f8b1d2e3f",description:"Casual tee"},
{name:"Trends Jeans",brand:"Trends",price:2399,image:"https://images.unsplash.com/photo-1600185364135-3c8d7b2f1a2d",description:"Denim jeans"}
].map((product, index) => ({
  id: index,
  ...product
}));

let cart = [];
let clicks = {};
let currentList = [...products];
let searchHistory = {};
let lastRecommendationIds = [];

const storageKeys = {
  cart: "stylecart-cart",
  clicks: "stylecart-clicks",
  searches: "stylecart-searches"
};

function formatPrice(price){
  return "Rs. " + price;
}

function loadState(key, fallback){
  try{
    let raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(error){
    return fallback;
  }
}

function saveState(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

window.onload = () => {
  try{
    let loader = document.getElementById("loader");
    let cartBox = document.getElementById("cart");
    cart = loadState(storageKeys.cart, []);
    clicks = loadState(storageKeys.clicks, {});
    searchHistory = loadState(storageKeys.searches, {});
    if(loader) loader.style.display = "none";
    if(cartBox){
      cartBox.addEventListener("click", function(e){
        e.stopPropagation();
      });
    }

    initBrands();
    showProducts(products);
    loadDefaultRecommendations();
    updateCart();
  }catch(err){
    console.error("INIT ERROR:", err);
  }
};

document.addEventListener("click", function(e){
  let cartBox = document.getElementById("cart");
  if(cartBox && cartBox.classList.contains("open") && !cartBox.contains(e.target) && !e.target.closest(".cart-icon")){
    cartBox.classList.remove("open");
  }

  let quick = document.getElementById("quickview");
  let quickBox = document.querySelector(".quick-box");

  if(quick && quick.style.display === "flex" && quickBox && !quickBox.contains(e.target)){
    quick.style.display = "none";
  }
});

function initBrands(){
  let box = document.getElementById("brand-filters");
  if(!box) return;

  let brands = [...new Set(products.map(p => p.brand))];
  box.innerHTML = "";

  brands.forEach(b => {
    let btn = document.createElement("button");
    btn.innerText = b;
    btn.onclick = () => filterBrand(b);
    box.appendChild(btn);
  });
}

function showProducts(list){
  currentList = [...list];

  let box = document.getElementById("products");
  let empty = document.getElementById("empty");

  if(!box || !empty) return;

  box.innerHTML = "";

  if(list.length === 0){
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.forEach(p => {
    box.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}" onclick="quickView(${p.id})">
      <h3>${p.name}</h3>
      <p>${formatPrice(p.price)}</p>

      <div class="qty-box">
        <button onclick="changeQty(${p.id}, -1)">-</button>
        <input type="number" value="1" min="1" max="8" id="q${p.id}">
        <button onclick="changeQty(${p.id}, 1)">+</button>
      </div>

      <button onclick="addCart(${p.id})">Add to Cart</button>
    </div>
    `;
  });
}

function changeQty(i, change){
  let input = document.getElementById("q" + i);
  if(!input) return;

  let val = parseInt(input.value || "1", 10) + change;
  if(val < 1) val = 1;
  if(val > 8) val = 8;
  input.value = val;
}

function quickView(i, fromRecommendations){
  let p = products.find(item => item.id === i);
  if(!p) return;

  let img = document.getElementById("q-img");
  let name = document.getElementById("q-name");
  let price = document.getElementById("q-price");
  let modal = document.getElementById("quickview");

  if(!img || !name || !price || !modal) return;

  img.src = p.image;
  img.alt = p.name;
  name.innerText = p.name;
  price.innerText = formatPrice(p.price);

  modal.style.display = "flex";

  trackClick(p.name);

  if(!fromRecommendations){
    showRecommendations(p);
  }
}

function closeQuick(){
  let modal = document.getElementById("quickview");
  if(modal) modal.style.display = "none";
}

function addCart(i){
  let input = document.getElementById("q" + i);
  let qty = input ? parseInt(input.value || "1", 10) : 1;
  let p = products.find(item => item.id === i);
  if(!p) return;

  if(qty < 1) qty = 1;
  if(qty > 8) qty = 8;

  let existing = cart.find(x => x.id === p.id);

  if(existing){
    if(existing.qty >= 8){
      toast("Out of stock");
      return;
    }

    if(existing.qty + qty > 8){
      existing.qty = 8;
      updateCart();
      toggleCart(true);
      toast("Out of stock");
      return;
    }

    existing.qty += qty;
  }else{
    cart.push({...p, qty});
  }

  updateCart();
  toggleCart(true);
  toast("Added to Cart");
}

function updateCart(){
  let box = document.getElementById("cart-items");
  let totalEl = document.getElementById("total");
  let countEl = document.getElementById("cart-count");
  let total = 0;
  let count = 0;

  if(!box || !totalEl || !countEl) return;

  box.innerHTML = "";

  if(cart.length === 0){
    box.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.forEach((p, i) => {
    box.innerHTML += `
    <div class="cart-item">
      <b>${p.name}</b>

      <div class="qty-box">
        <button onclick="cartQty(${i}, -1)">-</button>
        <span>${p.qty}</span>
        <button onclick="cartQty(${i}, 1)">+</button>
      </div>

      <p>${formatPrice(p.price * p.qty)}</p>
      <button onclick="removeItem(${i})">Remove</button>
    </div>
    `;

    total += p.price * p.qty;
    count += p.qty;
  });

  totalEl.innerText = "Total " + formatPrice(total);
  countEl.innerText = count;
  saveState(storageKeys.cart, cart);
  loadDefaultRecommendations();
}

function cartQty(i, change){
  if(!cart[i]) return;

  if(change > 0 && cart[i].qty >= 8){
    toast("Out of stock");
    return;
  }

  cart[i].qty += change;

  if(cart[i].qty < 1) cart[i].qty = 1;

  if(cart[i].qty > 8){
    cart[i].qty = 8;
    toast("Out of stock");
  }

  updateCart();
}

function removeItem(i){
  cart.splice(i, 1);
  updateCart();
}

function toggleCart(forceOpen){
  let cartBox = document.getElementById("cart");
  if(!cartBox) return;

  if(forceOpen === true){
    cartBox.classList.add("open");
    return;
  }

  cartBox.classList.toggle("open");
}

function toast(message){
  let t = document.getElementById("toast");
  if(!t) return;

  t.innerText = message || "Added to Cart";
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 1500);
}

function fakeCheckout(){
  toggleCart(true);
  toast("Checkout will be linked later");
}

function searchProducts(){
  let search = document.getElementById("search");
  let val = search ? search.value.toLowerCase().trim() : "";

  if(!val){
    showProducts(products);
    return;
  }

  trackSearch(val);

  let ranked = products
    .map(p => ({
      product: p,
      score: getSearchScore(p, val)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);

  showProducts(ranked);
}

function filterBrand(brand){
  let filtered = products.filter(p => p.brand === brand);
  showProducts(filtered);
}

function sortProducts(type){
  let arr = [...currentList];

  if(type === "low") arr.sort((a,b) => a.price - b.price);
  if(type === "high") arr.sort((a,b) => b.price - a.price);

  showProducts(arr);
}

function scrollToProducts(){
  let section = document.getElementById("products");
  if(section) section.scrollIntoView({behavior:"smooth"});
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

function trackClick(name){
  if(!clicks[name]) clicks[name] = 0;
  clicks[name]++;
  saveState(storageKeys.clicks, clicks);
}

function trackSearch(query){
  if(!searchHistory[query]) searchHistory[query] = 0;
  searchHistory[query]++;
  saveState(storageKeys.searches, searchHistory);
}

function getSearchScore(product, query){
  let score = 0;
  let name = product.name.toLowerCase();
  let brand = product.brand.toLowerCase();
  let description = product.description.toLowerCase();
  let words = query.split(/\s+/).filter(Boolean);
  let clickBoost = clicks[product.name] || 0;
  let cartItem = cart.find(item => item.id === product.id);
  let cartBoost = cartItem ? cartItem.qty * 3 : 0;

  if(name === query) score += 120;
  if(brand === query) score += 90;
  if(name.startsWith(query)) score += 60;
  if(brand.startsWith(query)) score += 45;
  if(name.includes(query)) score += 35;
  if(brand.includes(query)) score += 25;
  if(description.includes(query)) score += 15;

  words.forEach(word => {
    if(name.includes(word)) score += 18;
    if(brand.includes(word)) score += 14;
    if(description.includes(word)) score += 8;
  });

  score += clickBoost * 5;
  score += cartBoost;

  return score;
}

function getRecommendations(product){
  let ranked = products
    .filter(p => p.id !== product.id)
    .map(p => ({
      product: p,
      score: getRecommendationScore(product, p)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(item => item.product);

  return ranked;
}

function getRecommendationScore(baseProduct, candidate){
  let score = 0;
  let clickBoost = clicks[candidate.name] || 0;
  let baseClickBoost = clicks[baseProduct.name] || 0;
  let cartBrands = cart.filter(item => item.brand === candidate.brand).reduce((sum, item) => sum + item.qty, 0);
  let priceGap = Math.abs(baseProduct.price - candidate.price);

  if(candidate.brand === baseProduct.brand) score += 45;
  if(candidate.name.toLowerCase().includes("hoodie") && baseProduct.name.toLowerCase().includes("hoodie")) score += 20;
  if(candidate.name.toLowerCase().includes("shirt") && baseProduct.name.toLowerCase().includes("shirt")) score += 20;
  if(candidate.name.toLowerCase().includes("jeans") && baseProduct.name.toLowerCase().includes("jeans")) score += 20;
  if(candidate.name.toLowerCase().includes("jacket") && baseProduct.name.toLowerCase().includes("jacket")) score += 20;
  if(candidate.name.toLowerCase().includes("sneakers") && baseProduct.name.toLowerCase().includes("sneakers")) score += 20;
  if(candidate.name.toLowerCase().includes("shorts") && baseProduct.name.toLowerCase().includes("shorts")) score += 20;
  if(candidate.name.toLowerCase().includes("cap") && baseProduct.name.toLowerCase().includes("cap")) score += 20;

  if(priceGap <= 500) score += 25;
  else if(priceGap <= 1000) score += 12;

  score += clickBoost * 6;
  score += baseClickBoost * 2;
  score += cartBrands * 8;

  return score;
}

function showRecommendations(product){
  let rec = getRecommendations(product);
  let box = document.getElementById("recommendations");
  if(!box) return;

  let nextIds = rec.map(p => p.id);
  if(JSON.stringify(nextIds) === JSON.stringify(lastRecommendationIds)){
    return;
  }

  lastRecommendationIds = nextIds;

  box.innerHTML = "";

  rec.forEach(p => {
    box.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}" onclick="quickView(${p.id}, true)">
      <h3>${p.name}</h3>
      <p>${formatPrice(p.price)}</p>
      <button onclick="addCart(${p.id})">Add to Cart</button>
    </div>
    `;
  });
}

function loadDefaultRecommendations(){
  let box = document.getElementById("recommendations");
  if(!box) return;

  let ranked = [...products]
    .map(p => ({
      product: p,
      score: (clicks[p.name] || 0) * 6 + getCartBrandBoost(p.brand)
    }))
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);

  let defaults = ranked.some(p => (clicks[p.name] || 0) > 0) || cart.length > 0
    ? ranked.slice(0, 4)
    : products.slice(0, 4);

  lastRecommendationIds = defaults.map(p => p.id);

  box.innerHTML = "";

  defaults.forEach(p => {
    box.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}" onclick="quickView(${p.id}, true)">
      <h3>${p.name}</h3>
      <p>${formatPrice(p.price)}</p>
      <button onclick="addCart(${p.id})">Add to Cart</button>
    </div>
    `;
  });
}

function getCartBrandBoost(brand){
  return cart
    .filter(item => item.brand === brand)
    .reduce((sum, item) => sum + item.qty * 5, 0);
}
