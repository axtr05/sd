const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 15.49 },
];
let cart = [];

function displayCatalog() {
  document.querySelector(".catalog").innerHTML = products.map(p =>
    `<div class="product-card">
       <h3>${p.name}</h3><p>$${p.price}</p>
       <button onclick="addToCart(${p.id})">Add to Cart</button>
     </div>`
  ).join('');
}
function addToCart(id) {
  let item = products.find(p => p.id === id);
  if (item) cart.push(item);
  updateCartDisplay();
}
function updateCartDisplay() {
  let total = cart.reduce((sum, p) => sum + p.price, 0);
  document.querySelector(".cart-items").innerHTML =
    cart.map(p => `<div>${p.name} - $${p.price}</div>`).join('');
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}
function checkout() {
  if (!cart.length) return alert("Your cart is empty!");
  alert("Thank you for your purchase!");
  cart = [];
  updateCartDisplay();
} 

window.onload = displayCatalog;

// ------------------ Client-Side Validation ------------------ //
