$(document).ready(function(){
    $("form").submit(function(){
        var number = String($("#mobile").val());
        var y = Number($("#year").val()) + 2000;
        var cvv = String($("#cvv").val());
        if(number.length != 10)
            alert("enter valid mobile number");
        else if(y < Number(date.getFullYear()))
            alert("card invalid");
        else if(cvv.length !=  3)
            alert("invlaid CVV")
        else
            alert("Processed!");        
    });
});