let cart=JSON.parse(localStorage.getItem("cart"))||[];

let table=document.getElementById("cart-table");

let total=0;

cart.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>₹${item.price}</td>

<td><button onclick="removeItem(${index})">Remove</button></td>

</tr>

`;

total+=item.price;

});

document.getElementById("total").innerText=total;

function removeItem(i){

cart.splice(i,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
