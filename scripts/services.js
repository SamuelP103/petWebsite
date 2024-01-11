let services = [];

// create constructor
function Service(description, price) {
    this.description = description;
    this.price = price;
}



// valid or not
function isValid() {
    let validation = true;

    let description = $("#txtDescription").val();
    let price = $("#txtPrice").val();

    if (description === "") {
        $("#notifications").text("Insert a valid description").fadeIn(1000).delay(2000).slideUp(1000);
        $("#Notifications").addClass("bg-red");
        validation = false;
    } else {
        $("#txtDescription").removeClass("bg-red");
    }

    if (price === "") {
        $("#notifications").text("Insert a valid price").fadeIn(1000).delay(2000).slideUp(1000);
        $("#Notifications").addClass("bg-red");
        validation = false;
    } else {
        $("#txtPrice").removeClass("bg-red");
    }

    return validation;
}

// make register function
function register() {
    if (isValid()) {
        
        let inputDescription = $("#txtDescription").val();
        let inputPrice = $("#txtPrice").val();

        let newService = new Service(inputDescription, inputPrice);
        services.push(newService);
        saveArray(newService);
        
        

        
        
        $("#txtDescription, #txtPrice").val("");

        
        $("#notifications").removeClass("alert-danger").addClass("alert-success").text("Service registered successfully!").fadeIn(1000).delay(2000).slideUp(1000);
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
    $("#notifications").hide();
    $("#btnRegister").on('click', register);
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


