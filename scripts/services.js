let services = [];

// create constructor
function Service(description, price) {
    this.description = description;
    this.price = price;
}



// valid or not
function isValid2() {
    let validation = true;

    let description = $("#txtDescription").val();
    let price = $("#txtPrice").val();

    if (description === "") {
        $("#notifications2").addClass("alert-danger").text("Insert a valid description").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtDescription").addClass("bg-red");
        validation = false;
    } 
console.log(price);
    if (price === "") {
        $("#notifications2").removeClass("alert-success").text("Insert a valid price").addClass("alert-danger").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtPrice").addClass("bg-red");
        validation = false;
    } 


    return validation;

}

// make register function
function register2() {
    if (isValid2()) {
        
        let inputDescription = $("#txtDescription").val();
        let inputPrice = $("#txtPrice").val();

        let newService = new Service(inputDescription, inputPrice);
        services.push(newService);
        saveArray(newService);
        
        
        $("#txtPrice").removeClass("bg-red");
        $("#notifications2").removeClass("alert-danger").addClass("alert-success").text("Service registered successfully!").fadeIn(1000).delay(2000).slideUp(1000);
        
        
        $("#txtDescription, #txtPrice").val("");

        
        
    }
}
function addServices() {
    for(let i = 0; i < services.length; i++) {
        $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`);
    }
}

// create init function
function init() {

    services = readArray();


    addServices();

//     // Hook events
    $("#notifications2").hide();
    $("#btnRegister").on('click', register2);
}


$(document).ready(init);

// function init() {
//     let s1 = new Service("grooming",20);
//     services.push(s1);



//     addServices();

//     // Hook events
    
//     $("#btnRegister").on('click', register);
// }


// window.onload=init;

