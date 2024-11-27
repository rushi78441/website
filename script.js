function checkphone(){
    var phonenumber = document.getElementById("Phone-number").value;
    if(phonenumber > 9999999999){
        alert("Phone number is not valid");
    }
    else if(isNaN(phonenumber)){
        alert("Phone number is not valid");
    }
}