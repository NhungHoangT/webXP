const btn = document.querySelectorAll("button")
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h2").innerText;
        var productPrice = product.querySelector("span").innerText;

        addcart(productPrice, productImg, productName)
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var carItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < carItem.length; i++) {
        var productT = document.querySelectorAll(".titled");
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong rõ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"> <img width="100px" src="' + productImg + '" alt=""><span class="titled">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width:40px ;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart_delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    //console.log(cartTable);
    cartTable.append(addtr);

    carttotal();
    deleteCart();
}


function carttotal() {
    var carItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    for (var i = 0; i < carItem.length; i++) {
        var inputValue = carItem[i].querySelector("input").value
        var productPrice = carItem[i].querySelector(".prices").innerHTML
        totalA = inputValue * productPrice * 1000
            //totalB = totalA.toLocaleString('de-DE')
            //console.log(totalB)
        totalC = totalC + totalA
            //totalD = totalC.toLocaleString('de-DE')
    }
    var carTotalA = document.querySelector(".price_total span");
    var cartPriec = document.querySelector(".cart-icon span");
    carTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPriec.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}

function deleteCart() {
    var carItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < carItem.length; i++) {
        var productT = document.querySelectorAll(".cart_delete");
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove();
            carttotal();
            console.log(cartitemR)
        })
    }
}

function inputchange() {
    var carItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < carItem.length; i++) {
        var inputValue = carItem[i].querySelector("input");
        inputValue.addEventListener("change", function() {
            carttotal()
        })
    }
}

const cartbtn = document.querySelector(".fa-times-circle");
const cartshow = document.querySelector(".fa-cart-plus");
cartshow.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "0";
})


cartbtn.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%";
})