let cart=JSON.parse(localStorage.getItem("cart"))||[];

let table=document.getElementById("cart-table");

let total=0;

cart.forEach((item,index)=>{

let row=document.createElement("tr");

row.innerHTML=`

<td>${item.name}</td>

<td>₹${item.price}</td>

<td><button onclick="removeItem(${index})">Remove</button></td>

`;

table.appendChild(row);

total+=item.price;

});

document.getElementById("total").innerText=total;

function removeItem(i){

cart.splice(i,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}

function clearCart(){

localStorage.removeItem("cart");

location.reload();

}
