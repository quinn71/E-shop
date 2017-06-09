window.addEventListener("storage", function () {

    var priceArea = document.querySelector(".bag .total-price");
    var quantityArea = document.querySelector(".bag .total-quantity");

    priceArea.innerHTML = getTotalPrice().toString();
    quantityArea.innerHTML = "(" + getTotalQuantity().toString() + ")";
});

window.addEventListener("load", function () {
    refreshTotalValues();
});