// there is a slight problem with this clear cart function
var cart = sessionStorage.getItem("cart")==null||undefined? [{itemname:"empty", price:"null"}] : JSON.parse(sessionStorage.getItem("cart"));
        var totalprice = 0;
        $(document).ready(function(){
            // calculate total price and list all items in table
            for (let index = 0; index < cart.length; index++) {
                totalprice += cart[index].price;
                $("#itemsDiv>table")
                .append("<tr><td>"+(index+1)+"</td><td>"+cart[index].itemname+"</td><td>"+cart[index].price+"</td></tr>");
            }
            // center all table data
            $("td").css("text-align", "center");
            $("#cartDiv").append("<p>Rs: "+totalprice+"</p>");
            // payment button click event handler
            $("#paymentbtn").click(function(){
                location.href = "order.html";
            });
            // clear cart and the cart variables along with sessionStorage
            $("#clearcartbtn").click(function(){
                cart = undefined;
                sessionStorage.clear();
                $("table").detach();
                $("#cartDiv").detach();
            });
        });