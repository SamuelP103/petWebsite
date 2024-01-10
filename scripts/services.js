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
        $("#txtDescription").addClass("bg-red");
        validation = false;
    } else {
        $("#txtDescription").removeClass("bg-red");
    }

    if (price === "") {
        $("#notifications").text("Insert a valid price").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtPrice").addClass("bg-red");
        validation = false;
    } else {
        $("#txtPrice").removeClass("bg-red");
    }

    return validation;
}

// make register function
function register() {
    if (isValid()) {
        console.log("Adding a new service");
        let inputDescription = $("#txtDescription").val();
        let inputPrice = $("#txtPrice").val();

        let newService = new Service(inputDescription, inputPrice);
        services.push(newService);

        console.log(newService);
        console.log(services);

        
        $("#txtDescription, #txtPrice").val("");

        
        $("#notifications").removeClass("alert-danger").addClass("alert-success").text("Service registered successfully!").fadeIn(1000).delay(2000).slideUp(1000);
    }
}

// create init function
function init() {
    let s1 = new Service("grooming", 20);
    services.push(s1);
    // hook event
    $("#btnRegister").on('click', register);
}

// wait for load
$(document).ready(init);
