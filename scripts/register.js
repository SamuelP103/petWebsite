// object literal

// object = curly bracket and array = square
// no math operation -> make string
// let petSalon = {
//     name:"The Super Fashion Pet",
//     address:{
//         street:"Av. Univeridad",
//         number:"8392",
//         zip:"238309"
//     },
//     Hours:{
//         open:"9.00am",
//         close:"8.00am"
//     },
    

// The variables to function like a "database" in an array
const pets = [
        {
            name:"lucas",
            age:"12",
            gender:"Male",
            service:"nail cut",
            breed:"beagle"

        },
        {
            name:"Tweety",
            age:"7",
            gender:"Male",
            service:"Vaccine",
            breed:"Poodle"

        },
        {
            name:"Scooby",
            age:"4",
            gender:"Female",
            service:"Hair trim",
            breed:"Husky"

        }

    ]


// console.log(petSalon.name);
// console.log(petSalon.pets[0].name);
// console.log(petSalon.pets[1].name);
// console.log(petSalon.pets[2].name);

//document.getElementById("title").innerHTML=petSalon.name;


// function one -> counts pets via pets.length
function petAmount() {
    const counter = document.getElementById("petsRegisterNum");
    counter.textContent = pets.length;
} // can add .toString to make ^^^ this number a string

// function two displays the pets names via line 73
function displayNames() {
    const petNames = document.getElementById("petList");


    petList.innerHTML = "";

    //for loop that goes though the pet names to create a list
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        const listItem = document.createElement("li");
        listItem.textContent = pet.name;
        //append means to attach and append child means to attach the names to each other in this context
        petList.appendChild(listItem);
    }
}

// runs the functions
petAmount();
displayNames();