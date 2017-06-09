window.addEventListener("load", function () {
    var bag;

    if(localStorage.shoppingBag)
         bag = JSON.parse(localStorage.shoppingBag);
    else {
        bag = [];
        localStorage.shoppingBag = JSON.stringify([]);
    }
    var outer = document.querySelector(".items_to_buy-outer");

    for(var i = 0; i < bag.length; i++) {
        var bagItem = constructDOMElementFromBagItem(bag[i]);
        outer.appendChild(bagItem);
    }

    var removeButtons = document.getElementsByClassName("remove");
    for(var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = function () {
            if(confirm("Remove item?") === false)
                return;

            var item = this.parentNode.parentNode;
            var itemObject = decomposeDOMItem(item);
            removeItem(itemObject);
            item.parentNode.removeChild(item);
        }
    }

    var clearButton = document.getElementsByClassName("empty")[0];
    clearButton.onclick = clearBag;
    var buyButton = document.getElementsByClassName("buy_now-button")[0];
    buyButton.onclick = buyItems;

    refreshTotalValues();

});
