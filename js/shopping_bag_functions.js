function addItemToBag() {

    var item = {};

    if(!localStorage.shoppingBag)
        localStorage.shoppingBag = JSON.stringify([]);

    var bag = JSON.parse(localStorage.shoppingBag);

    item.name = document.querySelector(".item-description h2").innerHTML;
    var price = document.querySelector(".price span").innerHTML;
    item.price = +price.substring(1);
    item.color = document.querySelector('input[name="color"]:checked').value;
    item.size = document.querySelector('input[name="size"]:checked').value;
    item.source = document.querySelector(".photo-main").src;

    bag.push(item);
    localStorage.shoppingBag = JSON.stringify(bag);
    refreshTotalValues();
}

function getTotalPrice() {

    if(localStorage.shoppingBag)
        var bag = JSON.parse(localStorage.shoppingBag);
    else return 0;

    var totalPrice = 0;

    for(var i = 0; i < bag.length; i++) {
        totalPrice += bag[i].price;
    }

    return totalPrice;
}

function getTotalQuantity() {

    if(localStorage.shoppingBag)
        var bag = JSON.parse(localStorage.shoppingBag);
    else return 0;

    var quantity = 0;

    for(var i = 0; i < bag.length; i++) {
        quantity++;
    }

    return quantity;
}

function decomposeDOMItem(DOMItem) {
    var resultItem = {};

    resultItem.name = DOMItem.getElementsByTagName("h4")[0].innerHTML;
    var price = DOMItem.getElementsByClassName("price")[0].innerHTML;
    resultItem.price = +price.substring(1);
    var color = DOMItem.getElementsByClassName("color")[0].innerHTML;
    resultItem.color = color.substring(7);
    var size = DOMItem.getElementsByClassName("size")[0].innerHTML;
    resultItem.size = size.substring(6);
    resultItem.source = DOMItem.getElementsByTagName("img")[0].src;

    return resultItem;
}

function constructDOMElementFromBagItem(item) {

    var name = document.createElement("h4");
    name.innerHTML = item.name;

    var color = document.createElement("p");
    color.classList.add("color");
    color.innerHTML = "Color: " + item.color;

    var size = document.createElement("p");
    size.classList.add("size");
    size.innerHTML = "Size: " + item.size;

    var quantity = document.createElement("p");
    quantity.classList.add("quantity");
    quantity.innerHTML = "Quantity: " + item.quantity;

    var remove = document.createElement("div");
    remove.classList.add("remove");
    var span = document.createElement("span");
    span.classList.add("red");
    span.innerHTML = "Remove item";
    remove.appendChild(span);

    var textPart = document.createElement("div");
    textPart.classList.add("text-part");
    textPart.appendChild(name);
    textPart.appendChild(color);
    textPart.appendChild(size);
    textPart.appendChild(quantity);
    textPart.appendChild(remove);


    var img = document.createElement("img");
    img.src = item.source;

    var imgOuter = document.createElement("div");
    imgOuter.classList.add("image-outer");
    imgOuter.appendChild(img);

    var price = document.createElement("div");
    price.classList.add("price");
    price.innerHTML = "&pound; " + item.price;

    var imagePart = document.createElement("div");
    imagePart.classList.add("image-part");
    imagePart.appendChild(imgOuter);
    imagePart.appendChild(price);

    var bagItem = document.createElement("div");
    bagItem.classList.add("bag-item");
    bagItem.appendChild(imagePart);
    bagItem.appendChild(textPart);

    return bagItem;
}

function removeItem(item) {


    var bag = JSON.parse(localStorage.shoppingBag);

    for(var i = 0; i < bag.length; i++) {
        var a = JSON.stringify(item);
        var b = JSON.stringify(bag[i]);
        if(JSON.stringify(item) === JSON.stringify(bag[i]))
            bag.splice(i, 1);
    }

    localStorage.shoppingBag = JSON.stringify(bag);
    refreshTotalValues();
}

function clearBag() {
    localStorage.clear();
    var items = document.querySelectorAll(".bag-item");
    for(var i = 0; i < items.length; i++) {
        items[i].parentNode.removeChild(items[i]);
    }

    var outer = document.getElementsByClassName("items_to_buy-outer")[0];
    outer.innerHTML = "";

    refreshTotalValues();
}

function refreshTotalValues() {
    var totalPrice = getTotalPrice();
    var totalQuantity = getTotalQuantity();

    var totalCostArea = document.querySelector(".total-cost");
    var totalPriceArea = document.querySelector(".total-price");
    var totalQuantityArea = document.querySelector(".total-quantity");

    if(totalCostArea) totalCostArea.innerHTML = totalPrice;
    totalPriceArea.innerHTML = totalPrice;
    totalQuantityArea.innerHTML = "(" + totalQuantity + ")";

    var buyButton = document.getElementsByClassName("buy_now-button")[0];
    if(totalQuantity === 0)
        buyButton.classList.add("button-blocked");
    else
        buyButton.classList.remove("button-blocked");
}

function buyItems() {

    if(confirm("Are you sure?") === false)
        return;

    clearBag();
    refreshTotalValues();

    var outer = document.getElementsByClassName("items_to_buy-outer")[0];
    var p = document.createElement("p");
    var thxText = document.createTextNode("Thank you for your purchase.");
    p.appendChild(thxText);
    outer.appendChild(p);
}

// function confirmBuy() {
//     var message = querySelector(".confirm-message")
//
//     message.getElementsByTagName("button");
// }