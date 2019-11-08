function foodconfirm() {

    var confirmation= confirm("Are you sure you want to order these items?");
    if  (!confirmation) {
        alert("You are canceling your order");
        return false;
}
    

}

function newImage() {

document.getElementById("sushi").src="https://kennethvargas.rhody.dev/Images/Chicken Teriyaki.jpg";

}

function oldImage() {

document.getElementById("sushi").src="https://kennethvargas.rhody.dev/Images/Optimized-Optimized-sushi-354628_960_720 (1).jpg";

}

function validateTextbox() {
    
var box = document.getElementById("email"); 
var box2 = document.getElementById("password");    

    if (box.value === "") {
    alert("The field marked in red cannot be blank");
    box.focus();
    box.style.border="solid 3px red";
    return false; 
    }  
    if (box2.value === "") {
    alert("The field marked in red cannot be blank");
    box2.focus();
    box2.style.border="solid 3px red";
    return false;
    } else; {
    box.style.border="none"
    }    
    if (box2.value.length < 9) {
    alert("The field marked in red cannot have more than 8 charcters");
    box2.focus();
    box2.style.border="solid 3px red";
    return false;
    
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
    return (true)
    } {
    alert("You have entered an invalid email address!")
    return (false)
    }
}

    







