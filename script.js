// JScript source code

//VARIABLES
var errorForFName = true;
var errorForLName = true;
var errorForEmail = true;
var errorForMobile = true;
var fnameValidity;
var lnameValidity;
var emailValidity;
var mobValidity;


// VARIABLES INILIZATION
fnameValidity = document.getElementById('fnameValidity');
lnameValidity = document.getElementById('lnameValidity');
emailValidity = document.getElementById('emailValidity');
mobValidity = document.getElementById('mobValidity');


//functions
// function to check validation of FirstName
function checkFName(val) {

    var regex = /^[a-zA-Z]+$/;
    if (regex.test(val)) {
        errorForFName = false;
        fnameValidity.classList.add("visible");
        fnameValidity.classList.add("hidden");
    }
    else {
        fnameValidity.classList.remove("hidden");
        fnameValidity.classList.add("visible");

        errorForFName = true;
    }
}

// function to check validation of LastName
function checkLName(val) {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(val)) {
        errorForLName = false;
        lnameValidity.classList.add("visible");
        lnameValidity.classList.add("hidden");
    }
    else {
        errorForLName = true;
        lnameValidity.classList.remove("hidden");
        lnameValidity.classList.add("visible");

    }
}

// function to check validation of Email
function checkEmail(val) {
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regex.test(val)) {
        errorForEmail = false;
        emailValidity.classList.add("visible");
        emailValidity.classList.add("hidden");
    }
    else {
        errorForEmail = true;
        emailValidity.classList.remove("hidden");
        emailValidity.classList.add("visible");

    }
}
// function to check validation of Mobile
function checkMobile(val) {
    var regex = /^[789]\d{9}$/;
    if (regex.test(val)) {
        errorForMobile = false;
        mobValidity.classList.add("visible");
        mobValidity.classList.add("hidden");
    }
    else {
        errorForMobile = true;
        mobValidity.classList.remove("hidden");
        mobValidity.classList.add("visible");
    }
}
// function to check Form Validity
function CheckValidity() {

    if (errorForFName) {
        fnameValidity.classList.remove("hidden");
        fnameValidity.classList.add("visible");
    }
    if (errorForLName) {
        lnameValidity.classList.remove("hidden");
        lnameValidity.classList.add("visible");
    }
    if (errorForEmail) {
        emailValidity.classList.remove("hidden");
        emailValidity.classList.add("visible");

    }
    if (errorForMobile) {
        mobValidity.classList.remove("hidden");
        mobValidity.classList.add("visible");
    }
    if (errorForFName || errorForLName || errorForEmail || errorForMobile) {

        window.event.preventDefault();
    }
}