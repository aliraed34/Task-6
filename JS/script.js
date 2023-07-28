var allProducts = document.querySelectorAll("#parent div")
var cart = document.querySelector("#cart")
var btn1 = document.querySelector("#btn1")
var total = document.querySelector("total")
var ali = document.querySelector("#ali")
var totalPrice = 0


allProducts.forEach(function (item){
    item.onclick = function (){
        cart.innerHTML += item.textContent 
       totalPrice += +(item.getAttribute("price"))

       if (cart.innerHTML != "" ){
           btn1.style.display = "block";
           ali.style.display = "block";
           cart.style.display = "block";
       }
    }
})

btn1.onclick = function () {
    // console.log(totalPrice)
    document.getElementById("total").innerHTML = totalPrice;
}