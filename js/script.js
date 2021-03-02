function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes"){
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add("invisible");
    }
}

function validateForm(){
    var dob = document.querySelector("#txtDob");
    var divDobError = document.querySelector("#divDobError");
    var formIsValid = true;
    if(dob.value == ""){
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The Date of Birth cannot be empty";
        dob.classList.add("hasError");
        formIsValid = false;
    }
    else{
        var dobDate = new Date(dob.value);
        var todayDate = new Date();
        if(dobDate >= todayDate){
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The Date of Birth must be before today's date";
            dob.classList.add("hasError");
            formIsValid = false;
        }
        else{
            divDobError.classList.add("invisible");
            divDobError.innerHTML = "";
            dob.classList.remove("hasError");
        }
    }


    return formIsValid;
}