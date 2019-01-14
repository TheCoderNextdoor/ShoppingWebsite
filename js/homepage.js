// when the page is ready
var productList;
$(document).ready(function () {
    // search for a specific product
    $("#searchbtn").click(function () {
        var searchTerm = $("#searchtext").val();
        var found = productList.find(function (value) {
            return value.name === searchTerm;
        })
        if (found == undefined)
            alert("product not found");
        else {
            //alert("product found")
            location.href = found.page;
        }
    });
});
