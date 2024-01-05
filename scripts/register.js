// object literal

// object = curly bracket and array = square
// no math operation -> make string
let petSalon = {
    name:"The Super Fashion Pet",
    address:{
        street:"Av. Univeridad",
        number:"8392",
        zip:"238309"
    },
    Hours:{
        open:"9.00am",
        close:"8.00am"
    },
pets:[]

}
    
// obj constructor (function)
function Pet(n,a,g,b,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
}

function register(){
    console.log("registering");
    //get the value from inputs
let inputName = document.getElementById("txtName").value;
let inputAge = document.getElementById("txtAge").value;
let inputGender = document.getElementById("txtGender").value;
let inputBreed = document.getElementById("txtBreed").value;
let inputService = document.getElementById("txtService").value;
    //create the obj
console.log(inputName,inputAge,inputGender,inputBreed);
    //display the pets array on console

// creating obj
let newPet= new Pet(inputName,inputAge,inputGender, inputBreed, inputService);
petSalon.pets.push(newPet);
console.log(petSalon.pets);

displayPetCards();
petAmount();

}
//creating pets using constructor


// pushing pets into pets array







function init(){
    let p1 = new Pet("Scooby",60,"male","Beagle","Nail-Clip");
    let p2 = new Pet("tiger",16,"male","Bulldog","Haircut");
    let p3 = new Pet("Lucky",25,"male","Poodle","Shots");
    let p4 = new Pet("rex",12,"male","Lab","Haircut");

    petSalon.pets.push(p1,p2,p3,p4);

    displayPetCards();
    petAmount();
    
}


window.onload=init; // waits to render the html















/*
// function two displays the pets names via line 73
function displayNames() {
    const petNames = document.getElementById("petList");


    petList.innerHTML = "";

    //for loop that goes though the pet names to create a list
    /*
    for (let i = 0; i < Pet.length; i++) {
        const pets = Pet[i];
        const listItem = document.createElement("li");
        listItem.textContent = petSalon.pets;
        //append means to attach and append child means to attach the names to each other in this context
        petList.appendChild(listItem);
    }
}

// runs the functions

displayNames();
*/