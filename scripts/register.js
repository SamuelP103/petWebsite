

let petSalon = {
    name: "The Super Fashion Pet",
    address: {
        street: "Av. Univeridad",
        number: "8392",
        zip: "238309"
    },
    Hours: {
        open: "9.00am",
        close: "8.00am"
    },
    pets: []
};

let counter = 0;

function Pet(n, a, g, b, s, t, price) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.price=price;
    this.id = counter++;
    this.time = t;
}

function isValid(aPet) {
    let validation = true;
    
    
    console.log("Name:", aPet.name);

    if (aPet.name === "") {
        
        console.log("Invalid name");
        $("#notifications").text("Insert a valid name").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtName").addClass("bg-red");
        validation = false;
    }

    if (aPet.age === "") {
        console.log("Invalid name");
        $("#notifications").text("Insert a valid number for age").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtAge").addClass("bg-red");
        validation = false;
    }

    if (aPet.gender === "") {
        console.log("Invalid gen");
        $("#notifications").text("Insert a gender").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtGender").addClass("bg-red");
        validation = false;
    }

    if (aPet.breed === "") {
        console.log("Invalid breed");
        $("#notifications").text("Insert a valid breed").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtBreed").addClass("bg-red");
        validation = false;
    }

    if (aPet.service === "") {
        console.log("Invalid service");
        $("#notifications").text("Insert a service requested").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtService").addClass("bg-red");
        validation = false;
    }

    if (aPet.time === "") {
        console.log("Invalid time");
        $("#notifications").text("Insert an appointment time").fadeIn(1000).delay(2000).slideUp(1000);
        $("#txtTime").addClass("bg-red");
        validation = false;
    }
    console.log("Validation result:", validation);
    return validation;
    


}

function register() {
    console.log("registering");
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtServices").value;

    let inputTime = document.getElementById("txtTime").value;
    let inputPrice=getServicePrice(inputService);
    

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputTime,inputPrice);
    

    console.log("New Pet:", newPet);

    if (isValid(newPet)) {
        console.log("is valid?");
        petSalon.pets.push(newPet);
        
        // clear inputs with JQ
        
        
        displayPetCards();    
        petAmount();
        //displayPets();
        $("input").val("");

        showNotification("notifications","alert-success","Registration was successful");

    } else {
        showNotification("notifications","alert-danger","Insert all of the required fields");
        

    }
}
function getServicePrice(serviceDescription) {
    let services = readArray();
    let price;
    for (let i = 0; i < services.length; i++) {
        console.log(services[i]);
        if (services[i].description == serviceDescription) {
            price = services[i].price;
            break;
        }
    }
    return price;
}

function showNotification(id,styling,message){
    $('#'+id).text(message).addClass(styling).fadeIn(1000).delay(2000).slideUp(1000);

}



function deletePet(petID) {
    console.log("Deleting pet with ID: " + petID);

    // here will find the pet element by ID
    let petElement = document.getElementById(petID);

    // This will remove the pet
    if (petElement) {
        petElement.remove();
    }


    let deleteIndex;
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        if (pet.id === petID) {
            deleteIndex = i;
            break; 
            //^^ that will make it os it wont get stuck in a death loop 
        }
    }


    if (deleteIndex !== undefined) {
        petSalon.pets.splice(deleteIndex, 1);
        petAmount();
    }
}
function addServices(){
    console.log(services);
    let services = readArray();
    for(let i=0;i<services.length;i++){
        $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`)
    }
}

function init() {
    

    let p1 = new Pet("Scooby", 60, "male", "Beagle", "Nail-Clip","13:00", getServicePrice("Nail-clip"));
    let p2 = new Pet("tiger", 16, "male", "Bulldog", "Haircut","09:00", getServicePrice("Haircut"));
    let p3 = new Pet("Lucky", 25, "male", "Poodle", "Vaccine","14:00", getServicePrice("Vaccine"));
    let p4 = new Pet("rex", 12, "male", "Lab", "Haircut","16:00", getServicePrice("Haircut"));

    petSalon.pets.push(p1, p2, p3, p4);
    
    displayPetCards();
    addServices();
    petAmount();

    //hook events
    $("#notifications").hide();
}

window.onload = init;




