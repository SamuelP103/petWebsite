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
function Pet(n,a,g,b){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
}

function register(){
    console.log("registering");
    //get the value from inputs
let inputName = document.getElementById("txtName").value;
let inputAge = document.getElementById("txtAge").value;
let inputGender = document.getElementById("txtGender").value;
let inputBreed = document.getElementById("txtBreed").value;
    //create the obj
console.log(inputName,inputAge,inputGender,inputBreed);
    //display the pets array on console

// creating obj
let newPet= new Pet(inputName,inputAge,inputGender, inputBreed);
petSalon.pets.push(newPet);
console.log(petSalon.pets);
}
//creating pets using constructor
let p1 = new Pet("Scooby",60,"male","Beagle");
let p2 = new Pet("tiger",16,"male","Bulldog");
let p3 = new Pet("Lucky",25,"male","Poodle");
let p4 = new Pet("rex",12,"male","Lab");



// pushing pets into pets array
petSalon.pets.push(p1,p2,p3,p4);




// function one -> counts pets via pets.length
function petAmount() {
    const counter = document.getElementById("petsRegisterNum");
    counter.textContent = Pet.length;
    
}
petAmount(); // can add .toString to make ^^^ this number a string
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