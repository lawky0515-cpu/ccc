let currentProduct = null;
let selectedColor = null;
let detailQty = 1;
// Render Products
function renderProducts(productList = products) {
    const container =
        document.getElementById(
            "products-container"
        );
    if (!container) return;
    container.innerHTML = "";
    productList.forEach(product => {
        const card =
            document.createElement("div");
        card.className =
            "product-card";
        card.innerHTML = `
            <div class="product-image-container">
                <img
                    src="${product.image}"
                    alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="text-xl font-bold">
                ${product.name}
                </h3>
                <p>
                    ${product.desc}
                </p>
                <div class="product-price">
                    RM ${product.price.toFixed(2)}
                </div>
            </div>
        `;
        card.addEventListener(
            "click",
            function () {
                showDetail(
                    product.id
                );
            }
        );
        container.appendChild(
            card
        );
    });
}
// Show Product Detail
function showDetail(id) {
    const product =
        products.find(
            item =>
            item.id === id
        );
    if (!product) return;
    currentProduct =
        product;
    detailQty = 1;
    selectedColor =
        product.colors &&
        product.colors.length > 0
            ? product.colors[0].name
            : null;
    document.getElementById(
        "detail-name"
    ).textContent =
        product.name;
    document.getElementById(
        "detail-desc"
    ).textContent =
        product.desc;
    document.getElementById(
        "detail-price"
    ).textContent =
        `RM ${product.price.toFixed(2)}`;
    document.getElementById(
        "detail-qty"
    ).textContent =
        detailQty;
    document.getElementById(
        "detail-image"
    ).innerHTML = `
        <img
            src="${product.image}"
            alt="${product.name}">
    `;
    renderColorOptions();
    document
        .getElementById(
            "product-detail-modal"
        )
        .classList.remove(
            "hidden"
        );
    document.body.style.overflow = "hidden";
}
// Close Detail
window.closeDetail = function () {
    document
        .getElementById(
            "product-detail-modal"
        )
        .classList.add(
            "hidden"
        );
    document.body.style.overflow = "auto";
};
// Render Colors
function renderColorOptions() {
    const container =
        document.getElementById(
            "color-options"
        );
    if (!container) return;
    if (
        !currentProduct ||
        !currentProduct.colors
    ) {
        container.innerHTML = "";
        return;
    }
    container.innerHTML =
        currentProduct.colors
        .map(color => `
            <button
                onclick="selectColor('${color.name}')"
                style="
                padding:8px 14px;
                border:1px solid #ddd;
                border-radius:999px;
                cursor:pointer;
                background:${
                    selectedColor === color.name
                    ? '#4f46e5'
                    : '#ffffff'
                };
                color:${
                    selectedColor === color.name
                    ? '#ffffff'
                    : '#000000'
                };
                ">
                ${color.name}
            </button>
        `)
        .join("");
}
// Select Color
window.selectColor = function(color){
    selectedColor = color;
    renderColorOptions();
};
// Product Detail Quantity
window.changeDetailQty = function(delta){
    detailQty += delta;
    if(detailQty < 1){
        detailQty = 1;
    }
    document.getElementById(
        "detail-qty"
    ).textContent =
        detailQty;
};
// Add To Cart
window.addCurrentToCart = function(){

    if(!currentProduct) return;

    addToCart(
        currentProduct.id,
        selectedColor,
        detailQty
    );

    showToast(
        "Successfully Added To Cart"
    );

    closeDetail();

};
// search
let currentCategory = "all";

window.filterCategory = function(category){

    currentCategory = category;

    const buttons =
        document.querySelectorAll(
            ".category-btn"
        );

    buttons.forEach(btn => {

        btn.classList.remove(
            "active"
        );

    });

    const activeBtn =
        document.getElementById(
            "cat-" + category
        );

    if(activeBtn){

        activeBtn.classList.add(
            "active"
        );

    }

    renderProducts(
        products.filter(product =>

            category === "all"

            ||

            product.category === category

        )
    );

};
function applyFilters(){

    const keyword =
        document
        .getElementById("search-input")
        .value
        .toLowerCase();

    let filtered = products;

    if(currentCategory !== "all"){

        filtered = filtered.filter(
            product =>
            product.category === currentCategory
        );

    }

    if(keyword){

        filtered = filtered.filter(product =>

            product.name
                .toLowerCase()
                .includes(keyword)

            ||

            product.desc
                .toLowerCase()
                .includes(keyword)

        );

    }

    renderProducts(filtered);

}
function filterProducts(){

    applyFilters();

}

window.onload = function(){

    filterCategory("all");

    const searchInput =
        document.getElementById(
            "search-input"
        );

    if(searchInput){

        searchInput.addEventListener(
            "keyup",
            filterProducts
        );

    }

};
function showToast(message){

    const toast =
        document.createElement("div");

    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.top = "50%";
    toast.style.left = "50%";
    toast.style.transform =
        "translate(-50%, -50%)";

    toast.style.background =
        "rgba(0,0,0,0.9)";

    toast.style.color = "#fff";

    toast.style.padding =
        "14px 28px";

    toast.style.borderRadius =
        "12px";

    toast.style.fontSize =
        "16px";

    toast.style.fontWeight =
        "600";

    toast.style.zIndex =
        "99999";

    toast.style.whiteSpace =
        "nowrap";

    document.body.appendChild(
        toast
    );

    setTimeout(function(){

        toast.remove();

    },2000);

}
