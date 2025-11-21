const products = [
    {id: 1, name: "p1", price: 10.99},
    {id: 2, name: "p2", price: 5.49},
]
let cart = [];
function display(){
    document.querySelector(".catalog").innerHTML = products.map(p =>
        `<div class = "product-card"> <h3>${p.name}</h3> <p>$${p.price}</p>
        <button onclick = "add(${p.id})">add to cart</button></div>`
    ).join('');
}
function add(id){
    let item = products.find(p => p.id === id);
    if(item) cart.push(item);
    update();
}
function update(){
    let total = cart.reduce((sum,p) => sum + p.price,0);
    document.querySelector(".cart-item").innerHTML = cart.map(p =>
        `<div>${p.name} - $${p.price}</div>`).join('');
    document.getElementById("ttl amt").textContent = total.toFixed(2);
}
function checkout(){
    if(!cart.length) return alert("empty");
    alert("thank you");
    cart = [];
    update();
}
window.onload = display();