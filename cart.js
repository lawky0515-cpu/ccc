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
            quantity: qty,
            selected: true
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


    const page =
        document.getElementById(
            "cart-page"
        );


    if (!page) return;


    page.classList.remove(
        "hidden"
    );
    document.body.classList.add(
        "cart-page-open"
    );


    if(window.currentCategory !== undefined){
        window.currentCategory = "";
    }


    document
        .querySelectorAll(
            ".category-btn"
        )
        .forEach(function(btn){
            btn.classList.remove(
                "active"
            );
        });


    const productsContainer =
        document.getElementById(
            "products-container"
        );


    if(productsContainer){
        productsContainer.innerHTML = "";
    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });


    renderCart();


}
// ======================
// Close Cart
// ======================
function closeCart() {


    const page =
        document.getElementById(
            "cart-page"
        );


    if (page) {


        page.classList.add(
            "hidden"
        );
        document.body.classList.remove(
            "cart-page-open"
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

window.toggleCartItemSelected = function(index) {
    if (!cart[index]) return;
    cart[index].selected =
        !cart[index].selected;
    renderCart();
};

window.toggleSelectAllCart = function() {
    if(cart.length === 0) return;
    const allSelected =
        cart.every(item =>
            item.selected !== false
        );
    cart.forEach(item => {
        item.selected =
            !allSelected;
    });
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
    const selectAllBtn =
        document.getElementById(
            "select-all-cart"
        );
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
        if(selectAllBtn){
            selectAllBtn.classList.remove(
                "selected"
            );
        }
        return;
    }
    if(selectAllBtn){
        selectAllBtn.classList.toggle(
            "selected",
            cart.every(item =>
                item.selected !== false
            )
        );
    }
    let total = 0;
    container.innerHTML =
        cart.map((item, index) => {
            const subtotal =
                item.price *
                item.quantity;
            if(item.selected !== false){
                total += subtotal;
            }
            return `
            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:10px;
                border-bottom:1px solid #eee;
                gap:10px;
            ">
                <button
                    onclick="toggleCartItemSelected(${index})"
                    aria-label="Select item"
                    style="
                    width:22px;
                    height:22px;
                    border-radius:50%;
                    border:2px solid ${item.selected !== false ? "#facc15" : "#9ca3af"};
                    background:${item.selected !== false ? "#facc15" : "transparent"};
                    color:#000;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex:0 0 auto;
                    ">
                    ${item.selected !== false ? '<i class="fa-solid fa-check" style="font-size:12px;"></i>' : ""}
                </button>
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    style="
                    width:58px;
                    height:58px;
                    border-radius:8px;
                    object-fit:cover;
                    background:#000;
                    flex:0 0 auto;
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
                    <div class="mini-qty-control">
                        <span>Qty</span>
                        <button onclick="changeQty(${index},-1)">-</button>
                        <strong>${item.quantity}</strong>
                        <button onclick="changeQty(${index},1)">+</button>
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
// ======================
// Copy Cart
// ======================
window.copyCart = function(){


    if(cart.length === 0){


        alert("Cart Empty");


        return;


    }


    let text = "CCC Stationery Order\n\n";


    cart.forEach(item => {


        text +=
            `${item.name} (${item.color || "Default"}) x${item.quantity}\n`;


    });


    const total = cart.reduce(
        (sum,item)=>
        sum + item.price * item.quantity,
        0
    );


    text += `\nTotal: RM ${total.toFixed(2)}`;


    navigator.clipboard.writeText(text);


    alert("Copied Successfully");


};


// ======================
// Download PDF quotation
// ======================
window.downloadPDF = function(){
    const selectedItems =
        cart.filter(item =>
            item.selected !== false
        );

    if(selectedItems.length === 0){
        alert("Please select item");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit:"mm",
        format:"a4"
    });

    function money(value){
        return `RM ${Number(value || 0).toFixed(2)}`;
    }

    function drawTemplate(){
        doc.setTextColor(0,0,0);
        doc.setDrawColor(0,0,0);

        doc.setFont("helvetica","bold");
        doc.setFontSize(25);
        doc.text("QUOTATION", 13, 23);

        doc.setFontSize(15);
        doc.text("COCOCROWN JAYA", 13, 37);

        doc.setFont("helvetica","normal");
        doc.setFontSize(8.5);
        doc.text("No 95A,", 13, 45);
        doc.text("Lot 255, Block 3, Jalan Club", 13, 50);
        doc.text("95000 Sri Aman, Sarawak", 13, 55);
        doc.setTextColor(0,0,238);
        doc.text("cococrownjaya@gmail.com", 13, 60);

        doc.setTextColor(150,43,43);
        doc.setFont("helvetica","bold");
        doc.setFontSize(8.5);
        doc.text("DATE:", 108, 45);
        doc.text("QUOTE #", 106, 50);
        doc.text("QUOTE TO:", 105, 55);

        doc.setTextColor(0,0,0);
        doc.setFontSize(11);
        doc.text("ITEM", 20, 83);

        doc.setFontSize(8.2);
        doc.text("NO.", 13, 93);
        doc.text("DESCRIPTION", 20, 91.5);
        doc.text("QTY", 111, 91.5, {
            align:"center"
        });
        doc.text("U/ PRICE", 128, 91.5, {
            align:"center"
        });
        doc.text("AMOUNT", 166, 91.5, {
            align:"center"
        });

        doc.setFont("helvetica","normal");
        doc.setFontSize(9);

        selectedItems.slice(0, 13).forEach((item, index) => {
            const rowY = 99 + index * 7.6;
            const subtotal =
                item.price * item.quantity;
            const lines =
                doc.splitTextToSize(
                    item.name,
                    80
                ).slice(0, 2);

            doc.text(String(index + 1), 13, rowY);
            doc.text(lines, 20, rowY);
            doc.text(String(item.quantity), 111, rowY, {
                align:"center"
            });
            doc.text(money(item.price), 134, rowY, {
                align:"right"
            });
            doc.text(money(subtotal), 193, rowY, {
                align:"right"
            });
        });

        const grandTotal =
            selectedItems.reduce(
                (sum,item)=>
                sum + item.price * item.quantity,
                0
            );

        doc.setFont("helvetica","normal");
        doc.setFontSize(9);

        doc.text(
            "Make all checks payable to COCOCROWN JAYA.",
            13,
            192
        );
        doc.text(
            "For questions, contact Angela at",
            13,
            197
        );
        doc.text(
            "0146835922 or cococrownjaya@gmail.com",
            13,
            202
        );

        doc.setFont("helvetica","bold");
        doc.text("THANK YOU FOR YOUR BUSINESS!", 13, 210);

        doc.setFont("helvetica","bold");
        doc.text("SUBTOTAL", 105, 199);
        doc.setFont("helvetica","normal");
        doc.text(money(grandTotal), 193, 199, {
            align:"right"
        });

        doc.setFillColor(242,242,242);
        doc.rect(100, 203, 98, 8, "F");
        doc.setDrawColor(170,170,170);
        doc.setLineWidth(0.15);
        doc.line(160, 196, 160, 211);
        doc.line(100, 203, 198, 203);
        doc.line(100, 211, 198, 211);

        doc.setFont("helvetica","bold");
        doc.text("TOTAL", 115, 208);
        doc.text(money(grandTotal), 193, 208, {
            align:"right"
        });

        doc.setDrawColor(0,0,0);
        doc.setLineWidth(0.2);
        doc.line(12, 248, 100, 248);
        doc.line(123, 248, 198, 248);

        doc.setFont("helvetica","bold");
        doc.setFontSize(14);
        doc.text("COCOCROWN JAYA", 33, 244);
        doc.setFont("helvetica","normal");
        doc.setFontSize(7.5);
        doc.text("No 93A, Lot 255, Block 3, Jalan Club,", 33, 249);
        doc.text("95000 Sri Aman, Sarawak", 39, 253);
        doc.text("Cococrown Jaya", 43, 257);

        doc.setFontSize(9);
        doc.text(
            "Authorised Signature & Stamp",
            160,
            255,
            { align:"center" }
        );

        doc.setFont("helvetica","normal");
        doc.setFontSize(8);
        doc.text("Cococrown Jaya", 13, 284);

        if(selectedItems.length > 13){
            doc.text(
                `Only first 13 items fit this template.`,
                12,
                216
            );
        }

        doc.save(
            "quotation.pdf"
        );
    }

    drawTemplate();

};
