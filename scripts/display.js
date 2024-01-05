// function one -> counts pets via pets.length
function petAmount() {
const counter = document.getElementById("petsRegisterNum");
    counter.textContent = petSalon.pets.length.toString();
    
}


function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";

    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
        <div> 
            <p> Name: ${pet.name}</p> 
            <p> Age: ${pet.age}</p> 
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Service: ${pet.service}</p>
        </div>
        `
}
    DIV.innerHTML=card;
    //create the html template


}