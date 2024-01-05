// function one -> counts pets via pets.length
function petAmount() {
    const counter = document.getElementById("petsRegisterNum");
    counter.textContent = petSalon.pets.length.toString();
}

function displayPetCards() {
    const DIV = document.getElementById("pets");
    let card = "";

    // travel the array
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        card += `
        <div id="${pet.id}">
            <p> Name: ${pet.name}</p> 
            <p> Age: ${pet.age}</p> 
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Service: ${pet.service}</p>
            <p> When: ${pet.time}</p>
            <p> <button onclick="deletePet(${pet.id})">🗑️</button></p>
        </div>
        `;
    }

    DIV.innerHTML = card;

}



function displayPetCards2() {
    const TABLE_BODY = document.getElementById("pets2");
    let tableRows = "";

    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        tableRows += `
        <tr id="${pet.id}">
            <td> Name: ${pet.name}</td> 
            <td> Age: ${pet.age}</td> 
            <td> Gender: ${pet.gender}</td>
            <td> Breed: ${pet.breed}</td>
            <td> Service: ${pet.service}</td>
            <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
        </tr>
        `;
    }

    TABLE_BODY.innerHTML = tableRows;
}


displayPetCards2();

