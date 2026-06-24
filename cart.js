// cart.js
let cart = [];
// ======================
// Add To Cart
// ======================
function addToCart(productId, color = null, qty = 1) {
    const product = products.find(
        p => p.id === productId
    );
    if (!product) return;
    const existing = cart.find(item =>
        item.id === productId &&
        item.color === color
    );
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            ...product,
            color: color,
            quantity: qty
        });
    }
    updateCartCount();
    renderCart();
}
// ======================
// Cart Counter
// ======================
function updateCartCount() {
    const total = cart.reduce(
        (sum, item) =>
        sum + item.quantity,
        0
    );
    const badge =
        document.getElementById(
            "cart-count"
        );
    if (badge) {
        badge.textContent = total;
    }
}
// ======================
// Open Cart
// ======================
function toggleCart() {
    const modal =
        document.getElementById(
            "cart-modal"
        );
    if (!modal) return;
    modal.classList.toggle(
        "hidden"
    );
    renderCart();
}
// ======================
// Close Cart
// ======================
function closeCart() {
    const modal =
        document.getElementById(
            "cart-modal"
        );
    if (modal) {
        modal.classList.add(
            "hidden"
        );
    }
}
// ======================
// Quantity +
// ======================
window.changeQty = function(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCart();
};
// ======================
// Delete Item
// ======================
window.removeItem = function(index) {
    if (!cart[index]) return;
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
};
// ======================
// Render Cart
// ======================
function renderCart() {
    const container =
        document.getElementById(
            "cart-items"
        );
    const totalPrice =
        document.getElementById(
            "total-price"
        );
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="
                text-align:center;
                padding:40px;
                color:#999;
            ">
                Cart Empty
            </div>
        `;
        if (totalPrice) {
            totalPrice.textContent =
                "RM 0.00";
        }
        return;
    }
    let total = 0;
    container.innerHTML =
        cart.map((item, index) => {
            const subtotal =
                item.price *
                item.quantity;
            total += subtotal;
            return `
            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:15px;
                border-bottom:1px solid #eee;
                gap:15px;
            ">
                <div style="flex:1;">
                    <div style="
                        font-weight:bold;
                        margin-bottom:4px;
                    ">
                        ${item.name}
                    </div>
                    <div style="
                        font-size:12px;
                        color:#666;
                    ">
                        Color:
                        ${item.color || "Default"}
                    </div>
                    <div style="
                        color:#4f46e5;
                        font-weight:bold;
                        margin-top:5px;
                    ">
                        RM ${subtotal.toFixed(2)}
                    </div>
                </div>
                <div style="
                    display:flex;
                    align-items:center;
                    gap:8px;
                ">
                    <button
                        onclick="changeQty(${index},-1)"
                        style="
                        width:34px;
                        height:34px;
                        border:1px solid #ddd;
                        border-radius:8px;
                        background:white;
                        ">
                        -
                    </button>
                    <span style="
                        min-width:24px;
                        text-align:center;
                        font-weight:bold;
                    ">
                        ${item.quantity}
                    </span>
                    <button
                        onclick="changeQty(${index},1)"
                        style="
                        width:34px;
                        height:34px;
                        border:1px solid #ddd;
                        border-radius:8px;
                        background:white;
                        ">
                        +
                    </button>
                    <button
                        <button
    onclick="removeItem(${index})"
    style="
    width:34px;
    height:34px;
    border:none;
    border-radius:50%;
    background:#ef4444;
    color:white;
    font-size:16px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    ">
    <i class="fa-solid fa-trash"></i>
</button>
                </div>
            </div>
            `;
        }).join("");
    if (totalPrice) {
        totalPrice.textContent =
            `RM ${total.toFixed(2)}`;
    }
}
// ======================
// Export
// ======================
window.toggleCart = toggleCart;
window.closeCart = closeCart;
window.addToCart = addToCart;