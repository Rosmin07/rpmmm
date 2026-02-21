function login(){
let sid=document.getElementById("sid").value;
localStorage.setItem("sid",sid);
window.location="student.html";
}

function placeOrder(){
let file=document.getElementById("file").files[0].name;
let type=document.getElementById("type").value;
let pages=document.getElementById("pages").value;
let time=document.getElementById("time").value;

let amount=0;
if(type=="bw") amount=pages*2;
else amount=pages*5;

let order={
file:file,
type:type,
pages:pages,
amount:amount,
status:"Pending",
time:time
}

let orders=JSON.parse(localStorage.getItem("orders"))||[];
orders.push(order);
localStorage.setItem("orders",JSON.stringify(orders));

alert("Order Placed");
}

window.onload=function(){
let table=document.getElementById("mytable");
let orders=JSON.parse(localStorage.getItem("orders"))||[];

if(table){
orders.forEach(o=>{
table.innerHTML+=
`<tr>
<td>${o.file}</td>
<td>${o.type}</td>
<td>${o.pages}</td>
<td>${o.amount}</td>
<td>${o.status}</td>
</tr>`
});
}

let staff=document.getElementById("stafftable");
if(staff){
orders.forEach((o,i)=>{
staff.innerHTML+=
`<tr>
<td>${o.file}</td>
<td><input value="${o.amount}" id="a${i}"></td>
<td>
<select id="s${i}">
<option>Pending</option>
<option>Printing</option>
<option>Ready</option>
</select>
</td>
<td><button onclick="update(${i})">Update</button></td>
</tr>`
});
}
}

function update(i){
let orders=JSON.parse(localStorage.getItem("orders"));
orders[i].amount=document.getElementById("a"+i).value;
orders[i].status=document.getElementById("s"+i).value;
localStorage.setItem("orders",JSON.stringify(orders));
alert("Updated");
}