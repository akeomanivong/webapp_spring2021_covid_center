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

    var ddCountry = document.querySelector("#ddCountry");
    var divCountryError = document.querySelector("#divCountryError");
    if(ddCountry.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        if(txtCountry.value == ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            divCountryError.innerHTML = "Please enter which countries";
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            divCountryError.innerHTML = "";
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input")
    var invalidChars = ['&', '<', '>','#', '\'', '\"', '!', '~'];
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }


    return formIsValid;
}