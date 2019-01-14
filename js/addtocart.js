// fix to cart being null when cleared
var cart = sessionStorage.getItem("cart")==null||undefined? [] : JSON.parse(sessionStorage.getItem("cart"));
var items=[];
// add to cart functionality
$(document).ready(function(){
    $(".item").click(function(){
        cart.push(items[this.value-1]);
        // store the cart in session storage
        window.sessionStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
        // alert(JSON.stringify(cart));
    });
    // open the cart 
    $("#viewcartbtn").click(function(){
        location.href = "cart.html";
    });
});